import React from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection({ lang = 'en' }) {
  const isEn = lang === 'en';

  return (
    <section id="hakkimda" className="scroll-mt-20 pt-8 sm:pt-10 pb-14 sm:pb-16 border-t border-white/[0.06]">
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
        <div className="space-y-4">
          {(Array.isArray(isEn ? siteData.about.en : siteData.about.tr)
            ? (isEn ? siteData.about.en : siteData.about.tr)
            : [isEn ? siteData.about.en : siteData.about.tr]
          ).map((paragraph, index) => (
            <p key={index} className="text-sm sm:text-base text-[#a3a3a3] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="pt-4 border-t border-white/[0.04] space-y-2">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#525252] block">
            {isEn ? 'Core Focus & Competencies' : 'Temel Odak Alanları'}
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {(isEn
              ? [
                  'Product & Project Management',
                  'User-Centered Design (UI/UX)',
                  'Agile Workflows & Jira',
                  'AI-Assisted Product Development',
                  'System Analysis & Scoping'
                ]
              : [
                  'Ürün & Proje Yönetimi',
                  'Kullanıcı Odaklı Tasarım (UI/UX)',
                  'Çevik Süreçler & Jira',
                  'Yapay Zeka Destekli Ürün Geliştirme',
                  'Sistem Analizi & Kapsam Belirleme'
                ]
            ).map((item, i) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 rounded border border-white/[0.08] text-[#a3a3a3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

