import React from 'react';
import { siteData } from '../data/siteData';

export default function FooterLinks() {
  return (
    <footer id="iletisim" className="scroll-mt-24 pt-12 pb-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Draft-exact lowercase minimal links on bottom-left */}
        <div className="flex items-center gap-8 text-sm font-medium text-slate-300 font-sans">
          {siteData.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300 hover:underline transition-colors lowercase tracking-wide"
            >
              {s.name}
            </a>
          ))}
        </div>

        {/* Right side contact summary & copyright */}
        <div className="text-xs text-slate-400 flex flex-col sm:items-end gap-1">
          <span>{siteData.personal.email} • {siteData.personal.phone}</span>
          <span className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} {siteData.personal.name}. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
