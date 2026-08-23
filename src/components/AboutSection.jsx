import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection() {
  const [lang, setLang] = useState('tr');

  return (
    <section id="hakkimda" className="scroll-mt-20 py-16 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

        {/* Left: Label + lang toggle */}
        <div className="md:col-span-4">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252]">
            Hakkımda
          </span>
          <h2 className="mt-3 text-2xl font-bold text-white tracking-tight">
            {siteData.about.title}
          </h2>

          <div className="flex items-center gap-2 mt-6 no-print">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1 text-xs rounded transition-all ${
                lang === 'tr'
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#737373] hover:text-white'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs rounded transition-all ${
                lang === 'en'
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#737373] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Right: Bio text + highlights */}
        <div className="md:col-span-8 space-y-6">
          <p className="text-sm text-[#a3a3a3] leading-relaxed">
            {lang === 'tr' ? siteData.about.tr : siteData.about.en}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                Odak Alanları
              </span>
              <span className="text-xs text-[#a3a3a3] leading-relaxed">
                {lang === 'tr'
                  ? 'Ürün Yönetimi, Kullanıcı Odaklı Tasarım, Sistem Analizi'
                  : 'Product Management, User-Centered Design, Systems Analysis'}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
                Liderlik
              </span>
              <span className="text-xs text-[#a3a3a3] leading-relaxed">
                {lang === 'tr'
                  ? 'AkdeMIS Topluluk Başkanlığı • TeknoYön Zirvesi (400 katılımcı)'
                  : 'AkdeMIS President • TeknoYon Summit Coordinator (400 participants)'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
