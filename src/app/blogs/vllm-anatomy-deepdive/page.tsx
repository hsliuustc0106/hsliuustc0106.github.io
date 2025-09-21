"use client";

import Link from 'next/link';

export default function VLLMAnatomyDeepDive() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              HS Liu
            </Link>
            
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

            <div className="md:hidden">
              <Link href="/blogs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Blog Post */}
      <article className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                LLM Serving
              </span>
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-xs font-medium">
                Featured
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              vLLM Deep Dive: Anatomy of High-Performance LLM Serving
            </h1>
            
            <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
              <time>March 20, 2024</time>
              <span className="mx-2">•</span>
              <span>15 min read</span>
              <span className="mx-2">•</span>
              <span>By Hongsheng Liu</span>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive deep dive into the anatomy of vLLM, exploring its architecture, optimization techniques, 
              and performance characteristics. Learn how vLLM achieves high-throughput serving with PagedAttention, 
              continuous batching, and advanced memory management.
            </p>
          </div>

          {/* External Link Notice */}
          <div className="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">
                  📖 Original Article
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">
                  This analysis is based on the detailed technical article from the official vLLM blog.
                </p>
                <a 
                  href="https://blog.vllm.ai/2025/09/05/anatomy-of-vllm.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Read the full article on vLLM Blog
                </a>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h10a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-red-800 dark:text-red-300 mb-1">
                  🎥 Video Explanation
                </p>
                <p className="text-sm text-red-700 dark:text-red-400 mb-3">
                  Watch an in-depth video explanation of vLLM's architecture and high-performance serving techniques.
                </p>
                <a 
                  href="/videos/Inside_vLLM__High-Speed_AI.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h10a2 2 0 002-2V8a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z" />
                  </svg>
                  Watch Video Explanation
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Key Insights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🚀 Key Insights from vLLM</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🧠 PagedAttention</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Revolutionary memory management inspired by virtual memory systems. Reduces memory waste by up to 40% 
                    through block-based KV cache storage and dynamic allocation.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Fixed-size memory blocks</li>
                    <li>• On-demand allocation</li>
                    <li>• Prefix sharing optimization</li>
                    <li>• Efficient memory swapping</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">⚡ Continuous Batching</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Dynamic request scheduling that maximizes GPU utilization. New requests join ongoing batches 
                    immediately, eliminating idle time and improving throughput by up to 24x.
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Immediate request processing</li>
                    <li>• Adaptive batch sizes</li>
                    <li>• Maximum GPU utilization</li>
                    <li>• Reduced average latency</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Architecture Components */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🏗️ Architecture Overview</h2>
              
              <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Components</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Engine Layer</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• LLM Engine</li>
                      <li>• Scheduler</li>
                      <li>• Memory Pool</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Runtime Layer</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• AsyncLLMEngine</li>
                      <li>• Worker Processes</li>
                      <li>• API Server</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Optimization Layer</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• CUDA Kernels</li>
                      <li>• Quantization</li>
                      <li>• Distributed Execution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Production Insights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">🏭 Production Deployment</h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 vLLM-Ascend Integration</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Extended support for Huawei Ascend NPUs with optimized kernels and memory management, 
                    enabling high-performance LLM serving on specialized hardware platforms.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Best Practices</h4>
                    <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                      <li>• Monitor GPU utilization continuously</li>
                      <li>• Implement proper request queuing</li>
                      <li>• Configure health checks</li>
                      <li>• Use appropriate batch sizes</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Resource Planning</h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                      <li>• GPU memory for model + KV cache</li>
                      <li>• CPU memory for inactive sequences</li>
                      <li>• Network bandwidth for distribution</li>
                      <li>• Storage for model checkpoints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Conclusion */}
          <div className="mt-16 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎯 Key Takeaways</h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>• PagedAttention revolutionizes memory management with 40% reduction in memory waste</li>
              <li>• Continuous batching achieves up to 24x throughput improvement</li>
              <li>• Production deployments require careful resource planning and monitoring</li>
              <li>• vLLM-Ascend extends capabilities to specialized hardware platforms</li>
            </ul>
            
            <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-700 dark:text-blue-400">
                <strong>About the Author:</strong> Specialist in LLM serving with extensive experience in vLLM and vLLM-Ascend systems, 
                contributing to optimizing large language model inference for production deployments.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link 
              href="/blogs"
              className="inline-flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
            
            <div className="flex space-x-4">
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

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p className="mb-4 sm:mb-0">&copy; 2024 Hongsheng Liu. All rights reserved.</p>
            
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