# Nepal Trip Photos

Upload all your Nepal trip photos to this folder.

## What to Upload

1. **Cover Photo** - Main photo for the circular thumbnail
2. **Trip Photos** - All photos you want to display

## Example Photos to Include

- Himalayan mountain views
- Kathmandu Valley temples (Swayambhunath, Pashupatinath, Boudhanath)
- Everest Base Camp trek (if applicable)
- Pokhara lakeside
- Traditional Nepali culture
- Local markets and streets
- Trekking adventures
- Nepali cuisine (momos, dal bhat)
- Janakpurdham (your hometown!)

## After Uploading

Update `/components/TravelHighlights.tsx`:

```tsx
{
  id: "nepal-2025",
  title: "Nepal",
  cover: "/images/travel/nepal/cover.jpg",
  location: "Nepal",
  date: "Your travel date",
  photos: [
    {
      src: "/images/travel/nepal/himalayas.jpg",
      caption: "Himalayan mountain views",
    },
    {
      src: "/images/travel/nepal/kathmandu-temple.jpg",
      caption: "Ancient temples of Kathmandu Valley",
    },
    // Add more photos...
  ],
}
```

**Current status:** Coming Soon (placeholder images)

---

**Path format:** `/images/travel/nepal/[photo-name].jpg`
