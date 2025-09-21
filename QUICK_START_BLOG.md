# Quick Start: Writing Your First Blog Post

## 1. Create Your Blog Directory
```bash
mkdir src/app/blogs/your-blog-slug
```

## 2. Copy the Template
```bash
cp src/app/blogs/_template/page.tsx src/app/blogs/your-blog-slug/page.tsx
```

## 3. Customize Your Blog
Edit the new `page.tsx` file and update:

### Essential Updates:
- **Function name**: Change `BlogTemplate` to `YourBlogName`
- **Title**: Update the `<h1>` with your blog title
- **Category**: Choose "AI4Science" or "LLM Serving" 
- **Date & Reading Time**: Update meta information
- **Excerpt**: Write a compelling summary
- **Content**: Replace template sections with your content

### Content Sections Available:
- 🚀 **Introduction** - Problem statement and overview
- 🔧 **Technical Deep Dive** - Two-column concept explanation
- 🏗️ **Architecture & Implementation** - System components
- 📊 **Performance & Results** - Benchmarks and improvements
- 💻 **Implementation Example** - Code snippets
- 🎯 **Key Takeaways** - Summary and author bio

## 4. Add to Blog Listing
Edit `/src/app/blogs/page.tsx` and add your blog to the array:

```javascript
{
  title: "Your Blog Title",
  category: "AI4Science", // or "LLM Serving"
  date: "March 20, 2024",
  readTime: "10 min read",
  excerpt: "Your compelling excerpt...",
  tags: ["MindSpore", "Performance Optimization", "AI4Science"],
  featured: true, // or false
  slug: "your-blog-slug",
  videoUrl: "/videos/your-video.mp4" // optional
},
```

## 5. Add Video (Optional)
- Place video in `/public/videos/`
- Add `videoUrl` field to your blog data
- Uncomment video section in template

## 6. Test Your Blog
```bash
npm run dev
# Visit http://localhost:3000/blogs/your-blog-slug
```

## 7. Build & Deploy
```bash
npm run build
# Push to GitHub for auto-deployment
```

## Quick Tips:
- Use `&apos;` for apostrophes to avoid build errors
- Choose colors: Purple for AI4Science, Blue for LLM Serving
- Highlight your MindSpore/vLLM expertise in author bio
- Include performance metrics and technical details
- Reference your publications when relevant