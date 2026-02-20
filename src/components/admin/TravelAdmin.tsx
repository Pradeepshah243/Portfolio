import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  Trash2,
  Edit2,
  Upload,
  Save,
  X,
  Image as ImageIcon,
  Video,
  MapPin,
  Calendar,
  Loader,
  ArrowLeft,
  Home,
} from "lucide-react";
import { projectId, publicAnonKey } from "../../utils/supabase/info";

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-b0d9ba53`;

interface TravelPhoto {
  src: string;
  caption?: string;
  type?: "image" | "video";
  storagePath?: string;
}

interface Highlight {
  id: string;
  title: string;
  cover: string;
  coverStoragePath?: string;
  location: string;
  date: string;
  photos: TravelPhoto[];
  createdAt?: string;
  updatedAt?: string;
}

interface TravelAdminProps {
  onExit?: () => void;
}

export function TravelAdmin({ onExit }: TravelAdminProps) {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingHighlight, setEditingHighlight] = useState<Highlight | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    location: "",
    date: "",
    cover: "",
    coverStoragePath: "",
    photos: [] as TravelPhoto[],
  });

  useEffect(() => {
    fetchHighlights();
  }, []);

  const fetchHighlights = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/travel/highlights`, {
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setHighlights(data.highlights);
      }
    } catch (error) {
      console.error("Error fetching highlights:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    const newId = `trip-${Date.now()}`;
    setFormData({
      id: newId,
      title: "",
      location: "",
      date: "",
      cover: "",
      coverStoragePath: "",
      photos: [],
    });
    setIsCreating(true);
    setEditingHighlight(null);
  };

  const handleEdit = (highlight: Highlight) => {
    setFormData({
      id: highlight.id,
      title: highlight.title,
      location: highlight.location,
      date: highlight.date,
      cover: highlight.cover,
      coverStoragePath: highlight.coverStoragePath || "",
      photos: highlight.photos || [],
    });
    setEditingHighlight(highlight);
    setIsCreating(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this highlight?")) return;

    try {
      const response = await fetch(`${API_BASE}/travel/highlights/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        fetchHighlights();
      }
    } catch (error) {
      console.error("Error deleting highlight:", error);
      alert("Failed to delete highlight");
    }
  };

  const handleUploadCover = async (file: File) => {
    try {
      setUploadingFiles(true);
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);
      formDataUpload.append("highlightId", formData.id);
      formDataUpload.append("type", "cover");

      const response = await fetch(`${API_BASE}/travel/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: formDataUpload,
      });

      const data = await response.json();
      if (data.success) {
        setFormData({
          ...formData,
          cover: data.url,
          coverStoragePath: data.storagePath,
        });
      }
    } catch (error) {
      console.error("Error uploading cover:", error);
      alert("Failed to upload cover image");
    } finally {
      setUploadingFiles(false);
    }
  };

  const handleUploadPhotos = async (files: FileList) => {
    try {
      setUploadingFiles(true);
      const uploadPromises = Array.from(files).map(async (file) => {
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);
        formDataUpload.append("highlightId", formData.id);
        formDataUpload.append("type", "photo");

        const response = await fetch(`${API_BASE}/travel/upload`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: formDataUpload,
        });

        const data = await response.json();
        if (data.success) {
          return {
            src: data.url,
            caption: "",
            type: data.type,
            storagePath: data.storagePath,
          };
        }
        return null;
      });

      const uploadedPhotos = (await Promise.all(uploadPromises)).filter(Boolean);
      setFormData({
        ...formData,
        photos: [...formData.photos, ...(uploadedPhotos as TravelPhoto[])],
      });
    } catch (error) {
      console.error("Error uploading photos:", error);
      alert("Failed to upload some photos");
    } finally {
      setUploadingFiles(false);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...formData.photos];
    newPhotos.splice(index, 1);
    setFormData({ ...formData, photos: newPhotos });
  };

  const handleUpdateCaption = (index: number, caption: string) => {
    const newPhotos = [...formData.photos];
    newPhotos[index].caption = caption;
    setFormData({ ...formData, photos: newPhotos });
  };

  const handleSave = async () => {
    if (!formData.title || !formData.location || !formData.date) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const url = editingHighlight
        ? `${API_BASE}/travel/highlights/${formData.id}`
        : `${API_BASE}/travel/highlights`;

      const method = editingHighlight ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        fetchHighlights();
        setEditingHighlight(null);
        setIsCreating(false);
      }
    } catch (error) {
      console.error("Error saving highlight:", error);
      alert("Failed to save highlight");
    }
  };

  const handleCancel = () => {
    setEditingHighlight(null);
    setIsCreating(false);
    setFormData({
      id: "",
      title: "",
      location: "",
      date: "",
      cover: "",
      coverStoragePath: "",
      photos: [],
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <Loader className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Security Warning Banner */}
        <div className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div className="flex-1">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-1">
                Security Reminder
              </h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                Before hosting your site publicly, change the default admin password in:
              </p>
              <code className="text-xs bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded">
                /components/AdminPasswordPrompt.tsx
              </code>
              <p className="text-xs text-yellow-700 dark:text-yellow-400 mt-2">
                Current default password: <strong>pradeep2026</strong> - Change this to your own secure password!
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-4">
            {onExit && (
              <button
                onClick={onExit}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                title="Back to Portfolio"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Travel Admin Panel
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your travel highlights and photos
              </p>
            </div>
          </div>
          <button
            onClick={handleCreateNew}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Plus className="h-5 w-5" />
            Add New Trip
          </button>
        </div>

        {/* Edit/Create Form */}
        <AnimatePresence>
          {(editingHighlight || isCreating) && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {editingHighlight ? "Edit Trip" : "Create New Trip"}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Trip Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="e.g., Vietnam, Thailand, Nepal"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g., Southeast Asia"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      placeholder="e.g., February 2026"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Cover Image (Circular Thumbnail)
                </label>
                <div className="flex gap-4 items-center">
                  {formData.cover && (
                    <img
                      src={formData.cover}
                      alt="Cover"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gradient-to-br from-blue-500 to-purple-500"
                    />
                  )}
                  <label className="cursor-pointer bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg p-4 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex-1">
                    <div className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400">
                      <Upload className="h-5 w-5" />
                      <span>Upload Cover Image</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleUploadCover(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Photos Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Trip Photos/Videos
                </label>
                <label className="cursor-pointer bg-purple-50 dark:bg-purple-900/20 border-2 border-dashed border-purple-300 dark:border-purple-700 rounded-lg p-6 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors block">
                  <div className="flex flex-col items-center justify-center gap-2 text-purple-600 dark:text-purple-400">
                    <div className="flex gap-2">
                      <ImageIcon className="h-6 w-6" />
                      <Video className="h-6 w-6" />
                    </div>
                    <span className="font-medium">
                      Drop files here or click to upload
                    </span>
                    <span className="text-sm text-gray-500">
                      Supports images and videos
                    </span>
                  </div>
                  <input
                    type="file"
                    accept="image/*,video/*"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        handleUploadPhotos(e.target.files);
                      }
                    }}
                    className="hidden"
                  />
                </label>

                {uploadingFiles && (
                  <div className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Loader className="h-5 w-5 animate-spin" />
                    <span>Uploading files...</span>
                  </div>
                )}
              </div>

              {/* Photos List */}
              {formData.photos.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Uploaded Photos ({formData.photos.length})
                  </h3>
                  <div className="space-y-4">
                    {formData.photos.map((photo, index) => (
                      <div
                        key={index}
                        className="flex gap-4 items-start bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                      >
                        {photo.type === "video" ? (
                          <video
                            src={photo.src}
                            className="w-24 h-24 rounded object-cover"
                            controls
                          />
                        ) : (
                          <img
                            src={photo.src}
                            alt=""
                            className="w-24 h-24 rounded object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <input
                            type="text"
                            value={photo.caption || ""}
                            onChange={(e) =>
                              handleUpdateCaption(index, e.target.value)
                            }
                            placeholder="Add caption..."
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                          />
                        </div>
                        <button
                          onClick={() => handleRemovePhoto(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={uploadingFiles}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  <Save className="h-5 w-5" />
                  Save Trip
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                {highlight.cover ? (
                  <img
                    src={highlight.cover}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-white opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    onClick={() => handleEdit(highlight)}
                    className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(highlight.id)}
                    className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-1">
                  <MapPin className="h-4 w-4" />
                  {highlight.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  {highlight.date}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {highlight.photos?.length || 0} photos
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {highlights.length === 0 && !editingHighlight && !isCreating && (
          <div className="text-center py-12">
            <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No travel highlights yet
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-4">
              Create your first trip to get started
            </p>
            <button
              onClick={handleCreateNew}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add Your First Trip
            </button>
          </div>
        )}
      </div>
    </div>
  );
}