import React from 'react';
import { X, ExternalLink, CheckCircle, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[#111724] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        
        {/* Header Preview Banner */}
        <div className="p-6 bg-[#172030] border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="draft-pill-badge inline-block py-1 px-3 text-xs font-serif-title font-bold mb-2 text-slate-950">
              {project.title}
            </div>
            <h3 className="text-lg font-bold text-white">
              {project.tagline}
            </h3>
            <span className="text-xs text-slate-400 font-medium">
              Kategori: {project.category} • Durum: {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 border border-white/10 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              Proje Açıklaması
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-purple-300 font-bold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Öne Çıkan Özellikler</span>
              </h4>
              <div className="space-y-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-400" />
                <span>Teknolojiler & Etiketler</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0d121c] flex items-center justify-between gap-3">
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Kapat
            </button>
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-purple-300 hover:bg-purple-200 shadow-sm transition-all hover:scale-105"
              >
                <span>Siteyi Aç</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
