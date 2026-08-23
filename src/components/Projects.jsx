import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ExternalLink, Eye, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projeler" className="py-24 relative border-t border-white/5 bg-[#080c15]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Inspired by Draft "PROJELERİM" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>DİJİTAL ÜRÜNLER & SİTELERİM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-syne uppercase">
              PROJELERİM
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
              Farklı alanlarda geliştirdiğim web platformları, yapay zeka araçları ve SaaS uygulamalarıma tek bir yerden ulaşabilirsiniz.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Toplam <span className="text-purple-400 font-bold">{siteData.projects.length} Proje</span>
          </div>
        </div>

        {/* Projects Grid - 4 Columns on Large Screens matching the draft */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-[#111728]/80 border border-white/10 hover:border-purple-500/40 p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/15 overflow-hidden"
            >
              {/* Card Top: Mockup / Preview Box */}
              <div className={`relative h-48 sm:h-52 rounded-2xl bg-gradient-to-br ${project.previewGradient} p-4 flex flex-col justify-between overflow-hidden border border-white/5`}>
                
                {/* Subtle App Window UI simulation */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  </div>

                  {/* Status Badge */}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10">
                    {project.status}
                  </span>
                </div>

                {/* Center visual icon / illustration */}
                <div className="my-auto text-center z-10">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium mt-2 block">
                    {project.category}
                  </span>
                </div>

                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

                {/* Quick overlay action on hover */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 z-20">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/20 transition-all hover:scale-110"
                    title="Detayları İncele"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/50 transition-all hover:scale-110"
                      title="Siteyi Ziyaret Et"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>

              {/* Card Middle: Short Description & Tags */}
              <div className="p-3 my-1">
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: The Characteristic Rounded Title Badge (Directly Inspired by Draft) */}
              <div className="mt-auto">
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer group/badge relative flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-purple-400/90 to-purple-300/90 text-slate-950 font-syne font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-md transition-all group-hover/badge:brightness-110"
                >
                  <span className="truncate pr-2">{project.title}</span>
                  
                  {project.liveUrl && project.liveUrl !== '#' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1 rounded-lg bg-black/15 hover:bg-black/30 transition-colors"
                      title="Yeni sekmede aç"
                    >
                      <ArrowUpRight className="w-4 h-4 text-slate-950" />
                    </a>
                  ) : (
                    <Eye className="w-4 h-4 text-slate-900 opacity-60" />
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
