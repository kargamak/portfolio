import React from 'react';
import { siteData } from '../data/siteData';

export default function SkillsSection() {
  return (
    <section id="yetenekler" className="scroll-mt-20 py-16 border-t border-white/[0.06]">
      <div className="mb-10">
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
          Yetenekler
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight">Skills & Expertise</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {siteData.skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block border-b border-white/[0.06] pb-2">
              {cat.name}
            </span>
            <ul className="space-y-2">
              {cat.skills.map((skill, i) => (
                <li key={i} className="text-xs text-[#737373] leading-relaxed">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
