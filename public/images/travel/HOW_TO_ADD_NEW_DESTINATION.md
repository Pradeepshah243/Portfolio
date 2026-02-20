# How to Add a New Travel Destination

Quick guide for adding a new trip to your Travel Highlights section.

## Step 1: Create a New Folder

Create a new folder for your destination:
```
/public/images/travel/[destination-name]/
```

**Examples:**
- `/public/images/travel/japan/`
- `/public/images/travel/europe/`
- `/public/images/travel/maldives/`
- `/public/images/travel/india/`

**Naming tips:**
- Use lowercase
- Use single word or hyphens (not spaces)
- Be specific if needed (e.g., `south-korea` instead of just `korea`)

## Step 2: Upload Your Photos

Add all photos to your new folder:
```
/public/images/travel/japan/
├── cover.jpg
├── tokyo-shibuya.jpg
├── mount-fuji.jpg
├── kyoto-temple.jpg
├── osaka-food.jpg
└── ... more photos
```

## Step 3: Update the Code

Open `/components/TravelHighlights.tsx` and add your new destination to the `highlights` array:

```tsx
const highlights: Highlight[] = [
  // ... existing highlights (Vietnam, Thailand, Nepal)
  
  // Add your new destination here:
  {
    id: "japan-2026",                           // Unique ID (lowercase-year)
    title: "Japan",                             // Display name
    cover: "/images/travel/japan/cover.jpg",    // Cover photo path
    location: "Japan",                          // Location name
    date: "March 2026",                         // Travel date
    photos: [                                   // Array of photos
      {
        src: "/images/travel/japan/tokyo-shibuya.jpg",
        caption: "Shibuya Crossing - Tokyo's iconic intersection",
      },
      {
        src: "/images/travel/japan/mount-fuji.jpg",
        caption: "Mount Fuji - Breathtaking views",
      },
      {
        src: "/images/travel/japan/kyoto-temple.jpg",
        caption: "Fushimi Inari Shrine - Thousands of red torii gates",
      },
      {
        src: "/images/travel/japan/osaka-food.jpg",
        caption: "Osaka street food - Takoyaki heaven",
      },
      // Add as many photos as you want
    ],
  },
];
```

## Complete Example

Here's a complete example for adding a new Maldives trip:

### 1. Create folder structure:
```
/public/images/travel/maldives/
```

### 2. Upload photos:
```
/public/images/travel/maldives/
├── beach-sunset.jpg
├── underwater-coral.jpg
├── overwater-villa.jpg
├── local-island.jpg
└── night-sky.jpg
```

### 3. Add to highlights array:
```tsx
{
  id: "maldives-2025",
  title: "Maldives",
  cover: "/images/travel/maldives/beach-sunset.jpg",
  location: "Maldives",
  date: "December 2025",
  photos: [
    {
      src: "/images/travel/maldives/beach-sunset.jpg",
      caption: "Paradise beach - Perfect sunset",
    },
    {
      src: "/images/travel/maldives/underwater-coral.jpg",
      caption: "Snorkeling - Vibrant coral reefs",
    },
    {
      src: "/images/travel/maldives/overwater-villa.jpg",
      caption: "Overwater villa - Luxury accommodation",
    },
    {
      src: "/images/travel/maldives/local-island.jpg",
      caption: "Local island - Cultural experience",
    },
    {
      src: "/images/travel/maldives/night-sky.jpg",
      caption: "Stargazing - Incredible night sky",
    },
  ],
}
```

## Tips

✅ **Best Practices:**
- Add highlights in the order you want them displayed (left to right)
- Use unique IDs (destination-year format)
- Keep captions short and engaging (1-2 sentences)
- Choose your absolute best photo as the cover
- Arrange photos to tell a story

⚠️ **Common Mistakes:**
- Don't include `/public/` in the path
- Don't use spaces in folder/file names
- Don't forget the comma after each highlight object
- Don't forget to compress images before uploading

## Testing Your New Highlight

After adding:
1. Save the file
2. Refresh your portfolio website
3. Look for your new circular highlight thumbnail
4. Click it to open the story viewer
5. Check that all photos load correctly
6. Test navigation with arrow keys and buttons

## Image Optimization Checklist

Before uploading:
- [ ] Compress images using [TinyPNG](https://tinypng.com/)
- [ ] Resize to appropriate dimensions (1080x1920 for portrait)
- [ ] File size under 1MB per photo
- [ ] Use descriptive file names
- [ ] Choose best photo for cover (square crop works best)

## Folder Template

Copy this structure for new destinations:

```
/public/images/travel/[destination]/
├── cover.jpg              # Main thumbnail photo
├── photo-1.jpg            # First story photo
├── photo-2.jpg            # Second story photo
├── photo-3.jpg            # Third story photo
└── ...                    # Add as many as you want
```

---

**Quick Reference:**

| Step | Action | Location |
|------|--------|----------|
| 1 | Create folder | `/public/images/travel/[destination]/` |
| 2 | Upload photos | Inside your destination folder |
| 3 | Update code | `/components/TravelHighlights.tsx` |
| 4 | Add to array | `highlights` array |
| 5 | Test | View on your website |

---

Need detailed help? Check `/TRAVEL_GUIDE.md`
