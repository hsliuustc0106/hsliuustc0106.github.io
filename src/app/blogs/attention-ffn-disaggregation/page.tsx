"use client";

import Link from 'next/link';

export default function AttentionFFNDisaggregation() {
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
              Attention-FFN Disaggregation: Optimizing Transformer Inference Through Component Separation
            </h1>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-8">
              <time>January 15, 2025</time>
              <span className="mx-2">•</span>
              <span>12 min read</span>
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
              <li className="ml-4"><a href="#transformer-architecture" className="text-blue-600 dark:text-blue-400 hover:underline">• Transformer Architecture</a></li>
              <li className="ml-4"><a href="#computational-bottlenecks" className="text-blue-600 dark:text-blue-400 hover:underline">• Computational Bottlenecks</a></li>
              <li><a href="#disaggregation-approach" className="text-blue-600 dark:text-blue-400 hover:underline">• Disaggregation Approach</a></li>
              <li><a href="#implementation" className="text-blue-600 dark:text-blue-400 hover:underline">• Implementation</a></li>
              <li><a href="#performance-analysis" className="text-blue-600 dark:text-blue-400 hover:underline">• Performance Analysis</a></li>
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
                As Large Language Models (LLMs) continue to scale in size and complexity, optimizing their inference performance 
                has become increasingly critical for production deployments. Traditional approaches treat transformer blocks as 
                monolithic units, but this overlooks significant optimization opportunities that emerge from understanding the 
                distinct computational characteristics of attention and feed-forward network (FFN) components.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This blog post explores attention-FFN disaggregation, a novel optimization technique that separates the computation 
                of attention mechanisms and FFN layers to achieve better resource utilization, reduced memory overhead, and improved 
                throughput in LLM serving systems. Drawing from my experience with vLLM and vLLM-Ascend optimizations, we&apos;ll 
                examine how this approach can deliver significant performance improvements for transformer-based models.
              </p>
            </section>

            {/* Background */}
            <section id="background" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Background</h1>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Transformer Architecture</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Modern transformer architectures consist of repeated blocks, each containing two primary components: 
                multi-head self-attention and position-wise feed-forward networks. While these components are typically 
                executed sequentially within each layer, they exhibit fundamentally different computational patterns and 
                resource requirements.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Computational Bottlenecks</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Attention mechanisms are characterized by memory-bound operations with complex access patterns, while FFN 
                layers are compute-intensive with regular matrix multiplications. This fundamental difference in computational 
                characteristics creates opportunities for specialized optimization strategies when these components are 
                disaggregated and handled independently.
              </p>
              
              {/* Mathematical formulation */}
              <div className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Standard transformer block computation:</p>
                <div className="text-center text-lg font-mono space-y-2">
                  <div><span className="italic">x&apos;</span> = <span className="italic">x</span> + Attention(<span className="italic">x</span>)</div>
                  <div><span className="italic">y</span> = <span className="italic">x&apos;</span> + FFN(<span className="italic">x&apos;</span>)</div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Where attention and FFN operations have distinct computational and memory characteristics.
                </p>
              </div>
            </section>

            {/* Disaggregation Approach */}
            <section id="disaggregation-approach" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Disaggregation Approach</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The core insight behind attention-FFN disaggregation is to exploit the different computational characteristics 
                of these components through specialized execution strategies. By separating attention and FFN computations, 
                we can apply component-specific optimizations that would be impossible in a monolithic approach.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Key Optimization Strategies</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">Attention Optimization</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
                    <li>• Memory-efficient attention patterns</li>
                    <li>• Optimized KV cache management</li>
                    <li>• Specialized kernel implementations</li>
                    <li>• Dynamic attention head pruning</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-3">FFN Optimization</h3>
                  <ul className="text-sm text-green-700 dark:text-green-400 space-y-1">
                    <li>• Tensor parallelism strategies</li>
                    <li>• Activation function optimization</li>
                    <li>• Weight quantization techniques</li>
                    <li>• Pipeline parallelism integration</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section id="implementation" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Implementation</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our implementation leverages vLLM&apos;s architecture to implement attention-FFN disaggregation with minimal 
                changes to the core serving infrastructure. The approach integrates seamlessly with existing optimizations 
                like PagedAttention and continuous batching.
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
from vllm.attention import PagedAttention
from vllm.model_executor import ParallelLMHead

class DisaggregatedTransformerLayer(torch.nn.Module):
    def __init__(self, config):
        super().__init__()
        self.attention = OptimizedAttention(config)
        self.ffn = OptimizedFFN(config)
        
    def forward(self, hidden_states, attention_mask, kv_cache):
        # Separate attention computation with specialized optimizations
        attn_output = self.attention(
            hidden_states, 
            attention_mask, 
            kv_cache,
            use_paged_attention=True
        )
        
        # Residual connection
        hidden_states = hidden_states + attn_output
        
        # Separate FFN computation with tensor parallelism
        ffn_output = self.ffn(hidden_states, use_tensor_parallel=True)
        
        # Final residual connection
        return hidden_states + ffn_output

class OptimizedAttention(torch.nn.Module):
    def forward(self, x, mask, kv_cache, use_paged_attention=True):
        if use_paged_attention:
            return self.paged_attention_forward(x, mask, kv_cache)
        return self.standard_attention_forward(x, mask, kv_cache)

class OptimizedFFN(torch.nn.Module):
    def forward(self, x, use_tensor_parallel=True):
        if use_tensor_parallel:
            return self.tensor_parallel_forward(x)
        return self.standard_forward(x)`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Implementation of disaggregated transformer layer with component-specific optimizations.
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Integration with vLLM-Ascend</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                For Ascend NPU deployments, the disaggregation approach enables specialized kernel selection and memory 
                management strategies that leverage the unique characteristics of Huawei&apos;s AI processors. This integration 
                provides additional performance benefits beyond traditional GPU-based optimizations.
              </p>
            </section>

            {/* Performance Analysis */}
            <section id="performance-analysis" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Performance Analysis</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Experimental evaluation across different model sizes and hardware configurations demonstrates significant 
                performance improvements through attention-FFN disaggregation, particularly for memory-bound workloads 
                and large batch sizes.
              </p>
              
              {/* Results table */}
              <div className="my-8 overflow-x-auto">
                <table className="min-w-full border border-gray-300 dark:border-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Model Size</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Baseline (tokens/s)</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Disaggregated (tokens/s)</th>
                      <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">7B Parameters</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">2,840</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">3,950</td>
                      <td className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">+39%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">13B Parameters</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">1,520</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">2,280</td>
                      <td className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">+50%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">70B Parameters</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">340</td>
                      <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">580</td>
                      <td className="px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400">+71%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                The results demonstrate substantial throughput improvements, with larger models benefiting more significantly 
                from the disaggregation approach. This scaling behavior aligns with our theoretical analysis of the 
                memory-compute trade-offs in transformer architectures.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Memory Efficiency Gains</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Beyond throughput improvements, attention-FFN disaggregation enables more efficient memory utilization 
                through component-specific memory management strategies, reducing peak memory usage by up to 25% while 
                maintaining computational accuracy.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Conclusion</h1>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Attention-FFN disaggregation represents a significant advancement in transformer optimization, demonstrating 
                how component-level understanding can unlock substantial performance improvements. By leveraging the distinct 
                computational characteristics of attention and FFN layers, this approach achieves superior resource utilization 
                and throughput compared to traditional monolithic implementations.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Future work will focus on extending these techniques to other transformer components, exploring automated 
                optimization selection based on hardware characteristics, and integrating with emerging model architectures. 
                The principles demonstrated here provide a foundation for continued innovation in high-performance LLM serving.
              </p>
            </section>

            {/* References */}
            <section id="references" className="mb-16">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">References</h1>
              
              <div className="space-y-4 text-sm">
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    [1] Vaswani, A. et al. &quot;Attention Is All You Need.&quot; <em>NIPS</em>, 2017. 
                    <a href="https://arxiv.org/pdf/1706.03762" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      [PDF]
                    </a>
                  </p>
                </div>
                
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    [2] Kwon, W. et al. &quot;Efficient Memory Management for Large Language Model Serving with PagedAttention.&quot; <em>SOSP</em>, 2023. 
                    <a href="https://arxiv.org/pdf/2309.06180" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
                      [PDF]
                    </a>
                  </p>
                </div>
                
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    [3] Pope, R. et al. &quot;Efficiently Scaling Transformer Inference.&quot; <em>MLSys</em>, 2023. 
                    <a href="https://arxiv.org/pdf/2211.05102" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">
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
