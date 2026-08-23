import React from 'react';
import { siteData } from '../data/siteData';
import { Briefcase, GraduationCap, Award, Terminal } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="deneyim" className="scroll-mt-24 py-12 border-t border-white/10">
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Work Experience */}
        <div className="md:col-span-6 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold tracking-wide text-white uppercase">
              İŞ DENEYİMİ (WORK EXPERIENCE)
            </h2>
          </div>

          <div className="space-y-6">
            {siteData.experience.map((item, idx) => (
              <div key={idx} className="p-5 bg-[#111726] border border-white/10 rounded-2xl shadow-sm space-y-3 hover:border-purple-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 pb-2.5">
                  <h3 className="font-bold text-white text-sm sm:text-base font-serif-title">
                    {item.role}
                  </h3>
                  <span className="text-xs font-bold text-purple-300 shrink-0">
                    {item.company}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>

                <ul className="space-y-2 pt-1">
                  {item.points.map((pt, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2.5">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education, Leadership & Training */}
        <div className="md:col-span-6 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold tracking-wide text-white uppercase">
              EĞİTİM & LİDERLİK (EDUCATION)
            </h2>
          </div>

          <div className="space-y-6">
            {siteData.education.map((edu, idx) => (
              <div key={idx} className="p-5 bg-[#111726] border border-white/10 rounded-2xl shadow-sm space-y-3 hover:border-purple-500/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-white/10 pb-2.5">
                  <h3 className="font-bold text-white text-sm sm:text-base font-serif-title">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-bold text-purple-300 shrink-0">
                    {edu.school}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                {edu.leadership && (
                  <div className="mt-3.5 p-4 bg-purple-950/40 border border-purple-500/30 rounded-xl space-y-1.5 shadow-inner">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-purple-200 uppercase tracking-wide">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span>{edu.leadership.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {edu.leadership.details}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Conferences / Seminars */}
            {siteData.conferences.map((conf, idx) => (
              <div key={idx} className="p-5 bg-[#0e1422] border border-white/10 rounded-2xl space-y-2 hover:border-purple-500/20 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <h4 className="text-xs font-bold text-white uppercase">
                      {conf.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-slate-400">{conf.period}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {conf.details}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
