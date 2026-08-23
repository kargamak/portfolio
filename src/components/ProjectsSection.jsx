import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projeler" className="scroll-mt-20 py-16 border-t border-white/[0.06]">

      {/* Section header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
            Dijital Ürünler
          </span>
          <h2 className="text-2xl font-bold text-white tracking-tight">Projelerim</h2>
        </div>
        <span className="text-xs text-[#525252]">{siteData.projects.length} proje</span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {siteData.projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-xl border border-white/[0.08] hover:border-white/20 p-5 transition-all duration-200"
          >
            {/* Top: category + status */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-medium text-[#525252] uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.06] text-[#737373]">
                {project.status}
              </span>
            </div>

            {/* Title + tagline */}
            <div className="flex-1 mb-5">
              <h3 className="text-base font-bold text-white mb-1.5">{project.title}</h3>
              <p className="text-xs text-[#737373] leading-relaxed line-clamp-2">{project.tagline}</p>
            </div>

            {/* Tags */}
            {project.tags && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-[#525252]">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-xs text-[#737373] hover:text-white transition-colors"
              >
                Detaylar
              </button>
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1.5 text-xs font-medium text-white hover:text-white/70 transition-colors"
                >
                  <span>Siteye Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
