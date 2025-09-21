"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
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
}

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Check for existing session on component mount
  useEffect(() => {
    const savedSession = localStorage.getItem('adminSession');
    if (savedSession) {
      const sessionData = JSON.parse(savedSession);
      // Check if session is still valid (24 hours)
      const now = new Date().getTime();
      if (now - sessionData.timestamp < 24 * 60 * 60 * 1000) {
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem('adminSession');
      }
    }
  }, []);

  // Fetch blogs from API
  useEffect(() => {
    if (isLoggedIn) {
      fetchBlogs();
    }
  }, [isLoggedIn]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blogs');
      if (response.ok) {
        const data = await response.json();
        setBlogs(data);
      } else {
        // Fallback to mock data if API fails
        setBlogs([
          {
            id: '1',
            title: 'Attention-FFN Disaggregation: Optimizing Transformer Inference Through Component Separation',
            slug: 'attention-ffn-disaggregation',
            category: 'LLM Serving',
            date: 'January 15, 2025',
            readTime: '12 min read',
            excerpt: 'Explore a novel optimization technique that separates attention and feed-forward network computations in transformers to achieve better resource utilization, reduced memory overhead, and improved throughput. Learn how component-specific optimizations can unlock significant performance improvements in LLM serving systems.',
            content: 'Full blog content would be editable here...',
            tags: ['Transformer Optimization', 'LLM Serving', 'vLLM', 'Performance Optimization', 'Memory Management', 'Attention Mechanisms'],
            featured: true
          },
          {
            id: '2',
            title: 'vLLM Deep Dive: Anatomy of High-Performance LLM Serving',
            slug: 'vllm-anatomy-deepdive',
            category: 'LLM Serving',
            date: 'Sep. 15, 2025',
            readTime: '15 min read',
            excerpt: 'A comprehensive deep dive into the anatomy of vLLM, exploring its architecture, optimization techniques, and performance characteristics. Learn how vLLM achieves high-throughput serving with PagedAttention, continuous batching, and advanced memory management.',
            content: 'Full blog content would be editable here...',
            tags: ['vLLM', 'LLM Serving', 'PagedAttention', 'Performance Optimization', 'Memory Management'],
            featured: true,
            videoUrl: '/videos/Inside_vLLM__High-Speed_AI.mp4'
          }
        ]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      // Fallback to mock data on error
      setBlogs([
        {
          id: '1',
          title: 'Attention-FFN Disaggregation: Optimizing Transformer Inference Through Component Separation',
          slug: 'attention-ffn-disaggregation',
          category: 'LLM Serving',
          date: 'January 15, 2025',
          readTime: '12 min read',
          excerpt: 'Explore a novel optimization technique that separates attention and feed-forward network computations in transformers to achieve better resource utilization, reduced memory overhead, and improved throughput. Learn how component-specific optimizations can unlock significant performance improvements in LLM serving systems.',
          content: 'Full blog content would be editable here...',
          tags: ['Transformer Optimization', 'LLM Serving', 'vLLM', 'Performance Optimization', 'Memory Management', 'Attention Mechanisms'],
          featured: true
        },
        {
          id: '2',
          title: 'vLLM Deep Dive: Anatomy of High-Performance LLM Serving',
          slug: 'vllm-anatomy-deepdive',
          category: 'LLM Serving',
          date: 'Sep. 15, 2025',
          readTime: '15 min read',
          excerpt: 'A comprehensive deep dive into the anatomy of vLLM, exploring its architecture, optimization techniques, and performance characteristics. Learn how vLLM achieves high-throughput serving with PagedAttention, continuous batching, and advanced memory management.',
          content: 'Full blog content would be editable here...',
          tags: ['vLLM', 'LLM Serving', 'PagedAttention', 'Performance Optimization', 'Memory Management'],
          featured: true,
          videoUrl: '/videos/Inside_vLLM__High-Speed_AI.mp4'
        }
      ]);
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication (in production, use proper auth)
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      // Save session to localStorage
      const sessionData = {
        timestamp: new Date().getTime(),
        user: 'admin'
      };
      localStorage.setItem('adminSession', JSON.stringify(sessionData));
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    // Clear session from localStorage
    localStorage.removeItem('adminSession');
  };

  const deleteBlog = async (slug: string) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`/api/blogs?slug=${slug}`, { method: 'DELETE' });
        if (response.ok) {
          setBlogs(blogs.filter(blog => blog.slug !== slug));
        } else {
          alert('Failed to delete blog');
        }
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete blog');
      }
    }
  };

  const createNewBlog = async () => {
    const newBlog: BlogPost = {
      id: Date.now().toString(),
      title: 'New Blog Post',
      slug: 'new-blog-post-' + Date.now(),
      category: 'AI4Science',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '5 min read',
      excerpt: 'Brief description of your blog post...',
      content: '# Your Blog Content Here\n\nStart writing your blog post...',
      tags: ['New Tag'],
      featured: false
    };
    
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlog),
      });
      
      if (response.ok) {
        setBlogs([newBlog, ...blogs]);
      } else {
        alert('Failed to create new blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create new blog');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                  HS Liu Admin
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/admin" className="border-indigo-500 text-gray-900 dark:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/admin/blogs" className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-200 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Blog Management</h1>
            <button 
              onClick={createNewBlog}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create New Blog
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="text-gray-900 dark:text-white">Loading blogs...</div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {blogs.map((blog) => (
                  <li key={blog.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                          {blog.title}
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            blog.featured 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {blog.featured ? 'Featured' : 'Regular'}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <div className="mr-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            {blog.category}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            {blog.date} • {blog.readTime}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {blog.tags[0]}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex space-x-3">
                        <Link 
                          href={`/admin/blogs?edit=${blog.slug}`}
                          className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-300"
                        >
                          Edit
                        </Link>
                        <button 
                          onClick={() => deleteBlog(blog.slug)}
                          className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300"
                        >
                          Delete
                        </button>
                        <Link 
                          href={`/blogs/${blog.slug}`} 
                          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}