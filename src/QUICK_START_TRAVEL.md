# Quick Start: Add Your Vietnam Trip Photos

Fast guide to get your Vietnam photos into the Travel Highlights section.

## 🚀 3 Simple Steps

### Step 1: Upload Photos (2 minutes)

1. Go to folder: `/public/images/travel/vietnam/`
2. Upload your Vietnam photos there
3. Pick your best photo as the cover

**Example:**
```
/public/images/travel/vietnam/
├── hanoi-street.jpg       ← Your photos here
├── halong-bay.jpg
├── hoi-an.jpg
├── saigon.jpg
└── ... more photos
```

### Step 2: Update Code (3 minutes)

1. Open file: `/components/TravelHighlights.tsx`
2. Find line: `const highlights: Highlight[] = [`
3. Find the Vietnam section
4. Replace the image URLs with your photos

**Before (Unsplash placeholder):**
```tsx
{
  id: "vietnam-2026",
  title: "Vietnam",
  cover: "https://images.unsplash.com/photo-...",  // ← Old placeholder
  location: "Vietnam",
  date: "February 2026",
  photos: [
    {
      src: "https://images.unsplash.com/photo-...",  // ← Old placeholder
      caption: "Hanoi Old Quarter - Exploring the historic streets",
    },
    // ... more placeholders
  ],
}
```

**After (Your photos):**
```tsx
{
  id: "vietnam-2026",
  title: "Vietnam",
  cover: "/images/travel/vietnam/hanoi-street.jpg",  // ← Your cover photo
  location: "Vietnam",
  date: "February 2026",  // ← Update your travel dates
  photos: [
    {
      src: "/images/travel/vietnam/hanoi-street.jpg",  // ← Your photo
      caption: "Hanoi Old Quarter - Morning street scenes",  // ← Your caption
    },
    {
      src: "/images/travel/vietnam/halong-bay.jpg",
      caption: "Ha Long Bay - Overnight cruise experience",
    },
    {
      src: "/images/travel/vietnam/hoi-an.jpg",
      caption: "Hoi An Ancient Town - Magical lantern festival",
    },
    {
      src: "/images/travel/vietnam/saigon.jpg",
      caption: "Ho Chi Minh City - Bustling street markets",
    },
    // Add as many photos as you want!
  ],
}
```

### Step 3: View & Enjoy! (1 second)

1. Save the file
2. Refresh your portfolio website
3. Click on the Vietnam highlight
4. Navigate through your photos! 🎉

## 📋 Complete Example

Here's a full working example you can copy and modify:

```tsx
{
  id: "vietnam-feb-2026",
  title: "Vietnam",
  cover: "/images/travel/vietnam/cover.jpg",
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
    {
      src: "/images/travel/vietnam/hoi-an-lanterns.jpg",
      caption: "Hoi An Ancient Town - Magical lantern festival",
    },
    {
      src: "/images/travel/vietnam/hoi-an-food.jpg",
      caption: "Cao Lau - Traditional Hoi An noodles",
    },
    {
      src: "/images/travel/vietnam/saigon-market.jpg",
      caption: "Ben Thanh Market - Bustling Saigon shopping",
    },
    {
      src: "/images/travel/vietnam/mekong-delta.jpg",
      caption: "Mekong Delta - Floating market boat ride",
    },
    {
      src: "/images/travel/vietnam/vietnamese-coffee.jpg",
      caption: "Vietnamese coffee - Best iced coffee ever!",
    },
    {
      src: "/images/travel/vietnam/temple-literature.jpg",
      caption: "Temple of Literature - Ancient university",
    },
  ],
}
```

## ⚡ Pro Tips

**Best Photo Selection:**
- Choose 5-10 of your absolute best photos
- Mix different types: landmarks, food, culture, people
- Use portrait orientation for authentic Instagram feel
- Pick a stunning cover photo (this is what people see first)

**Caption Writing:**
- Keep it short: 1-2 sentences max
- Be specific: "Hanoi Old Quarter" not just "Vietnam"
- Add personal touch: "Best pho of my life!" 
- Use emojis sparingly if desired

**Image Optimization:**
1. Resize to 1080x1920 (portrait) before uploading
2. Compress using [TinyPNG](https://tinypng.com/)
3. Keep file size under 1MB
4. Use descriptive file names

## 🎨 Customization Options

### Change Trip Date
```tsx
date: "February 2026",  // ← Change this
```

### Change Trip Name
```tsx
title: "Vietnam",  // ← Shown under circular thumbnail
```

### Add More Photos
Just add more objects to the `photos` array:
```tsx
photos: [
  { src: "/images/travel/vietnam/photo1.jpg", caption: "Caption 1" },
  { src: "/images/travel/vietnam/photo2.jpg", caption: "Caption 2" },
  { src: "/images/travel/vietnam/photo3.jpg", caption: "Caption 3" },
  // Keep adding...
]
```

## 🌏 Add More Destinations

Want to add Thailand, Nepal, or other trips?

### Quick Method:
1. Create folder: `/public/images/travel/thailand/`
2. Upload photos there
3. Copy the Vietnam highlight object
4. Change ID, title, paths, and captions
5. Add to highlights array

### Example:
```tsx
const highlights: Highlight[] = [
  // Vietnam (already exists)
  { ... },
  
  // Add Thailand
  {
    id: "thailand-2025",
    title: "Thailand",
    cover: "/images/travel/thailand/bangkok-temple.jpg",
    location: "Thailand",
    date: "December 2025",
    photos: [
      { src: "/images/travel/thailand/bangkok-temple.jpg", caption: "Grand Palace" },
      { src: "/images/travel/thailand/floating-market.jpg", caption: "Floating market" },
      // ... more photos
    ],
  },
];
```

## 🔧 Troubleshooting

**Photos not showing?**
- Check file path: `/images/travel/vietnam/photo.jpg` (correct)
- Don't include `/public/`: `/public/images/...` (wrong)
- Verify files are actually uploaded to the folder
- Hard refresh browser: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

**Viewer not opening?**
- Check that `id` is unique
- Verify `photos` array is not empty
- Look for syntax errors (missing commas, brackets)

**Need to remove a photo?**
- Just delete that photo object from the `photos` array
- Don't forget to remove the comma if it's the last item

## 📚 Full Documentation

Need more details?
- **Complete Guide:** `/TRAVEL_GUIDE.md`
- **Folder Structure:** `/public/images/FOLDER_STRUCTURE.md`
- **Add Destinations:** `/public/images/travel/HOW_TO_ADD_NEW_DESTINATION.md`
- **Vietnam Folder:** `/public/images/travel/vietnam/README.md`

## ✅ Checklist

Before you start:
- [ ] Compress your photos using TinyPNG
- [ ] Rename files with descriptive names
- [ ] Choose your best cover photo

Adding photos:
- [ ] Upload photos to `/public/images/travel/vietnam/`
- [ ] Open `/components/TravelHighlights.tsx`
- [ ] Update the Vietnam highlight with your photo paths
- [ ] Add captions to each photo
- [ ] Update the date

Testing:
- [ ] Save the file
- [ ] Refresh your portfolio
- [ ] Click Vietnam highlight to open viewer
- [ ] Test arrow navigation (← →)
- [ ] Check all photos load correctly
- [ ] Verify captions display properly

## 🎉 That's It!

You now have an Instagram-style Travel Highlights section showing your Vietnam trip!

**What you get:**
- ✅ Circular highlight thumbnail with gradient border
- ✅ Fullscreen story viewer
- ✅ Arrow navigation between photos
- ✅ Progress bars showing position
- ✅ Photo captions
- ✅ Keyboard shortcuts (← → ESC)
- ✅ Mobile responsive
- ✅ Light/dark mode support

**Happy traveling! 🌏✈️📸**
