import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { ArrowUpRight, X } from 'lucide-react';

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggle = (id) => setExpandedId(prev => prev === id ? null : id);

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
        {siteData.projects.map((project) => {
          const isExpanded = expandedId === project.id;
          const isOtherExpanded = expandedId && !isExpanded;

          return (
            <div
              key={project.id}
              className={`rounded-xl border transition-all duration-300
                ${isExpanded
                  ? 'sm:col-span-2 border-white/15 bg-[#0d0d0d]'
                  : `border-white/[0.08] cursor-pointer hover:border-white/20 ${isOtherExpanded ? 'opacity-30' : ''}`
                }
              `}
            >
              {isExpanded ? (
                /* ── EXPANDED VIEW ── */
                <div className="p-6 sm:p-8">

                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252]">
                        {project.category} · {project.status}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm text-[#737373] italic">{project.tagline}</p>
                    </div>
                    <button
                      onClick={() => setExpandedId(null)}
                      className="shrink-0 p-1.5 text-[#525252] hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Two-column detail layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {/* Left column */}
                    <div className="space-y-6">

                      {/* Description */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                          Proje Hakkında
                        </span>
                        <p className="text-sm text-[#a3a3a3] leading-relaxed">{project.description}</p>
                      </div>

                      {/* Elevator pitch */}
                      {project.elevator && (
                        <div className="border-l-2 border-white/[0.08] pl-4">
                          <p className="text-xs text-[#525252] leading-relaxed italic">"{project.elevator}"</p>
                        </div>
                      )}

                      {/* Tech stack */}
                      {project.techStack && (
                        <div className="space-y-2">
                          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
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
                    </div>

                    {/* Right column */}
                    <div className="space-y-6">

                      {/* Features */}
                      {project.features && (
                        <div className="space-y-2">
                          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                            Öne Çıkan Özellikler
                          </span>
                          <ul className="space-y-2">
                            {project.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-[#737373]">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-[#525252] shrink-0" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Categories */}
                      {project.categories && (
                        <div className="space-y-2">
                          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                            {project.id === 'finai' ? '11 Analiz Kategorisi' : 'Desteklenen Kategoriler'}
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

                      {/* Tags */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                          Etiketler
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-[#525252]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-end">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-white border border-white/10 px-4 py-2 rounded hover:bg-white hover:text-black transition-all"
                      >
                        <span>Siteye Git</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>

              ) : (
                /* ── COLLAPSED CARD ── */
                <div className="p-5" onClick={() => toggle(project.id)}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-medium text-[#525252] uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.06] text-[#737373]">
                      {project.status}
                    </span>
                  </div>

                  <div className="flex-1 mb-5">
                    <h3 className="text-base font-bold text-white mb-1.5">{project.title}</h3>
                    <p className="text-xs text-[#737373] leading-relaxed line-clamp-2">{project.tagline}</p>
                  </div>

                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded border border-white/[0.08] text-[#525252]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#525252]">Detaylar</span>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs font-medium text-white hover:text-white/70 transition-colors"
                      >
                        <span>Siteye Git</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
