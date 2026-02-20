import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Initialize Supabase client
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Bucket name for travel media
const BUCKET_NAME = "make-b0d9ba53-travel";

// Initialize storage bucket on startup
async function initializeBucket() {
  try {
    const { data: buckets } = await supabase.storage.listBuckets();
    const bucketExists = buckets?.some((bucket) => bucket.name === BUCKET_NAME);

    if (!bucketExists) {
      const { error } = await supabase.storage.createBucket(BUCKET_NAME, {
        public: false,
      });
      if (error) {
        console.error("Error creating bucket:", error);
      } else {
        console.log("Travel bucket created successfully");
      }
    }
  } catch (error) {
    console.error("Error initializing bucket:", error);
  }
}

// Initialize on server start
initializeBucket();

// Get all travel highlights
app.get("/make-server-b0d9ba53/travel/highlights", async (c) => {
  try {
    const highlights = await kv.getByPrefix("travel:highlight:");
    
    // Sort by created date (newest first)
    const sortedHighlights = highlights.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return c.json({ success: true, highlights: sortedHighlights });
  } catch (error) {
    console.error("Error fetching highlights:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Get single highlight by ID
app.get("/make-server-b0d9ba53/travel/highlights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const highlight = await kv.get(`travel:highlight:${id}`);

    if (!highlight) {
      return c.json({ success: false, error: "Highlight not found" }, 404);
    }

    return c.json({ success: true, highlight });
  } catch (error) {
    console.error("Error fetching highlight:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Create new highlight
app.post("/make-server-b0d9ba53/travel/highlights", async (c) => {
  try {
    const body = await c.req.json();
    const { id, title, location, date, cover, photos } = body;

    if (!id || !title || !location || !date) {
      return c.json(
        { success: false, error: "Missing required fields" },
        400
      );
    }

    const highlight = {
      id,
      title,
      location,
      date,
      cover: cover || "",
      photos: photos || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`travel:highlight:${id}`, highlight);

    return c.json({ success: true, highlight });
  } catch (error) {
    console.error("Error creating highlight:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Update highlight
app.put("/make-server-b0d9ba53/travel/highlights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const body = await c.req.json();

    const existingHighlight = await kv.get(`travel:highlight:${id}`);
    if (!existingHighlight) {
      return c.json({ success: false, error: "Highlight not found" }, 404);
    }

    const updatedHighlight = {
      ...existingHighlight,
      ...body,
      updatedAt: new Date().toISOString(),
    };

    await kv.set(`travel:highlight:${id}`, updatedHighlight);

    return c.json({ success: true, highlight: updatedHighlight });
  } catch (error) {
    console.error("Error updating highlight:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete highlight
app.delete("/make-server-b0d9ba53/travel/highlights/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const highlight = await kv.get(`travel:highlight:${id}`);

    if (!highlight) {
      return c.json({ success: false, error: "Highlight not found" }, 404);
    }

    // Delete all associated files from storage
    if (highlight.photos && highlight.photos.length > 0) {
      const filePaths = highlight.photos
        .map((photo: any) => {
          if (photo.storagePath) return photo.storagePath;
          return null;
        })
        .filter(Boolean);

      if (filePaths.length > 0) {
        await supabase.storage.from(BUCKET_NAME).remove(filePaths);
      }
    }

    // Delete cover image if it exists
    if (highlight.cover && highlight.coverStoragePath) {
      await supabase.storage
        .from(BUCKET_NAME)
        .remove([highlight.coverStoragePath]);
    }

    await kv.del(`travel:highlight:${id}`);

    return c.json({ success: true, message: "Highlight deleted" });
  } catch (error) {
    console.error("Error deleting highlight:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Upload media file (image or video)
app.post("/make-server-b0d9ba53/travel/upload", async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get("file") as File;
    const highlightId = formData.get("highlightId") as string;
    const type = formData.get("type") as string; // 'cover' or 'photo'

    if (!file || !highlightId) {
      return c.json(
        { success: false, error: "Missing file or highlightId" },
        400
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop();
    const fileName = `${highlightId}/${timestamp}.${fileExtension}`;

    // Upload to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Error uploading file:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    // Generate signed URL (valid for 1 year)
    const { data: signedUrlData } = await supabase.storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 31536000); // 1 year in seconds

    return c.json({
      success: true,
      url: signedUrlData?.signedUrl,
      storagePath: fileName,
      type: file.type.startsWith("video") ? "video" : "image",
    });
  } catch (error) {
    console.error("Error in upload endpoint:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Delete media file
app.delete("/make-server-b0d9ba53/travel/media/:path", async (c) => {
  try {
    const path = c.req.param("path");
    const decodedPath = decodeURIComponent(path);

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([decodedPath]);

    if (error) {
      console.error("Error deleting file:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    return c.json({ success: true, message: "File deleted" });
  } catch (error) {
    console.error("Error in delete media endpoint:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

export default app;
