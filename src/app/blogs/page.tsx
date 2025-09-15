"use client";

import Link from 'next/link';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              HS Liu
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </Link>
              <Link href="/publications" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Publications
              </Link>
              <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Projects
              </Link>
              <Link href="/blogs" className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Blogs
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blogs Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Blogs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Insights and tutorials on AI4Science, LLM Serving, and cutting-edge research
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
              Deep dives into technical concepts, research findings, and practical implementations
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Blog Post Cards */}
            {[
              {
                title: "DeepSeek Model Structure Analysis: MLA, MTP, and MoE Deep Dive",
                category: "LLM Serving",
                date: "March 26, 2024",
                readTime: "22 min read",
                excerpt: "Comprehensive analysis of DeepSeek model architecture components: Multi-head Latent Attention (MLA), Multi-Token Prediction (MTP), and Mixture of Experts (MoE). Explore the technical foundations that enable DeepSeek's high-performance inference capabilities with detailed architectural insights and implementation analysis.",
                tags: ["DeepSeek", "MLA", "MTP", "MoE", "Model Architecture", "LLM Serving", "Technical Analysis"],
                featured: true,
                slug: "deepseek-model-structure-analysis",
                seriesInfo: {
                  name: "DeepSeek-MoE Inference Series",
                  part: "Part 1",
                  totalParts: 5
                },
                referenceLinks: [
                  {
                    title: "Multi-head Latent Attention (MLA)",
                    url: "https://zhuanlan.zhihu.com/p/16730036197",
                    description: "Technical deep dive into MLA architecture"
                  },
                  {
                    title: "Multi-Token Prediction (MTP)",
                    url: "https://zhuanlan.zhihu.com/p/18056041194",
                    description: "Understanding MTP implementation and benefits"
                  },
                  {
                    title: "Mixture of Experts (MoE)",
                    url: "https://zhuanlan.zhihu.com/p/18565423596",
                    description: "MoE architecture and scaling strategies"
                  }
                ]
              },
              {
                title: "DeepSeek-MoE Inference: Optimizing Mixture of Experts for Production",
                category: "LLM Serving",
                date: "March 25, 2024",
                readTime: "18 min read",
                excerpt: "Deep dive into DeepSeek-MoE inference optimization, exploring expert routing strategies, memory management, and performance tuning for production deployments. Learn advanced techniques for scaling Mixture of Experts models with vLLM and distributed serving architectures.",
                tags: ["DeepSeek-MoE", "Mixture of Experts", "LLM Serving", "vLLM", "Expert Routing", "Performance Optimization"],
                featured: true,
                slug: "deepseek-moe-inference-optimization",
                seriesInfo: {
                  name: "DeepSeek-MoE Inference Series",
                  part: "Series Overview",
                  totalParts: 5
                }
              },
              {
                title: "vLLM Deep Dive: Anatomy of High-Performance LLM Serving",
                category: "LLM Serving",
                date: "Sep. 15, 2025",
                readTime: "15 min read",
                excerpt: "A comprehensive deep dive into the anatomy of vLLM, exploring its architecture, optimization techniques, and performance characteristics. Learn how vLLM achieves high-throughput serving with PagedAttention, continuous batching, and advanced memory management.",
                tags: ["vLLM", "LLM Serving", "PagedAttention", "Performance Optimization", "Memory Management"],
                featured: true,
                slug: "vllm-anatomy-deepdive",
                externalLink: "https://blog.vllm.ai/2025/09/05/anatomy-of-vllm.html"
              },
              {
                title: "Understanding Physics-Informed Neural Networks: A Comprehensive Guide",
                category: "AI4Science",
                date: "March 15, 2024",
                readTime: "12 min read",
                excerpt: "Explore the fundamentals of Physics-Informed Neural Networks (PINNs) and their applications in scientific computing. Learn how to integrate physical laws into neural network architectures for solving complex PDEs. Includes detailed video explanation of core concepts.",
                tags: ["PINNs", "Physics-Informed ML", "Scientific Computing", "Neural ODEs"],
                featured: true,
                slug: "physics-informed-neural-networks-guide",
                videoUrl: "https://www.youtube.com/watch?v=-zrY7P2dVC4"
              },
              {
                title: "Optimizing vLLM for Production: Performance Tips and Best Practices",
                category: "LLM Serving",
                date: "February 28, 2024",
                readTime: "8 min read",
                excerpt: "A practical guide to optimizing vLLM deployments for production environments. Covers memory management, batching strategies, and hardware acceleration techniques for maximum throughput.",
                tags: ["vLLM", "LLM Serving", "Performance Optimization", "Production Deployment"],
                featured: true,
                slug: "vllm-optimization-production"
              },
              {
                title: "Ascend NPU Optimization for Large Language Models",
                category: "LLM Serving",
                date: "January 8, 2024",
                readTime: "11 min read",
                excerpt: "Comprehensive guide to optimizing Large Language Models on Ascend NPUs. Covers vLLM-Ascend integration, memory optimization, and performance tuning strategies.",
                tags: ["Ascend NPU", "vLLM-Ascend", "Hardware Acceleration", "LLM Optimization"],
                featured: false,
                slug: "ascend-npu-llm-optimization"
              },
              {
                title: "Conservation Laws in Machine Learning: Theory and Practice",
                category: "AI4Science",
                date: "November 15, 2023",
                readTime: "13 min read",
                excerpt: "Understand how to incorporate conservation laws into machine learning models. Explore theoretical foundations and practical implementations for physically consistent AI.",
                tags: ["Conservation Laws", "Physics-Informed ML", "Scientific Constraints", "Theory"],
                featured: false,
                slug: "conservation-laws-ml"
              }
            ].map((post, index) => (
              <article key={index} className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${post.featured ? 'ring-2 ring-indigo-200 dark:ring-indigo-800' : ''}`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.category === 'AI4Science' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                          'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                        }`}>
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                        {post.seriesInfo && (
                          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-xs font-medium">
                            {post.seriesInfo.part}
                          </span>
                        )}
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
                        {post.externalLink ? (
                          <a href={post.externalLink} target="_blank" rel="noopener noreferrer">
                            {post.title}
                          </a>
                        ) : (
                          <Link href={`/blogs/${post.slug}`}>
                            {post.title}
                          </Link>
                        )}
                      </h2>
                      
                      {post.seriesInfo && (
                        <div className="mb-2">
                          <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                            📚 {post.seriesInfo.name} • {post.seriesInfo.part} of {post.seriesInfo.totalParts}
                          </p>
                        </div>
                      )}
                      
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <time dateTime={post.date}>{post.date}</time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Reference Links */}
                  {post.referenceLinks && (
                    <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">
                        🔗 Key References:
                      </h4>
                      <div className="space-y-2">
                        {post.referenceLinks.map((link, linkIndex) => (
                          <div key={linkIndex} className="flex items-start">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <div>
                              <a 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
                              >
                                {link.title}
                              </a>
                              <p className="text-xs text-gray-600 dark:text-gray-400">{link.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Read More Button */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      {post.externalLink ? (
                        <a 
                          href={post.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Read on vLLM Blog
                        </a>
                      ) : (
                        <Link 
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          Read Full Article
                        </Link>
                      )}
                      
                      {post.videoUrl && (
                        <a 
                          href={post.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h10a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z" />
                          </svg>
                          Video Explanation
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More / Pagination */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Get notified when I publish new technical articles and research insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-slate-700 dark:text-white"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            No spam, unsubscribe at any time
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p className="mb-4 sm:mb-0">&copy; 2024 Hongsheng Liu. All rights reserved.</p>
            
            {/* Visit Counter */}
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Site Visitors:</span>
              <img 
                src="https://visitor-badge.laobi.icu/badge?page_id=hsliuustc0106.github.io" 
                alt="visitor count" 
                className="inline-block"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}