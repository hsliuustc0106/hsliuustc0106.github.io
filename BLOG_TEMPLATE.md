# Blog Writing Guide for Your Personal Website

## 📝 How to Write Your Own Blog Posts

### Step 1: Create the Blog Directory Structure
For each new blog post, create a new directory in `/src/app/blogs/` with the following structure:
```
src/app/blogs/
├── your-blog-slug/
│   └── page.tsx
```

### Step 2: Use the Blog Template
Copy the template from `/src/app/blogs/_template/page.tsx` and customize it for your blog post.

### Step 3: Add Blog to the Main Listing
Update `/src/app/blogs/page.tsx` to include your new blog post in the blog listing array.

## 🎯 Blog Categories
Based on your expertise, use these categories:
- **"AI4Science"** - For physics-informed ML, scientific computing, PDE solvers
- **"LLM Serving"** - For vLLM, performance optimization, serving infrastructure
- **"Deep Learning"** - For MindSpore, PyTorch, neural networks
- **"Performance Optimization"** - For CUDA, distributed systems, NPU optimization

## 📊 Content Sections Available

### 1. **Key Insights Section**
Perfect for highlighting main technical concepts with cards

### 2. **Architecture Overview**
Great for explaining system components and technical architecture

### 3. **Implementation Details**
Code examples and technical implementation guidance

### 4. **Performance Analysis**
Benchmarks, optimization results, and performance comparisons

### 5. **Production Insights**
Real-world deployment experiences and best practices

## 🎥 Media Integration

### Video Support
- Add `videoUrl` field to your blog data
- Videos stored in `/public/videos/`
- Supports both local files and external URLs (YouTube, etc.)

### Images
- Store in `/public/images/blog/`
- Use descriptive filenames

## 🏷️ Tags Suggestions
Based on your expertise, commonly used tags:
- Technical: "MindSpore", "PyTorch", "vLLM", "vLLM-Ascend", "CUDA"
- Domains: "Physics-Informed ML", "PDE Solvers", "Scientific Computing"
- Performance: "Performance Optimization", "Distributed Systems", "NPU"
- Research: "Deep Learning", "Neural Networks", "AI4Science"

## 📋 Blog Post Checklist
- [ ] Created directory structure
- [ ] Updated blog listing in `page.tsx`
- [ ] Added appropriate category and tags
- [ ] Included video if available
- [ ] Tested build locally (`npm run build`)
- [ ] Used proper HTML entities for special characters
- [ ] Added author bio section highlighting your expertise

## 🔧 Technical Notes
- Always escape special characters (apostrophes as `&apos;`)
- Use semantic HTML for better SEO
- Include proper meta descriptions
- Ensure responsive design on mobile
- Test dark mode compatibility