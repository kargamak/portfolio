import React from 'react';
import { siteData } from '../data/siteData';
import { FileText } from 'lucide-react';

export default function Navbar() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="no-print w-full py-4 px-6 md:px-8 flex items-center justify-between border-b border-white/10 bg-[#0e1424]/90 backdrop-blur-md sticky top-0 z-40 rounded-t-2xl">
      <a href="#" className="font-serif-title font-bold text-base sm:text-lg tracking-wider text-white hover:text-purple-300 transition-colors">
        {siteData.personal.name}
      </a>

      <div className="flex items-center gap-4 sm:gap-6">
        <a href="#hakkimda" className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Hakkımda
        </a>
        <a href="#projeler" className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Projelerim
        </a>
        <a href="#deneyim" className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Deneyim & Eğitim
        </a>
        <a href="#yetenekler" className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-purple-300 transition-colors hidden md:inline-block">
          Yetenekler
        </a>
        <a href="#iletisim" className="text-xs uppercase tracking-wider font-bold text-slate-300 hover:text-purple-300 transition-colors hidden sm:inline-block">
          İletişim
        </a>

        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-purple-600/30 hover:bg-purple-600/40 text-purple-200 border border-purple-500/50 transition-all hover:scale-105 shadow-sm"
        >
          <FileText className="w-3.5 h-3.5 text-purple-300" />
          <span>CV Yazdır / PDF</span>
        </button>
      </div>
    </nav>
  );
}
