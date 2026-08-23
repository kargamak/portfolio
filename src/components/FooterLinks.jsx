import React from 'react';
import { siteData } from '../data/siteData';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function FooterLinks() {
  return (
    <footer id="iletisim" className="scroll-mt-20 pt-16 pb-12 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
        {/* Left header */}
        <div className="md:col-span-6 space-y-2">
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#525252] block">
            İletişim
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight">
            Bağlantıda Kalalım
          </h2>
          <p className="text-xs text-[#737373] max-w-sm leading-relaxed">
            Yeni bir proje, iş birliği veya sistem analizi & ürün yönetimi konularında görüşmek için bana dilediğiniz kanaldan ulaşabilirsiniz.
          </p>
        </div>

        {/* Right contact links */}
        <div className="md:col-span-6 flex flex-col sm:items-end justify-center gap-3">
          <div className="flex flex-wrap gap-2.5 text-xs font-medium">
            <a
              href={siteData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/[0.08] text-[#a3a3a3] hover:text-white hover:border-white/25 transition-all"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#525252]" />
            </a>

            <a
              href={siteData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/[0.08] text-[#a3a3a3] hover:text-white hover:border-white/25 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#525252]" />
            </a>

            <a
              href={`mailto:${siteData.personal.email}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/[0.08] text-[#a3a3a3] hover:text-white hover:border-white/25 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{siteData.personal.email}</span>
            </a>
          </div>

          <div className="text-[11px] text-[#525252] flex items-center gap-3 mt-1">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-[#525252]" />
              {siteData.personal.phone}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#525252]" />
              {siteData.personal.location}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#525252]">
        <span>© {new Date().getFullYear()} {siteData.personal.name}. Tüm hakları saklıdır.</span>
        <span>Minimalist Portfolyo</span>
      </div>
    </footer>
  );
}

