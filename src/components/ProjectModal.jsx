import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#111111] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-white/[0.06] flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
              {project.category} · {project.status}
            </span>
            <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-xs text-[#737373] italic">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-[#525252] hover:text-white transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto space-y-6">

          {/* Description */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
              Proje Hakkında
            </span>
            <p className="text-sm text-[#a3a3a3] leading-relaxed">{project.description}</p>
          </div>

          {/* Elevator pitch */}
          {project.elevator && (
            <div className="border-l-2 border-white/10 pl-4">
              <p className="text-xs text-[#737373] leading-relaxed italic">"{project.elevator}"</p>
            </div>
          )}

          {/* Tech stack table */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
                Teknoloji Stack
              </span>
              <div className="divide-y divide-white/[0.04]">
                {project.techStack.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-2">
                    <span className="text-[10px] font-semibold text-[#525252] w-20 shrink-0 pt-0.5">{item.label}</span>
                    <span className="text-xs text-[#a3a3a3]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Supported categories */}
          {project.categories && project.categories.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
                Desteklenen Kategoriler
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((cat, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-[#737373]">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
                Öne Çıkan Özellikler
              </span>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#737373]">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#525252] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="space-y-2">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252]">
                Etiketler
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-[#525252]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#525252] hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="text-xs text-[#525252] hover:text-white transition-colors"
            >
              Kapat
            </button>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-white border border-white/10 px-3.5 py-1.5 rounded hover:bg-white hover:text-black transition-all"
              >
                <span>Siteye Git</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
