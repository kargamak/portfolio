import React from 'react';
import { siteData } from '../data/siteData';
import { User, Code2, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="hakkimda" className="py-24 relative border-t border-white/5 bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout matching the draft wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Quick Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                <span>{siteData.about.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-syne uppercase">
                {siteData.about.badge}
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed">
                {siteData.about.title}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/[0.02] border border-white/10 p-3 rounded-xl">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Konum: {siteData.personal.location}</span>
              </div>

              {/* Stat Counters */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {siteData.about.stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:border-purple-500/30 transition-colors"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-white font-syne bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Bio Description & Tech Capabilities */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="glass-panel p-8 sm:p-10 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl">
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-transparent" />
              
              <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
                {siteData.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="first:text-slate-100 first:font-medium">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* What I focus on / Key principles */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Temel Odak Alanlarım</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Kullanıcı odaklı modern arayüz tasarımı (UI/UX)",
                    "Ölçeklenebilir, temiz ve modüler kod mimarisi",
                    "Yapay Zeka (LLM / AI) araçlarının entegrasyonu",
                    "Yüksek performans ve mobil uyumluluk (Responsive)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Core Tech Stack Pill Badges */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Kullandığım Başlıca Teknolojiler</span>
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {siteData.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-slate-200 hover:border-purple-500/40 hover:text-purple-300 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
