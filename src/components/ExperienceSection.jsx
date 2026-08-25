import React from 'react';
import { siteData, getLocalized } from '../data/siteData';

export default function ExperienceSection({ lang = 'en' }) {
  const isEn = lang === 'en';

  return (
    <section id="deneyim" className="scroll-mt-20 py-16 border-t border-white/[0.06]">

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Left Column: Work Experience */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              {isEn ? 'Career History' : 'Kariyer Geçmişi'}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {isEn ? 'Work Experience' : 'İş Deneyimi'}
            </h2>
          </div>

          <div className="space-y-6">
            {siteData.experience.map((item, idx) => {
              const points = Array.isArray(item.points)
                ? item.points
                : (item.points?.[lang] || []);

              return (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-semibold text-white">{getLocalized(item.role, lang)}</h3>
                    <span className="text-xs text-[#525252] shrink-0">{item.company}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#525252]">
                    <span>{getLocalized(item.period, lang)}</span>
                    <span>{getLocalized(item.location, lang)}</span>
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

        {/* Right Column: Education & Leadership */}
        <div className="md:col-span-6 space-y-8">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
              {isEn ? 'Academic Background' : 'Akademik Geçmiş'}
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
                    <h3 className="text-sm font-semibold text-white">{getLocalized(edu.degree, lang)}</h3>
                    <span className="text-xs text-[#525252] shrink-0">{getLocalized(edu.school, lang)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#525252]">
                    <span>{getLocalized(edu.period, lang)}</span>
                    {edu.location && <span>{getLocalized(edu.location, lang)}</span>}
                  </div>
                  <p className="text-xs text-[#737373] leading-relaxed">{getLocalized(edu.description, lang)}</p>
                </div>

                {/* Leadership Entry */}
                {edu.leadership && (
                  <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      {getLocalized(edu.leadership.title, lang)}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-[#525252]">
                      <span>{edu.leadership.period || '2024 – 2025'}</span>
                      <span>{getLocalized(edu.leadership.school || edu.school, lang)}</span>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {getLocalized(edu.leadership.details, lang)}
                    </p>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Conferences */}
            {siteData.conferences.map((conf, idx) => (
              <div key={idx} className="space-y-1.5 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h4 className="text-xs font-semibold text-white">{getLocalized(conf.title, lang)}</h4>
                  <span className="text-[11px] text-[#525252] shrink-0">{conf.period}</span>
                </div>
                <span className="text-[10px] text-[#525252] block">{getLocalized(conf.organization, lang)}</span>
                <p className="text-xs text-[#737373] leading-relaxed">{getLocalized(conf.details, lang)}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
