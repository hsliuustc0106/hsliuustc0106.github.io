// Utility functions for blog management

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  featured: boolean;
  videoUrl?: string;
  externalLink?: string;
  seriesInfo?: {
    name: string;
    part: string;
    totalParts: number;
  };
  referenceLinks?: {
    title: string;
    url: string;
    description: string;
  }[];
}

/**
 * Generate a blog page component file content
 * @param blog The blog post data
 * @returns The content of the blog page component file
 */
export function generateBlogPageComponent(blog: BlogPost): string {
  // Escape quotes and other special characters for JSX
  const escapeForJSX = (str: string): string => {
    return str
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/{/g, '&#123;')
      .replace(/}/g, '&#125;');
  };

  // Convert markdown content to HTML (simplified)
  const convertMarkdownToHTML = (content: string): string => {
    return content
      .replace(/^# (.*$)/gm, '<h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">$1</h3>')
      .replace(/^\*\*([^*]+)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/gm, '<em>$1</em>')
      .replace(/^- (.+)$/gm, '<li>$1</li>')
      .replace(/(<li>.+<\/li>\n?)+/gm, '<ul className="list-disc pl-5 space-y-2 mb-6">$&</ul>')
      .replace(/\n/g, '<br />');
  };

  return `"use client";

import Link from 'next/link';

export default function ${blog.slug.replace(/-/g, '')}() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-white">
              HS Liu
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/publications" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Publications
              </Link>
              <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/blogs" className="text-gray-900 dark:text-white font-medium">
                Blogs
              </Link>
            </div>

            <div className="md:hidden">
              <Link href="/blogs" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post */}
      <article className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <header className="mb-12 pt-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              ${escapeForJSX(blog.title)}
            </h1>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
              <time>${escapeForJSX(blog.date)}</time>
              <span className="mx-2">•</span>
              <span>${escapeForJSX(blog.readTime)}</span>
              <span className="mx-2">•</span>
              <span>Hongsheng Liu</span>
            </div>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap">
              ${convertMarkdownToHTML(escapeForJSX(blog.content))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/blogs"
              className="inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p className="mb-4 sm:mb-0">&copy; 2024 Hongsheng Liu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
`;
}

/**
 * Generate a blog listing entry for the main blogs page
 * @param blog The blog post data
 * @returns The blog entry object for the blogs page
 */
export function generateBlogListingEntry(blog: BlogPost): any {
  return {
    title: blog.title,
    category: blog.category,
    date: blog.date,
    readTime: blog.readTime,
    excerpt: blog.excerpt,
    tags: blog.tags,
    featured: blog.featured,
    slug: blog.slug,
    ...(blog.videoUrl && { videoUrl: blog.videoUrl }),
    ...(blog.externalLink && { externalLink: blog.externalLink })
  };
}