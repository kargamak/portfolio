import React from 'react';
import { siteData } from '../data/siteData';

export default function Navbar() {
  return (
    <nav className="no-print sticky top-0 z-40 flex items-center justify-between py-4 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-md">
      <a
        href="#"
        className="text-sm font-semibold tracking-widest text-white uppercase hover:text-white/70 transition-colors"
      >
        {siteData.personal.name.split(' ')[0]}
      </a>

      <div className="flex items-center gap-6">
        <a href="#hakkimda" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          Hakkımda
        </a>
        <a href="#projeler" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          Projeler
        </a>
        <a href="#deneyim" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          Deneyim
        </a>
        <a href="#yetenekler" className="text-xs text-[#737373] hover:text-white transition-colors hidden md:block">
          Yetenekler
        </a>
        <a href="#iletisim" className="text-xs text-[#737373] hover:text-white transition-colors hidden sm:block">
          İletişim
        </a>

        <a
          href={`mailto:${siteData.personal.email}`}
          className="text-xs px-3.5 py-1.5 rounded border border-white/10 text-[#a3a3a3] hover:text-white hover:border-white/30 transition-all"
        >
          İletişim
        </a>
      </div>
    </nav>
  );
}
