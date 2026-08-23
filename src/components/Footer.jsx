import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#060911] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              {siteData.personal.avatarText}
            </div>
            <div>
              <span className="font-bold text-white font-syne block">
                {siteData.personal.name}
              </span>
              <span className="text-[11px] text-slate-500">
                {siteData.footer.tagline}
              </span>
            </div>
          </div>

          {/* Center Copyright */}
          <div className="text-center text-slate-500">
            {siteData.footer.copyright}
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all hover:scale-105"
            aria-label="Yukarı Çık"
          >
            <span>Başa Dön</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>

        </div>
      </div>
    </footer>
  );
}
