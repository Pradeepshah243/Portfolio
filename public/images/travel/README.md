# Travel Images Folder

This folder contains all your travel photos organized by destination.

## Folder Structure

```
/public/images/travel/
├── vietnam/          # Vietnam trip photos
├── thailand/         # Thailand trip photos
├── nepal/            # Nepal trip photos
└── ... (add more destinations as needed)
```

## How to Organize Your Photos

### 1. Create a folder for each trip/destination
Example: `/public/images/travel/vietnam/`

### 2. Add your photos to that folder
- Include a cover photo (for the circular thumbnail)
- Add all the photos you want to show in the story viewer
- Use descriptive file names (e.g., `hanoi-street.jpg`, `halong-bay.jpg`)

### 3. Recommended naming convention
- Use lowercase letters
- Use hyphens instead of spaces
- Be descriptive: `hoi-an-lanterns.jpg` instead of `IMG_1234.jpg`

## Image Specifications

### Cover Photo (Circular Thumbnail)
- **Size**: 800x800px (square, 1:1 ratio)
- **Format**: JPG or PNG
- **File size**: Under 300KB
- **Suggested name**: `cover.jpg` or use your best photo

### Story Photos
- **Size**: 1080x1920px (portrait, 9:16 ratio) for Instagram-like feel
  - OR 1920x1080px (landscape, 16:9 ratio)
- **Format**: JPG or PNG
- **File size**: Under 1MB per photo
- **Compress**: Use [TinyPNG](https://tinypng.com/) before uploading

## Example Structure

```
/public/images/travel/vietnam/
├── cover.jpg                    # Main thumbnail (or use any photo as cover)
├── hanoi-old-quarter.jpg
├── halong-bay-sunset.jpg
├── hoi-an-lanterns-night.jpg
├── hoi-an-street-food.jpg
├── saigon-market.jpg
├── mekong-delta-boat.jpg
└── temple-literature.jpg
```

## After Uploading Photos

1. Open `/components/TravelHighlights.tsx`
2. Find the `highlights` array
3. Update the image paths to point to your uploaded photos

Example:
```tsx
{
  id: "vietnam-2026",
  title: "Vietnam",
  cover: "/images/travel/vietnam/cover.jpg",  // Your cover photo
  location: "Vietnam",
  date: "February 2026",
  photos: [
    {
      src: "/images/travel/vietnam/hanoi-old-quarter.jpg",
      caption: "Hanoi Old Quarter - Morning street scenes",
    },
    {
      src: "/images/travel/vietnam/halong-bay-sunset.jpg",
      caption: "Ha Long Bay - Beautiful sunset cruise",
    },
    // ... add all your photos here
  ],
}
```

## Tips

✅ **DO:**
- Use high-quality photos
- Compress images before uploading
- Use descriptive file names
- Keep file sizes under 1MB
- Choose your best photo as the cover

❌ **DON'T:**
- Upload raw camera files (too large)
- Use spaces in file names
- Use generic names like IMG_1234.jpg
- Forget to compress images

## Quick Reference

**Path format in code:**
```
/images/travel/[destination]/[photo-name].jpg
```

**Not:**
```
/public/images/travel/...  ❌ (don't include /public/)
./images/travel/...        ❌ (don't use ./)
```

**Correct:**
```
/images/travel/vietnam/hanoi.jpg  ✅
```

---

Need help? Check the main guide at `/TRAVEL_GUIDE.md`
