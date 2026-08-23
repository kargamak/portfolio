import React from 'react';
import { siteData } from '../data/siteData';
import { CheckCircle2, Code2, Database, GitBranch, Languages } from 'lucide-react';

export default function SkillsSection() {
  const categoryIcons = {
    "Data & Analysis": <Database className="w-4 h-4 text-purple-400" />,
    "Systems & Processes": <GitBranch className="w-4 h-4 text-purple-400" />,
    "Tech & Tools": <Code2 className="w-4 h-4 text-purple-400" />,
    "Languages": <Languages className="w-4 h-4 text-purple-400" />,
  };

  return (
    <section id="yetenekler" className="scroll-mt-24 py-10 border-t border-white/10">
      <div className="mb-6">
        <h2 className="font-serif-title text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
          YETENEKLER & UZMANLIKLAR (SKILLS)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {siteData.skillCategories.map((cat, idx) => (
          <div key={idx} className="p-4 bg-[#131926] border border-white/10 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              {categoryIcons[cat.name] || <Code2 className="w-4 h-4 text-purple-400" />}
              <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {cat.name}
              </h3>
            </div>

            <ul className="space-y-2">
              {cat.skills.map((skill, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-tight">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
