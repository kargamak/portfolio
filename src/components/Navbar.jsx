import React from 'react';
import { siteData } from '../data/siteData';

export default function Navbar({ lang = 'en', setLang }) {
  const isEn = lang === 'en';

  return (
    <nav className="no-print sticky top-0 z-40 flex items-center justify-between py-4 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-md">
      <a
        href="#"
        className="text-sm font-semibold tracking-widest text-white uppercase hover:text-white/70 transition-colors"
      >
        {siteData.personal.name}
      </a>

      <div className="flex items-center gap-5 sm:gap-6">
        <a href="#hakkimda" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          {isEn ? 'About' : 'Hakkımda'}
        </a>
        <a href="#projeler" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          {isEn ? 'Projects' : 'Projeler'}
        </a>
        <a href="#deneyim" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          {isEn ? 'Experience' : 'Deneyim'}
        </a>
        <a href="#yetenekler" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          {isEn ? 'Skills' : 'Yetenekler'}
        </a>
        <a href="#iletisim" className="text-xs text-[#737373] hover:text-white transition-colors">
          {isEn ? 'Contact' : 'İletişim'}
        </a>

        {/* Language selector in top panel */}
        {setLang && (
          <div className="flex items-center p-0.5 rounded border border-white/10 bg-white/[0.03] text-xs">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                isEn
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#737373] hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('tr')}
              className={`px-2 py-0.5 rounded text-[11px] transition-all ${
                !isEn
                  ? 'bg-white text-black font-semibold'
                  : 'text-[#737373] hover:text-white'
              }`}
            >
              TR
            </button>
          </div>
        )}

        <a
          href={`mailto:${siteData.personal.email}`}
          className="text-xs px-3 py-1 rounded border border-white/10 text-[#a3a3a3] hover:text-white hover:border-white/30 transition-all hidden sm:inline-block"
        >
          {isEn ? 'Email' : 'E-Posta'}
        </a>
      </div>
    </nav>
  );
}


