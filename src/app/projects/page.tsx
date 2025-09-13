"use client";

import Link from 'next/link';

export default function Projects() {
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
              <Link href="/projects" className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Projects
              </Link>
              <Link href="/blogs" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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

      {/* Projects Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Leading projects in AI4Science and ML infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Cards */}
            {[
              { 
                title: 'MindScience Platform', 
                desc: 'Lead maintainer of Huawei\'s flagship AI4Science platform, enabling breakthrough scientific computing across Earth sciences, fluid dynamics, electromagnetics, chemistry, and biology. Features 6 specialized suites (MindEarth, MindFlow, MindElec, MindChemistry, MindSPONGE, SciAI) with 60+ AI models, achieving 1000x performance improvements over traditional methods in weather forecasting and CFD simulations.',
                link: 'https://gitee.com/mindspore/mindscience',
                category: 'AI4Science',
                features: [
                  '6 specialized scientific computing suites',
                  '60+ AI models for various domains',
                  '1000x performance improvements',
                  'Weather forecasting & CFD simulations',
                  'Cross-domain scientific computing'
                ],
                tech: ['MindSpore', 'Python', 'C++', 'CUDA', 'Distributed Systems'],
                isMainProject: true,
                subprojects: [
                  {
                    title: 'MindEarth - Weather Forecasting',
                    desc: 'Earth sciences suite supporting multi-temporal-spatial-scale meteorological forecasting with 1000x performance improvement over traditional methods.',
                    link: 'https://gitee.com/mindspore/mindscience/tree/master/MindEarth',
                    features: [
                      'Medium-range weather forecasting',
                      'Precipitation nowcasting models',
                      'DEM super-resolution',
                      'ERA5 reanalysis dataset'
                    ],
                    tech: ['MindSpore', 'Meteorological Data', 'Deep Learning', 'Time Series']
                  },
                  {
                    title: 'MindFlow - Computational Fluid Dynamics',
                    desc: 'CFD solver suite supporting AI fluid simulation driven by physics, data, and data-mechanism fusion with built-in differentiable CFD solver.',
                    link: 'https://gitee.com/mindspore/mindscience/tree/master/MindFlow',
                    features: [
                      'Physics-informed fluid simulation',
                      'PHengLei CFD solver integration',
                      'Differentiable CFD solver',
                      'Airfoil flow field datasets'
                    ],
                    tech: ['CFD', 'Physics-Informed NNs', 'Differentiable Programming', 'Fluid Dynamics']
                  },
                  {
                    title: 'MindSPONGE - Computational Biology',
                    desc: 'Computational biology toolkit supporting high-performance, modular, end-to-end differentiable, AI-native architecture for molecular simulation and protein folding.',
                    link: 'https://gitee.com/mindspore/mindscience/tree/master/MindSPONGE',
                    features: [
                      'Molecular simulation software',
                      'MEGA-Protein structure prediction',
                      'FAAST NMR data analysis',
                      'Million-level protein dataset (PSP)'
                    ],
                    tech: ['Molecular Dynamics', 'Protein Folding', 'Bioinformatics', 'Deep Learning']
                  }
                ]
              },
              { 
                title: 'LLM Serving Research', 
                desc: 'Specialized research in large language model serving optimization with expertise in vLLM and vLLM-Ascend systems. Focus on performance optimization, distributed inference, and ML infrastructure for production-scale deployments.',
                link: 'https://github.com/vllm-project/vllm',
                category: 'ML Infrastructure',
                features: [
                  'vLLM optimization and contributions',
                  'vLLM-Ascend integration and performance',
                  'Distributed inference systems',
                  'Production-scale deployments',
                  'Performance benchmarking'
                ],
                tech: ['PyTorch', 'vLLM', 'vLLM-Ascend', 'CUDA', 'Distributed Systems']
              }
            ].map((project, index) => (
              <div key={index} className={`${project.isMainProject ? 'lg:col-span-2' : ''}`}>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  {project.isMainProject || index === 0 ? (
                    // MindScience project and its subprojects with custom logo
                    <a 
                      href="https://gitee.com/mindspore/mindscience"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      title="Visit MindScience Platform on Gitee"
                    >
                      <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-lg mb-4 flex items-center justify-center p-4 hover:scale-105 transition-transform cursor-pointer">
                        <img 
                          src="/mindscience-icon.svg" 
                          alt="MindScience Logo" 
                          className="w-32 h-32 object-contain"
                        />
                      </div>
                    </a>
                  ) : (
                    // Other projects with gradient background
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center text-white">
                        <svg className="w-16 h-16 mx-auto mb-2 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {project.category === 'AI4Science' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          ) : project.category === 'ML Infrastructure' ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          )}
                        </svg>
                        <p className="text-sm font-medium opacity-90">{project.category}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'AI4Science' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' :
                      project.category === 'ML Infrastructure' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                      'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.slice(0, 3).map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start">
                          <span className="w-1 h-1 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm flex-1 text-center"
                    >
                      {project.link.startsWith('http') ? 'View Project' : 'Learn More'}
                    </a>
                    <a 
                      href="https://github.com/hsliuustc0106"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                  
                  {/* Subprojects Section */}
                  {project.subprojects && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specialized Suites:</h4>
                      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                        {project.subprojects.map((subproject, subIndex) => (
                          <div key={subIndex} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors">
                            {/* MindScience logo for each subproject */}
                            <a 
                              href={subproject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                              title={`Visit ${subproject.title} on Gitee`}
                            >
                              <div className="w-full h-20 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 rounded-lg mb-3 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
                                <img 
                                  src="/mindscience-icon.svg" 
                                  alt="MindScience Logo" 
                                  className="w-12 h-12 object-contain opacity-80"
                                />
                              </div>
                            </a>
                            
                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                              {subproject.title}
                            </h5>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                              {subproject.desc}
                            </p>
                            
                            {/* Subproject Features */}
                            <div className="mb-3">
                              <ul className="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                                {subproject.features.slice(0, 2).map((feature, featIndex) => (
                                  <li key={featIndex} className="flex items-start">
                                    <span className="w-1 h-1 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Subproject Tech */}
                            <div className="flex flex-wrap gap-1 mb-3">
                              {subproject.tech.slice(0, 2).map((tech, techIndex) => (
                                <span key={techIndex} className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <a 
                              href={subproject.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                            >
                              View Suite
                              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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