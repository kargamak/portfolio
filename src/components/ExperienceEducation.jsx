import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="deneyim" className="py-24 relative border-t border-white/5 bg-[#090d16]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>KARİYER & YOLCULUK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-syne uppercase">
            DENEYİM & EĞİTİM
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-lg mx-auto">
            Geçmişten günümüze profesyonel deneyimlerim, geliştirdiğim projeler ve akademik geçmişim.
          </p>

          {/* Tab Selector */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/5 border border-white/10 mt-8 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>İş & Proje Deneyimleri</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Eğitim & Sertifikalar</span>
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative pl-6 sm:pl-8 border-l border-purple-500/30 ml-4 sm:ml-8 space-y-10">
          
          {activeTab === 'experience' && (
            <>
              {siteData.experience.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-500 transition-all shadow-md shadow-purple-500/50" />

                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-syne">
                          {item.role}
                        </h3>
                        <p className="text-sm font-medium text-purple-300">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === 'education' && (
            <>
              {siteData.education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-indigo-400 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-md shadow-indigo-500/50" />

                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white font-syne">
                          {item.degree}
                        </h3>
                        <p className="text-sm font-medium text-indigo-300">
                          {item.school} - {item.department}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}

        </div>

      </div>
    </section>
  );
}
