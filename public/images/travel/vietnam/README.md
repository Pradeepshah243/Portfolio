# Vietnam Trip Photos

Upload all your Vietnam trip photos to this folder.

## What to Upload

1. **Cover Photo** - The main photo that will show in the circular thumbnail
   - Best photo from your trip
   - Square format works best (800x800px)
   - You can name it `cover.jpg` or use any of your photos

2. **All Trip Photos** - Every photo you want to show in the story viewer
   - Street scenes
   - Landmarks (Ha Long Bay, Hoi An, temples, etc.)
   - Food photos
   - Cultural experiences
   - Selfies and group photos

## Example File Names

Good file names:
- `hanoi-old-quarter.jpg`
- `halong-bay-sunset.jpg`
- `hoi-an-lanterns.jpg`
- `vietnamese-pho.jpg`
- `saigon-streets.jpg`
- `mekong-delta.jpg`

## After Uploading

Once you've uploaded your photos:

1. Open `/components/TravelHighlights.tsx`
2. Find the Vietnam highlight in the `highlights` array
3. Update the paths and captions:

```tsx
{
  id: "vietnam-2026",
  title: "Vietnam",
  cover: "/images/travel/vietnam/cover.jpg",  // ← Your cover photo
  location: "Vietnam",
  date: "February 2026",  // ← Update your travel date
  photos: [
    {
      src: "/images/travel/vietnam/hanoi-old-quarter.jpg",  // ← Your photo
      caption: "Hanoi Old Quarter - Your caption here",      // ← Your caption
    },
    {
      src: "/images/travel/vietnam/halong-bay-sunset.jpg",
      caption: "Ha Long Bay - Amazing overnight cruise",
    },
    // Add all your photos here...
  ],
}
```

## Image Tips

- **Compress before uploading** using [TinyPNG](https://tinypng.com/)
- **Portrait orientation** (1080x1920px) works best for Instagram-style stories
- **File size**: Keep under 1MB per photo
- **Quality**: Use high-quality photos, but not raw camera files

## Recommended Photo Order

Consider arranging your photos to tell a story:
1. Arrival / First impressions
2. Iconic landmarks
3. Local culture & experiences
4. Food adventures
5. Daily life / street scenes
6. Memorable moments
7. Departure / Final thoughts

---

**Path to use in code:** `/images/travel/vietnam/[your-photo-name].jpg`

Currently showing: **Placeholder images from Unsplash**
Replace these with your actual Vietnam photos!
