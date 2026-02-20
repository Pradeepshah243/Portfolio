# 📸 Image Management Guide

## Quick Start

### Where to Upload Images

All your custom images should be placed in the `/public/images/` folder structure:

```
/public/images/
├── profile/      → Your photos and avatars
├── projects/     → Project screenshots
├── blog/         → Blog post images
└── misc/         → Other images (logos, backgrounds, etc.)
```

## How to Use Your Images

### Method 1: Direct Image Tag (Simple)

```tsx
<img 
  src="/images/profile/your-photo.jpg" 
  alt="Your Name" 
  className="w-64 h-64 rounded-full"
/>
```

### Method 2: ImageWithFallback Component (Recommended)

This component provides better error handling with a fallback placeholder:

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="/images/profile/your-photo.jpg"
  alt="Your Name"
  className="w-64 h-64 rounded-full object-cover"
/>
```

## Real Examples for Your Portfolio

### 1. Adding Your Profile Picture to About Section

Edit `/components/About.tsx`:

```tsx
<div className="flex justify-center mb-8">
  <ImageWithFallback
    src="/images/profile/pradeep-raut.jpg"
    alt="Pradeep Raut"
    className="w-64 h-64 rounded-full object-cover shadow-2xl"
  />
</div>
```

### 2. Adding Project Screenshots

Edit `/components/Projects.tsx`:

```tsx
{/* Inside your project card */}
<ImageWithFallback
  src="/images/projects/solutions-path-website.png"
  alt="Solutions Path Technology Website"
  className="w-full h-48 object-cover rounded-t-xl"
/>
```

### 3. Adding Blog Post Thumbnails

Edit `/components/Blog.tsx`:

```tsx
{/* Inside your blog card */}
<ImageWithFallback
  src="/images/blog/react-best-practices.jpg"
  alt="React Best Practices"
  className="w-full h-48 object-cover"
/>
```

## Image Optimization Checklist

Before uploading images, optimize them:

✅ **Compress images**
- Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
- Target: Under 500KB for most images

✅ **Resize appropriately**
- Profile: 500x500px (square)
- Projects: 1200x800px (landscape)
- Blog: 1200x630px (Open Graph)

✅ **Choose right format**
- Photos: JPG
- Graphics with transparency: PNG
- Modern browsers: WebP

✅ **Use descriptive filenames**
- Good: `pradeep-raut-profile.jpg`
- Bad: `IMG_1234.jpg`

## Common Use Cases

### Replace Placeholder with Your Logo

If you want to add a custom logo to the navbar:

1. Upload logo to `/public/images/misc/logo.png`
2. Edit `/components/Navbar.tsx`:

```tsx
{/* Replace the "PR" text with: */}
<img 
  src="/images/misc/logo.png" 
  alt="PR Logo" 
  className="h-8 w-auto"
/>
```

### Add Background Image to Hero Section

1. Upload background to `/public/images/misc/hero-bg.jpg`
2. Edit `/components/Hero.tsx`:

```tsx
<section 
  className="relative min-h-screen flex items-center justify-center overflow-hidden"
  style={{
    backgroundImage: 'url(/images/misc/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Add Certificate Images

If you want to show certificate images instead of just links:

1. Upload certificates to `/public/images/certifications/`
2. Edit `/components/Certifications.tsx` to display images

## Troubleshooting

### Image Not Showing?

1. **Check file path**: Paths start with `/images/` (not `/public/images/`)
2. **Check file name**: Must match exactly (case-sensitive)
3. **Hard refresh**: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
4. **Check file exists**: Look in `/public/images/` folder

### Image Too Large?

1. Compress using [TinyPNG](https://tinypng.com/)
2. Resize using image editor (Photoshop, GIMP, Preview, Paint)
3. Consider converting to WebP format

### Image Quality Poor?

1. Use higher resolution source image
2. Don't upscale small images
3. Use PNG for graphics, JPG for photos
4. Reduce compression if quality is priority

## Best Practices

1. **Always provide alt text** for accessibility
2. **Use descriptive filenames** (not IMG_1234.jpg)
3. **Organize by category** (profile, projects, blog, etc.)
4. **Optimize before uploading** (compress, resize)
5. **Use consistent naming** (lowercase, hyphens, no spaces)
6. **Back up original files** before compressing

## Need Help?

- Image compression: [TinyPNG](https://tinypng.com/)
- Image editing: [Photopea](https://www.photopea.com/) (free online Photoshop)
- Format conversion: [CloudConvert](https://cloudconvert.com/)
- Image resizing: [ResizeImage.net](https://resizeimage.net/)

---

**Pro Tip:** Start by adding your profile picture to the About section. This gives immediate visual impact to your portfolio! 🎯
