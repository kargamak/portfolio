import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection() {
  const [lang, setLang] = useState('tr'); // 'tr' or 'en'

  return (
    <section id="hakkimda" className="scroll-mt-24 py-10 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left: Draft-exact "HAKKIMDA" Header */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase">
            {siteData.about.title}
          </h2>

          <div className="flex items-center gap-2 mt-4 no-print">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                lang === 'tr'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              Türkçe
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                lang === 'en'
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Right: Detailed bio text from Europass CV */}
        <div className="md:col-span-8 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          {lang === 'tr' ? (
            <>
              <p className="font-medium text-slate-100">
                {siteData.about.tr}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="p-3.5 bg-[#141b29] border border-white/10 rounded-xl">
                  <span className="font-bold text-purple-300 block mb-1">🎯 Odak Alanları:</span>
                  Ürün Yönetimi (Product Management), Kullanıcı Odaklı Tasarım, Sistem Analizi & Modelleme
                </div>
                <div className="p-3.5 bg-[#141b29] border border-white/10 rounded-xl">
                  <span className="font-bold text-purple-300 block mb-1">🏆 Liderlik:</span>
                  AkdeMIS Topluluk Başkanlığı & II. TeknoYön Zirve Koordinatörlüğü (400 Katılımcı)
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="font-medium text-slate-100">
                {siteData.about.en}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="p-3.5 bg-[#141b29] border border-white/10 rounded-xl">
                  <span className="font-bold text-purple-300 block mb-1">🎯 Focus Areas:</span>
                  Product Management, User-Centered Design, Systems Analysis & Modeling
                </div>
                <div className="p-3.5 bg-[#141b29] border border-white/10 rounded-xl">
                  <span className="font-bold text-purple-300 block mb-1">🏆 Leadership:</span>
                  Former President – AkdeMIS & TeknoYon Summit Coordinator (400 Participants)
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
