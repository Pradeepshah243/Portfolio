# Travel Highlights Section - User Guide (Instagram-Style)

This guide will help you add and manage your travel photos in the Instagram-style Travel Highlights section.

## Overview

The Travel Highlights section displays your travel adventures in an **Instagram Highlights style** with:
- **Circular highlight thumbnails** with gradient borders (like Instagram story highlights)
- **Story-like viewer** that opens when you click a highlight
- **Navigation between photos** using arrow buttons or keyboard
- **Progress indicators** at the top showing which photo you're viewing
- **Auto-advancing animation** on the progress bars
- **Captions and location info** overlaid on photos
- **Responsive design** that works on all devices
- **Light/dark mode support**

## How It Works

1. **Circular Highlights Display**: Shows circular thumbnails representing each trip (like Instagram story highlights)
2. **Click to Open**: Click any highlight to open a fullscreen story viewer
3. **Navigate Photos**: Use arrow buttons, keyboard arrows (←/→), or let it auto-progress through photos
4. **Close Viewer**: Press ESC or click the X button to close

## Location of Files

The Travel Highlights component is located at:
```
/components/TravelHighlights.tsx
```

## How to Add Your Vietnam Photos

### Step 1: Upload Your Photos

Upload your Vietnam trip photos to the `/public/images/` directory:

```
/public/images/
├── travel/
│   ├── vietnam/
│   │   ├── cover.jpg          # Main cover photo for the highlight
│   │   ├── hanoi-1.jpg
│   │   ├── halong-bay.jpg
│   │   ├── hoi-an-1.jpg
│   │   ├── hoi-an-2.jpg
│   │   ├── saigon.jpg
│   │   └── ... (more photos)
```

### Step 2: Update the Highlights Array

Open `/components/TravelHighlights.tsx` and find the `highlights` array. Update it with your Vietnam trip:

```tsx
const highlights: Highlight[] = [
  {
    id: "vietnam-2026",              // Unique ID for this trip
    title: "Vietnam",                 // Trip name
    cover: "/images/travel/vietnam/cover.jpg",  // Cover photo (circular thumbnail)
    location: "Vietnam",              // Location name
    date: "February 2026",            // Date of trip
    photos: [                         // Array of all photos from this trip
      {
        src: "/images/travel/vietnam/hanoi-1.jpg",
        caption: "Hanoi Old Quarter - Exploring the historic streets",
      },
      {
        src: "/images/travel/vietnam/halong-bay.jpg",
        caption: "Ha Long Bay - Stunning limestone karsts",
      },
      {
        src: "/images/travel/vietnam/hoi-an-1.jpg",
        caption: "Hoi An Ancient Town - Beautiful lanterns at night",
      },
      {
        src: "/images/travel/vietnam/saigon.jpg",
        caption: "Ho Chi Minh City - The vibrant streets of Saigon",
      },
      // Add as many photos as you want!
    ],
  },
];
```

### Step 3: Understanding the Structure

Each highlight has:

- **id**: Unique identifier (use lowercase with hyphens, e.g., "vietnam-2026")
- **title**: Name shown under the circular thumbnail (e.g., "Vietnam")
- **cover**: Path to the cover image for the circular thumbnail
- **location**: Location name (can be same as title)
- **date**: When you visited (e.g., "February 2026" or "Dec 2025")
- **photos**: Array of photo objects, each with:
  - **src**: Path to the photo
  - **caption** (optional): Text shown at the bottom of the photo

## Adding Multiple Trips

You can add multiple trip highlights by adding more objects to the array:

```tsx
const highlights: Highlight[] = [
  // Vietnam Trip
  {
    id: "vietnam-2026",
    title: "Vietnam",
    cover: "/images/travel/vietnam/cover.jpg",
    location: "Vietnam",
    date: "February 2026",
    photos: [
      { src: "/images/travel/vietnam/hanoi.jpg", caption: "Hanoi streets" },
      { src: "/images/travel/vietnam/halong.jpg", caption: "Ha Long Bay" },
      // ... more photos
    ],
  },
  
  // Thailand Trip
  {
    id: "thailand-2025",
    title: "Thailand",
    cover: "/images/travel/thailand/cover.jpg",
    location: "Thailand",
    date: "December 2025",
    photos: [
      { src: "/images/travel/thailand/bangkok.jpg", caption: "Bangkok temples" },
      { src: "/images/travel/thailand/phuket.jpg", caption: "Phuket beaches" },
      // ... more photos
    ],
  },
  
  // Nepal Trip
  {
    id: "nepal-2025",
    title: "Nepal",
    cover: "/images/travel/nepal/cover.jpg",
    location: "Nepal",
    date: "Coming Soon",
    photos: [
      { src: "/images/travel/nepal/kathmandu.jpg", caption: "Kathmandu Valley" },
      // ... more photos
    ],
  },
];
```

## Example: Complete Vietnam Highlight

Here's a full example with multiple Vietnam photos:

```tsx
{
  id: "vietnam-feb-2026",
  title: "Vietnam",
  cover: "/images/travel/vietnam/halong-bay.jpg",
  location: "Vietnam",
  date: "February 2026",
  photos: [
    {
      src: "/images/travel/vietnam/hanoi-old-quarter.jpg",
      caption: "Hanoi Old Quarter - Morning street scenes",
    },
    {
      src: "/images/travel/vietnam/halong-bay-cruise.jpg",
      caption: "Ha Long Bay - Overnight cruise experience",
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
      src: "/images/travel/vietnam/street-food.jpg",
      caption: "Street food heaven - Best pho of my life",
    },
    {
      src: "/images/travel/vietnam/temple.jpg",
      caption: "Temple of Literature - Ancient university",
    },
  ],
}
```

## Image Recommendations

### Cover Photo (Circular Thumbnail)
- **Format**: JPG or PNG
- **Size**: 800x800px (square, 1:1 ratio)
- **File size**: Under 300KB
- **Tip**: Choose your best/most iconic photo from the trip

### Story Photos
- **Format**: JPG or PNG
- **Size**: 1080x1920px (portrait, 9:16 ratio) for best mobile viewing
  - OR 1920x1080px (landscape, 16:9 ratio) for desktop
  - Both work, but portrait looks more like Instagram stories
- **File size**: Under 1MB per photo
- **Tip**: Compress images using [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)

## Features Explained

### Instagram-Style Highlights
- **Circular thumbnails** with gradient borders (blue-purple-pink)
- **Hover effect**: Thumbnails scale up slightly on hover
- **Trip name and date** displayed under each highlight

### Story Viewer
When you click a highlight:
- **Fullscreen black background** for immersive viewing
- **Progress bars** at top showing total photos and current position
- **Location header** with trip name and date
- **Photo caption** at bottom (if provided)
- **Photo counter** at bottom center (e.g., "3 / 8")

### Navigation
- **Arrow buttons**: Click left/right arrows to navigate
- **Keyboard arrows**: Press ← or → keys
- **ESC to close**: Press ESC key to exit viewer
- **Click X button**: Top-right X button to close

### Progress Indicators
- **Multiple bars** at top (one per photo)
- **Auto-fill animation** shows progress through current photo
- **Completed bars** are fully white
- **Current bar** fills gradually
- **Upcoming bars** are empty (white/30% opacity)

## Customization Options

### Change Progress Bar Duration

In `/components/TravelHighlights.tsx`, find this code:

```tsx
transition={{
  duration: index === currentPhotoIndex ? 3 : 0.3,  // Change 3 to adjust seconds
  ease: "linear",
}}
```

Change `3` to however many seconds you want each photo to display (e.g., `5` for 5 seconds).

### Change Gradient Border Colors

Find this code:

```tsx
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full ...">
```

Change the colors:
- `from-blue-500` → start color
- `via-purple-500` → middle color  
- `to-pink-500` → end color

### Change Section Title

Find this code:

```tsx
<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
  Travel Highlights
</h2>
<p className="text-gray-600 dark:text-gray-400 text-lg">
  Adventures around the world 🌏
</p>
```

## Tips for Great Travel Highlights

1. **Choose a strong cover photo** - This is what people see first
2. **Tell a story** - Arrange photos in chronological order
3. **Write engaging captions** - Short, descriptive, personal (1-2 sentences max)
4. **Mix photo types** - Landscapes, food, culture, selfies, architecture
5. **Quality over quantity** - 5-10 great photos better than 30 mediocre ones
6. **Use portrait orientation** for a more authentic Instagram story feel
7. **Optimize image sizes** - Compress to keep loading fast

## Current Setup (Default)

By default, the section includes:
- **Vietnam 2026** highlight with 6 placeholder photos from Unsplash
- **Nepal** highlight as an example of future trips (with "Coming Soon")

Replace these with your actual photos by following the steps above!

## Folder Organization

Recommended folder structure:

```
/public/images/travel/
├── vietnam/
│   ├── cover.jpg
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── ...
├── thailand/
│   ├── cover.jpg
│   └── ...
├── nepal/
│   ├── cover.jpg
│   └── ...
└── ...
```

## Troubleshooting

**Photos not showing?**
- Verify file paths start with `/images/travel/...` (not `/public/images/...`)
- Check that files are actually uploaded to `/public/images/travel/`
- Clear cache and hard refresh (Ctrl+F5 or Cmd+Shift+R)

**Story viewer not opening?**
- Check browser console for errors
- Ensure the `id` field is unique for each highlight
- Verify the photos array is not empty

**Progress bars not animating?**
- This is normal - they animate when viewing the story
- The animation shows which photo you're currently viewing

**Navigation arrows not working?**
- Make sure you have more than 1 photo in the array
- Try using keyboard arrows (←/→) as an alternative

## Advanced: Adding Videos

While the current version supports images, you can add video support by:
1. Adding a `type` field to each photo object: `type: "image" | "video"`
2. Using `<video>` tag instead of `<img>` when type is "video"
3. Similar to the previous masonry version

(Let me know if you need help implementing video support!)

## Need Help?

The main code is located in:
- **Component**: `/components/TravelHighlights.tsx`
- **Data structure**: `highlights` array at the top of the component
- **Styling**: Inline Tailwind CSS classes

Happy sharing your adventures! ✈️📸
