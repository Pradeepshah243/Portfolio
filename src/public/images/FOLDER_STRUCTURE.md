# Complete Images Folder Structure

Visual overview of where to upload all your portfolio images.

## 📁 Full Directory Tree

```
/public/images/
│
├── 📂 profile/
│   └── README.md
│   └── (Upload your profile photos here)
│
├── 📂 projects/
│   └── README.md
│   └── (Upload project screenshots here)
│
├── 📂 blog/
│   └── README.md
│   └── (Upload blog post images here)
│
├── 📂 certifications/
│   └── README.md
│   └── (Upload certificate images here)
│
├── 📂 education/
│   └── README.md
│   └── (Upload education-related images here)
│
├── 📂 travel/                          ⭐ NEW! Instagram-style highlights
│   ├── README.md                       (Travel folder overview)
│   ├── HOW_TO_ADD_NEW_DESTINATION.md  (Quick guide)
│   │
│   ├── 📂 vietnam/                     🇻🇳 Your Vietnam trip
│   │   ├── README.md                  (Vietnam-specific guide)
│   │   ├── .gitkeep
│   │   └── (Upload Vietnam photos here)
│   │       Example:
│   │       ├── cover.jpg
│   │       ├── hanoi-old-quarter.jpg
│   │       ├── halong-bay.jpg
│   │       ├── hoi-an-lanterns.jpg
│   │       └── ... (more photos)
│   │
│   ├── 📂 thailand/                    🇹🇭 Thailand trip
│   │   ├── README.md
│   │   ├── .gitkeep
│   │   └── (Upload Thailand photos here)
│   │
│   ├── 📂 nepal/                       🇳🇵 Nepal trip
│   │   ├── README.md
│   │   ├── .gitkeep
│   │   └── (Upload Nepal photos here)
│   │
│   └── 📂 [your-destination]/         ➕ Add more destinations
│       └── (Create new folders as needed)
│
└── 📂 misc/
    └── README.md
    └── (Upload miscellaneous images here)
```

## 🎯 Quick Reference by Section

### Profile Photos
**Upload to:** `/public/images/profile/`
**Used in:** About section, Hero section
**Recommended:** 500x500px, square, under 500KB

### Project Screenshots
**Upload to:** `/public/images/projects/`
**Used in:** Projects section
**Recommended:** 1200x800px, under 1MB

### Blog Images
**Upload to:** `/public/images/blog/`
**Used in:** Blog section
**Recommended:** 1200x630px, under 500KB

### Certification Images
**Upload to:** `/public/images/certifications/`
**Used in:** Certifications section (if using local images)
**Recommended:** Original size, under 1MB

### Travel Photos ⭐
**Upload to:** `/public/images/travel/[destination]/`
**Used in:** Travel Highlights section (Instagram-style)
**Recommended:** 
- Cover: 800x800px (square)
- Photos: 1080x1920px (portrait) or 1920x1080px (landscape)
- Under 1MB per photo

## 📝 How to Use Each Folder

### 1. Profile Photos Example
```
/public/images/profile/
├── pradeep-raut.jpg           # Main profile photo
├── pradeep-casual.jpg         # Casual photo
└── pradeep-professional.jpg   # Professional headshot
```

In your code:
```tsx
<img src="/images/profile/pradeep-raut.jpg" alt="Pradeep Raut" />
```

### 2. Project Screenshots Example
```
/public/images/projects/
├── solutions-path-website.png
├── portfolio-website.png
└── xyz-shoes-store.png
```

In your code:
```tsx
<img src="/images/projects/solutions-path-website.png" alt="Solutions Path" />
```

### 3. Travel Photos Example ⭐
```
/public/images/travel/vietnam/
├── cover.jpg                  # Circular thumbnail
├── hanoi-1.jpg               # Story photo 1
├── hanoi-2.jpg               # Story photo 2
├── halong-bay.jpg            # Story photo 3
└── ... more photos
```

In `/components/TravelHighlights.tsx`:
```tsx
{
  id: "vietnam-2026",
  cover: "/images/travel/vietnam/cover.jpg",
  photos: [
    { src: "/images/travel/vietnam/hanoi-1.jpg", caption: "Hanoi streets" },
    { src: "/images/travel/vietnam/halong-bay.jpg", caption: "Ha Long Bay" },
  ],
}
```

## 🚀 Getting Started with Travel Photos

### Step 1: Upload to Vietnam folder
Place your Vietnam photos in `/public/images/travel/vietnam/`

### Step 2: Update the code
Open `/components/TravelHighlights.tsx` and update the `highlights` array

### Step 3: View on website
Save and refresh your portfolio to see your photos in the Instagram-style viewer!

## 💡 Tips

✅ **File Naming Best Practices:**
- Use lowercase: `hanoi-street.jpg` ✅ not `Hanoi Street.jpg` ❌
- Use hyphens: `ha-long-bay.jpg` ✅ not `ha long bay.jpg` ❌
- Be descriptive: `hoi-an-lanterns.jpg` ✅ not `IMG_1234.jpg` ❌

✅ **Path Format:**
- Correct: `/images/travel/vietnam/photo.jpg` ✅
- Wrong: `/public/images/travel/vietnam/photo.jpg` ❌
- Wrong: `./images/travel/vietnam/photo.jpg` ❌

✅ **Image Optimization:**
- Always compress before uploading
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Keep file sizes reasonable (under 1MB)

## 📚 Related Documentation

- **Main Image Guide:** `/public/images/README.md`
- **Travel Photos Setup:** `/public/images/travel/README.md`
- **Add New Destination:** `/public/images/travel/HOW_TO_ADD_NEW_DESTINATION.md`
- **Complete Travel Guide:** `/TRAVEL_GUIDE.md`

## 🆘 Need Help?

**For Travel Photos:**
1. Read `/TRAVEL_GUIDE.md` for detailed instructions
2. Check `/public/images/travel/README.md` for folder setup
3. See destination-specific README in each travel subfolder

**For Other Images:**
1. Check `/public/images/README.md`
2. Look for README files in each subfolder
3. Reference the code examples above

---

**Current Status:**
- ✅ Folder structure created
- ✅ README guides in each folder
- ✅ Travel Highlights component ready
- 🔄 Using placeholder images (replace with your photos!)

**Next Steps:**
1. Upload your Vietnam photos to `/public/images/travel/vietnam/`
2. Update `/components/TravelHighlights.tsx` with your photo paths
3. Enjoy your Instagram-style travel highlights! 📸✈️
