import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, Sparkles, ExternalLink, Info } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projeler" className="scroll-mt-24 py-12 border-t border-white/10">
      
      {/* Draft-exact "PROJELERİM" Section Title */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase">
            PROJELERİM
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Geliştirdiğim canlı web uygulamaları, yapay zeka araçları ve platformlar.
          </p>
        </div>
        <span className="text-xs text-purple-400 font-medium">
          Kartlara tıklayarak doğrudan siteye gidebilir veya detayları inceleyebilirsiniz.
        </span>
      </div>

      {/* 4 Cards Grid - Directly matching the wireframe */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {siteData.projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-3xl bg-[#111726] border border-white/10 hover:border-purple-400/50 p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/15"
          >
            {/* Top Part: Preview Area matching the draft */}
            <div className="relative h-44 sm:h-48 rounded-2xl bg-[#182136] group-hover:bg-[#1d2842] transition-colors p-4 flex flex-col justify-between overflow-hidden border border-white/5">
              
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-md bg-black/50 text-slate-200 backdrop-blur-md border border-white/10">
                  {project.category}
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {project.status}
                </span>
              </div>

              {/* Center app icon/hint */}
              <div className="my-auto text-center z-10">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform shadow-lg shadow-purple-950/50">
                  <Sparkles className="w-6 h-6" />
                </div>
                <p className="text-[11px] text-slate-200 font-medium mt-2.5 line-clamp-2 px-1">
                  {project.tagline}
                </p>
              </div>

              {/* Quick action buttons on preview box */}
              <div className="flex items-center justify-center gap-2 z-20">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-[11px] font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-1 rounded-lg transition-all flex items-center gap-1 backdrop-blur-md"
                  title="Detaylar"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Detaylar</span>
                </button>

                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-slate-950 bg-purple-300 hover:bg-purple-200 px-3 py-1 rounded-lg transition-all flex items-center gap-1 shadow-sm"
                    title="Canlı Siteye Git"
                  >
                    <span>Siteyi Aç</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>

            {/* Bottom Part: The Draft's Characteristic Rounded Purple Pill Badge */}
            <div className="mt-3.5">
              {project.liveUrl && project.liveUrl !== '#' ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="draft-pill-badge w-full py-3.5 px-4 flex items-center justify-between shadow-md group/btn text-slate-950 block"
                >
                  <span className="font-serif-title font-extrabold text-sm sm:text-base tracking-wider uppercase truncate">
                    {project.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProject(project)}
                  className="draft-pill-badge w-full py-3.5 px-4 flex items-center justify-center shadow-md text-slate-950"
                >
                  <span className="font-serif-title font-extrabold text-sm sm:text-base tracking-wider uppercase">
                    {project.title}
                  </span>
                </button>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
