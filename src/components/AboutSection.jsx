import React from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection({ lang = 'en' }) {
  const isEn = lang === 'en';

  return (
    <section id="hakkimda" className="scroll-mt-20 py-16 border-t border-white/[0.06]">
      {/* Top Section Header */}
      <div className="mb-8">
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block mb-2">
          {isEn ? 'About Me' : 'Hakkımda'}
        </span>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          {isEn ? 'Background & Focus' : siteData.about.title}
        </h2>
      </div>

      {/* Full Width Bio Content */}
      <div className="space-y-8">
        <p className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
          {isEn ? siteData.about.en : siteData.about.tr}
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/[0.04]">
          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
              {isEn ? 'Focus Areas' : 'Odak Alanları'}
            </span>
            <span className="text-xs text-[#a3a3a3] leading-relaxed">
              {isEn
                ? 'Product Management, User-Centered Design, Systems Analysis'
                : 'Ürün Yönetimi, Kullanıcı Odaklı Tasarım, Sistem Analizi'}
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
              {isEn ? 'Leadership' : 'Liderlik'}
            </span>
            <span className="text-xs text-[#a3a3a3] leading-relaxed">
              {isEn
                ? 'AkdeMIS President • TeknoYon Summit Coordinator (400 participants)'
                : 'AkdeMIS Topluluk Başkanlığı • TeknoYön Zirvesi (400 katılımcı)'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

