import React from 'react';
import { siteData } from '../data/siteData';

export default function ExperienceSection({ lang = 'en' }) {
  const isEn = lang === 'en';
  const getVal = (val) => (val && typeof val === 'object' ? (isEn ? val.en : val.tr) : val);

  return (
    <section id="deneyim" className="scroll-mt-20 py-16 border-t border-white/[0.06]">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Left Column: Work Experience */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              {isEn ? 'Career History' : 'İş Deneyimi'}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {isEn ? 'Work Experience' : 'İş Deneyimi'}
            </h2>
          </div>

          <div className="space-y-6">
            {siteData.experience.map((item, idx) => {
              const points = Array.isArray(item.points)
                ? item.points
                : isEn
                ? item.points?.en || []
                : item.points?.tr || [];

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">{item.role}</h3>
                    <span className="text-xs text-[#525252] shrink-0">{item.company}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#525252]">
                    <span>{item.period}</span>
                    <span>{getVal(item.location)}</span>
                  </div>
                  <ul className="space-y-1.5 pt-1">
                    {points.map((pt, i) => (
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
              );
            })}
          </div>
        </div>

        {/* Right Column: Education & Training */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              {isEn ? 'Academic Background' : 'Eğitim & Liderlik'}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {isEn ? 'Education & Leadership' : 'Eğitim & Liderlik'}
            </h2>
          </div>

          <div className="space-y-6">
            {siteData.education.map((edu, idx) => (
              <React.Fragment key={idx}>
                {/* Degree Entry */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">{getVal(edu.degree)}</h3>
                    <span className="text-xs text-[#525252] shrink-0">{getVal(edu.school)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#525252]">
                    <span>{getVal(edu.period)}</span>
                    {edu.location && <span>{getVal(edu.location)}</span>}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">{getVal(edu.description)}</p>
                </div>

                {/* Leadership Entry */}
                {edu.leadership && (
                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      {getVal(edu.leadership.title)}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-[#525252]">
                      <span>{edu.leadership.period || '2024 – 2025'}</span>
                      <span>{getVal(edu.leadership.school || edu.school)}</span>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {getVal(edu.leadership.details)}
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Conferences */}
            {siteData.conferences.map((conf, idx) => (
              <div key={idx} className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-xs font-semibold text-white">{getVal(conf.title)}</h4>
                  <span className="text-[11px] text-[#525252] shrink-0">{conf.period}</span>
                </div>
                <span className="text-[10px] text-[#525252] block">{getVal(conf.organization)}</span>
                <p className="text-xs text-[#737373] leading-relaxed">{getVal(conf.details)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

