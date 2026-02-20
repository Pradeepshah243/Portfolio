# Images Directory

This folder is for storing all custom images you want to use in your portfolio website.

## Directory Structure

```
/public/images/
├── profile/           # Profile pictures and avatars
├── projects/          # Project screenshots and demos
├── blog/              # Blog post images
├── certifications/    # Certificate images (if needed)
├── education/         # Education-related images
└── misc/              # Miscellaneous images
```

## How to Use Images

### 1. Upload Your Images
Simply place your images in the appropriate subfolder based on their purpose.

### 2. Reference Images in Your Components

For images in the `/public/images/` folder, you can reference them directly:

```tsx
// Example: Using a profile picture
<img src="/images/profile/my-photo.jpg" alt="Pradeep Raut" />

// Example: Using a project screenshot
<img src="/images/projects/project-1.png" alt="Project Screenshot" />
```

### 3. Using ImageWithFallback Component

If you want to use the ImageWithFallback component for better error handling:

```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src="/images/profile/my-photo.jpg" 
  alt="Pradeep Raut"
  className="w-full h-auto"
/>
```

## Recommended Image Specifications

### Profile Images
- **Format:** JPG or PNG
- **Size:** 500x500px (square)
- **Max file size:** 500KB

### Project Screenshots
- **Format:** JPG or PNG
- **Size:** 1200x800px (3:2 ratio)
- **Max file size:** 1MB

### Blog Images
- **Format:** JPG or PNG
- **Size:** 1200x630px (Open Graph ratio)
- **Max file size:** 500KB

### Certifications
- **Format:** JPG or PNG
- **Size:** Original size (maintain readability)
- **Max file size:** 1MB

## Image Optimization Tips

1. **Compress images** before uploading using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)

2. **Use appropriate formats:**
   - JPG for photos
   - PNG for graphics with transparency
   - WebP for better compression (if browser support is not a concern)

3. **Provide descriptive alt text** for accessibility

## Example Usage in Components

### Profile Picture in About Section
```tsx
// In /components/About.tsx
<ImageWithFallback
  src="/images/profile/pradeep-raut.jpg"
  alt="Pradeep Raut - Front-End Developer"
  className="rounded-full w-64 h-64 object-cover"
/>
```

### Project Screenshot
```tsx
// In /components/Projects.tsx
<ImageWithFallback
  src="/images/projects/solutions-path-website.png"
  alt="Solutions Path Technology Website"
  className="w-full h-auto rounded-lg shadow-lg"
/>
```

### Blog Post Image
```tsx
// In /components/Blog.tsx
<ImageWithFallback
  src="/images/blog/react-tips.jpg"
  alt="React Development Tips"
  className="w-full h-48 object-cover rounded-t-lg"
/>
```

## Notes

- All images in the `/public` folder are served from the root URL path
- The `/public` directory is not included in the import path
- Images are cached by the browser, so changes may require a hard refresh (Ctrl+F5 or Cmd+Shift+R)
