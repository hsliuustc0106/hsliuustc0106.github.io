import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { BlogPost, generateBlogPageComponent, generateBlogListingEntry } from '@/lib/blogUtils';

export const dynamic = 'force-static';

// Helper function to get the blogs directory path
const getBlogsDir = () => path.join(process.cwd(), 'src', 'app', 'blogs');

// Helper function to get the blogs listing page path
const getBlogsListingPath = () => path.join(process.cwd(), 'src', 'app', 'blogs', 'page.tsx');

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogsDir = getBlogsDir();
    const blogDirs = fs.readdirSync(blogsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
      .map(dirent => dirent.name);

    const blogs: BlogPost[] = [];

    // For a real implementation, you would extract blog data from the files
    // This is a simplified version for demonstration
    for (const dir of blogDirs) {
      // In a real implementation, you would parse the actual blog files
      blogs.push({
        id: dir,
        title: dir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        slug: dir,
        category: 'AI4Science',
        date: 'January 1, 2024',
        readTime: '5 min read',
        excerpt: 'Blog excerpt...',
        content: 'Blog content...',
        tags: ['AI'],
        featured: false
      });
    }

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request: Request) {
  try {
    const blog: BlogPost = await request.json();
    
    // Create blog directory
    const blogDir = path.join(getBlogsDir(), blog.slug);
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Generate and write blog component file
    const componentContent = generateBlogPageComponent(blog);
    const componentPath = path.join(blogDir, 'page.tsx');
    fs.writeFileSync(componentPath, componentContent);

    // Update blogs listing page
    updateBlogsListing(blog, 'create');

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

// PUT /api/blogs/:slug - Update a blog
export async function PUT(request: Request) {
  try {
    const blog: BlogPost = await request.json();
    
    // Update blog directory
    const blogDir = path.join(getBlogsDir(), blog.slug);
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Generate and write blog component file
    const componentContent = generateBlogPageComponent(blog);
    const componentPath = path.join(blogDir, 'page.tsx');
    fs.writeFileSync(componentPath, componentContent);

    // Update blogs listing page
    updateBlogsListing(blog, 'update');

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error('Error updating blog:', error);
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

// DELETE /api/blogs/:slug - Delete a blog
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    // Delete blog directory
    const blogDir = path.join(getBlogsDir(), slug);
    if (fs.existsSync(blogDir)) {
      fs.rmSync(blogDir, { recursive: true, force: true });
    }

    // Update blogs listing page
    updateBlogsListing({ slug } as BlogPost, 'delete');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog:', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}

// Helper function to update the blogs listing page
function updateBlogsListing(blog: BlogPost, action: 'create' | 'update' | 'delete') {
  try {
    const blogsListingPath = getBlogsListingPath();
    
    if (fs.existsSync(blogsListingPath)) {
      const content = fs.readFileSync(blogsListingPath, 'utf8');
      
      if (action === 'create' || action === 'update') {
        const blogEntry = generateBlogListingEntry(blog);
        // In a real implementation, you would properly insert/update the blog entry
        // in the blogs array in the blogs/page.tsx file
        console.log('Blog entry for listing:', blogEntry);
      } else if (action === 'delete') {
        // In a real implementation, you would remove the blog entry
        // from the blogs array in the blogs/page.tsx file
        console.log('Deleting blog from listing:', blog.slug);
      }
      
      // For now, we'll just log the action
      console.log(`Blog ${action} action performed for:`, blog.slug);
    }
  } catch (error) {
    console.error('Error updating blogs listing:', error);
  }
}