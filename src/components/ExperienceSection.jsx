import React from 'react';
import { siteData } from '../data/siteData';

export default function ExperienceSection() {
  return (
    <section id="deneyim" className="scroll-mt-20 py-16 border-t border-white/[0.06]">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Left Column: Work Experience */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              İş Deneyimi
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {siteData.experience.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                  <span className="text-xs text-[#525252] shrink-0">{item.company}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#525252]">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <ul className="space-y-1.5 pt-1">
                  {item.points.map((pt, i) => (
                    <li key={i} className="text-xs text-[#737373] leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[#525252] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {idx < siteData.experience.length - 1 && (
                  <div className="pt-4 border-b border-white/[0.06]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Training */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              Eğitim & Liderlik
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">Education</h2>
          </div>

          <div className="space-y-6">
            {siteData.education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-semibold text-white">{edu.degree}</h3>
                  <span className="text-xs text-[#525252] shrink-0">{edu.school}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#525252]">
                  <span>{edu.period}</span>
                  {edu.location && <span>{edu.location}</span>}
                </div>
                <p className="text-xs text-[#737373] leading-relaxed">{edu.description}</p>

                {edu.leadership && (
                  <div className="mt-2 pt-3 border-t border-white/[0.06] space-y-1">
                    <span className="text-[10px] font-semibold text-[#a3a3a3] uppercase tracking-wider block">
                      {edu.leadership.title}
                    </span>
                    <p className="text-xs text-[#737373] leading-relaxed">{edu.leadership.details}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Conferences */}
            {siteData.conferences.map((conf, idx) => (
              <div key={idx} className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-semibold text-white">{conf.title}</h4>
                  <span className="text-[11px] text-[#525252]">{conf.period}</span>
                </div>
                <span className="text-[10px] text-[#525252] block">{conf.organization}</span>
                <p className="text-xs text-[#737373] leading-relaxed">{conf.details}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
