# Thailand Trip Photos

Upload all your Thailand trip photos to this folder.

## What to Upload

1. **Cover Photo** - Main photo for the circular thumbnail
2. **Trip Photos** - All photos you want to display

## Example Photos to Include

- Bangkok temples (Wat Arun, Wat Pho, Grand Palace)
- Street food and markets
- Beaches (Phuket, Krabi, Phi Phi Islands)
- Floating markets
- Traditional Thai culture
- Night markets
- Tuk-tuk rides
- Thai cuisine experiences

## After Uploading

Update `/components/TravelHighlights.tsx`:

```tsx
{
  id: "thailand-2025",
  title: "Thailand",
  cover: "/images/travel/thailand/cover.jpg",
  location: "Thailand",
  date: "Your travel date",
  photos: [
    {
      src: "/images/travel/thailand/bangkok-temple.jpg",
      caption: "Wat Arun - Temple of Dawn",
    },
    {
      src: "/images/travel/thailand/floating-market.jpg",
      caption: "Damnoen Saduak Floating Market",
    },
    // Add more photos...
  ],
}
```

**Current status:** Coming Soon (placeholder images)

---

**Path format:** `/images/travel/thailand/[photo-name].jpg`
