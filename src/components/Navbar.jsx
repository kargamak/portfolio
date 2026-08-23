import React from 'react';
import { siteData } from '../data/siteData';
import { FileText } from 'lucide-react';

export default function Navbar() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="no-print w-full py-4 px-6 md:px-10 flex items-center justify-between border-b border-white/10 bg-[#0e131f]/90 backdrop-blur-md sticky top-0 z-40 rounded-t-2xl">
      <a href="#" className="font-serif-title font-bold text-base sm:text-lg tracking-wider text-slate-100 hover:text-purple-400 transition-colors">
        {siteData.personal.name}
      </a>

      <div className="flex items-center gap-4 sm:gap-6">
        <a href="#hakkimda" className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Hakkımda
        </a>
        <a href="#projeler" className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Projelerim
        </a>
        <a href="#deneyim" className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Deneyim & Eğitim
        </a>
        <a href="#yetenekler" className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Yetenekler
        </a>
        <a href="#iletisim" className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-purple-300 transition-colors hidden sm:inline-block">
          İletişim
        </a>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/40 transition-all hover:scale-105"
        >
          <FileText className="w-3.5 h-3.5 text-purple-400" />
          <span>CV Yazdır / PDF</span>
        </button>
      </div>
    </nav>
  );
}
