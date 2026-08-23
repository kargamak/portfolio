import React from 'react';
import { siteData } from '../data/siteData';

export default function FooterLinks() {
  return (
    <footer id="iletisim" className="scroll-mt-20 py-12 border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Social links */}
        <div className="flex items-center gap-6 text-xs text-[#525252]">
          {siteData.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors lowercase"
            >
              {s.label || s.name}
            </a>
          ))}
        </div>

        {/* Contact + copyright */}
        <div className="text-[11px] text-[#525252] flex flex-col sm:items-end gap-1">
          <span>{siteData.personal.email} · {siteData.personal.phone}</span>
          <span>
            © {new Date().getFullYear()} {siteData.personal.name}
          </span>
        </div>

      </div>
    </footer>
  );
}
