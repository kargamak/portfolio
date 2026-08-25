import React from 'react';
import { siteData, getLocalized } from '../data/siteData';

export default function SkillsSection({ lang = 'en' }) {
  const isEn = lang === 'en';

  return (
    <section id="yetenekler" className="scroll-mt-20 py-16 border-t border-white/[0.06]">
      <div className="mb-10">
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
          {isEn ? 'Core Competencies' : 'Temel Yetkinlikler'}
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight">
          {isEn ? 'Skills & Expertise' : 'Yetenekler & Uzmanlıklar'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteData.skillCategories.map((cat, idx) => {
          const categoryName = getLocalized(cat.name, lang);
          const skillsList = Array.isArray(cat.skills)
            ? cat.skills
            : (cat.skills?.[lang] || []);

          return (
            <div key={idx} className="space-y-3">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block border-b border-white/[0.06] pb-2">
                {categoryName}
              </span>
              <ul className="space-y-2">
                {skillsList.map((skill, i) => (
                  <li key={i} className="text-xs text-[#737373] leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
