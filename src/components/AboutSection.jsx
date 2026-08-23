import React, { useState } from 'react';
import { siteData } from '../data/siteData';

export default function AboutSection() {
  const [lang, setLang] = useState('tr'); // 'tr' or 'en'

  return (
    <section id="hakkimda" className="scroll-mt-24 py-10 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left: Bold High-Contrast "HAKKIMDA" Header */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase">
            {siteData.about.title}
          </h2>

          <div className="flex items-center gap-2 mt-4 no-print">
            <button
              onClick={() => setLang('tr')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                lang === 'tr'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              Türkçe
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                lang === 'en'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Right: Crisp Detailed Bio Text from Europass CV */}
        <div className="md:col-span-8 space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
          {lang === 'tr' ? (
            <>
              <p className="font-normal text-slate-200">
                {siteData.about.tr}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 bg-[#121828] border border-purple-500/20 rounded-xl shadow-xs">
                  <span className="font-bold text-purple-300 block mb-1 text-xs uppercase tracking-wide">🎯 Odak Alanları:</span>
                  <span className="text-slate-300">Ürün Yönetimi (Product Management), Kullanıcı Odaklı Tasarım, Sistem Analizi & Modelleme</span>
                </div>
                <div className="p-4 bg-[#121828] border border-purple-500/20 rounded-xl shadow-xs">
                  <span className="font-bold text-purple-300 block mb-1 text-xs uppercase tracking-wide">🏆 Liderlik:</span>
                  <span className="text-slate-300">AkdeMIS Topluluk Başkanlığı & II. TeknoYön Zirve Koordinatörlüğü (400 Katılımcı)</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="font-normal text-slate-200">
                {siteData.about.en}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-4 bg-[#121828] border border-purple-500/20 rounded-xl shadow-xs">
                  <span className="font-bold text-purple-300 block mb-1 text-xs uppercase tracking-wide">🎯 Focus Areas:</span>
                  <span className="text-slate-300">Product Management, User-Centered Design, Systems Analysis & Modeling</span>
                </div>
                <div className="p-4 bg-[#121828] border border-purple-500/20 rounded-xl shadow-xs">
                  <span className="font-bold text-purple-300 block mb-1 text-xs uppercase tracking-wide">🏆 Leadership:</span>
                  <span className="text-slate-300">Former President – AkdeMIS & TeknoYon Summit Coordinator (400 Participants)</span>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
