"use client";

import Link from 'next/link';

export default function BlogTemplate() {
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
              Your Blog Title Here
            </h1>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
              <time>March 20, 2024</time>
              <span className="mx-2">•</span>
              <span>10 min read</span>
              <span className="mx-2">•</span>
              <span>Hongsheng Liu</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#introduction" className="text-blue-600 dark:text-blue-400 hover:underline">• Introduction</a></li>
              <li><a href="#background" className="text-blue-600 dark:text-blue-400 hover:underline">• Background</a></li>
              <li className="ml-4"><a href="#technical-foundations" className="text-blue-600 dark:text-blue-400 hover:underline">• Technical Foundations</a></li>
              <li className="ml-4"><a href="#methodology" className="text-blue-600 dark:text-blue-400 hover:underline">• Methodology</a></li>
              <li><a href="#implementation" className="text-blue-600 dark:text-blue-400 hover:underline">• Implementation</a></li>
              <li><a href="#results" className="text-blue-600 dark:text-blue-400 hover:underline">• Results & Analysis</a></li>
              <li><a href="#conclusion" className="text-blue-600 dark:text-blue-400 hover:underline">• Conclusion</a></li>
              <li><a href="#references" className="text-blue-600 dark:text-blue-400 hover:underline">• References</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <section id="introduction" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Introduction</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Start with a compelling introduction that explains the problem you&apos;re solving or the concept you&apos;re explaining. 
                Draw from your expertise in AI4Science, LLM serving, or performance optimization.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This blog post explores [main topic], presenting novel insights from my work on [specific domain]. 
                We&apos;ll discuss the technical challenges, propose solutions, and analyze performance improvements achieved 
                through [specific techniques or frameworks like MindSpore, vLLM, etc.].
              </p>
            </section>

            {/* Background */}
            <section id="background" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Background</h1>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Foundations</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Provide background context and technical foundations. Reference relevant literature and establish 
                the current state of the field. Explain key concepts that readers need to understand.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Methodology</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Describe your approach and methodology. Explain the reasoning behind your technical choices 
                and how they relate to your expertise in deep learning frameworks and performance optimization.
              </p>
              
              {/* Mathematical equation example */}
              <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Mathematical formulation:</p>
                <div className="text-center text-lg font-mono">
                  <span className="italic">L</span> = <span className="italic">L</span><sub>task</sub> + λ<span className="italic">L</span><sub>physics</sub>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Where <span className="italic">L</span><sub>task</sub> is the task-specific loss and <span className="italic">L</span><sub>physics</sub> enforces physical constraints.
                </p>
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Implementation</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Detail your implementation approach, highlighting specific technologies and frameworks used. 
                Discuss how you leverage MindSpore, PyTorch, vLLM, or other relevant tools.
              </p>
              
              {/* Code block */}
              <div className="my-8">
                <div className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900">
                    <span className="text-gray-300 text-sm font-medium">Python</span>
                    <button className="text-gray-400 hover:text-gray-200 text-xs">Copy</button>
                  </div>
                  <pre className="p-4 text-gray-300 text-sm overflow-x-auto">
{`import torch
import mindspore as ms
from vllm import LLM, SamplingParams

def optimize_inference(model, inputs):
    """Optimized inference pipeline"""
    with torch.cuda.amp.autocast():
        # Apply performance optimizations
        optimized_inputs = preprocess(inputs)
        results = model(optimized_inputs)
    
    return postprocess(results)`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Example implementation showcasing performance optimization techniques.
                </p>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Results & Analysis</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Present your experimental results and analysis. Include performance metrics, 
                benchmarks, and comparisons that demonstrate the effectiveness of your approach.
              </p>
              
              {/* Results table */}
              <div className="my-8 overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Method</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Throughput (req/s)</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Latency (ms)</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Baseline</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">100</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">50</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">-</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">Optimized</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">240</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">20</td>
                      <td className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">2.4x faster</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The results demonstrate significant performance improvements through our optimization approach, 
                particularly in [specific metrics]. This aligns with our expertise in [relevant domain].
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Conclusion</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Summarize the key contributions and findings of your work. Highlight how your approach 
                advances the state of the art in [relevant domain] and its practical implications.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Future work directions might include [specific research directions], further optimization 
                for [specific hardware/scenarios], and integration with [relevant systems or frameworks].
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">References</h1>
              
              <div className="space-y-4 text-sm">
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    [1] Author, A. et al. &quot;Paper Title.&quot; <em>Conference/Journal</em>, Year. 
                    <a href="https://arxiv.org/pdf/paper-id" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      [PDF]
                    </a>
                  </p>
                </div>
                
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    [2] Author, B. et al. &quot;Another Paper Title.&quot; <em>Conference/Journal</em>, Year. 
                    <a href="https://arxiv.org/pdf/paper-id" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      [PDF]
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About the Author</h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
              <strong>Hongsheng Liu</strong> is a core maintainer of vLLM-Omni and AFD Plugin and a member of the
              vLLM Project team. His current work focuses on high-performance multimodal model inference,
              distributed serving, and open-source AI infrastructure. His research background includes
              AI4Science, spatiotemporal dynamics prediction, and efficient neural PDE solvers.
            </p>
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
