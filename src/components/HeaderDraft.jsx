import React from 'react';
import { siteData, getLocalized } from '../data/siteData';

export default function HeaderDraft({ lang = 'en' }) {
  return (
    <header className="pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
          {siteData.personal.name}
        </h1>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
          <p className="text-sm text-[#a3a3a3] max-w-md leading-relaxed">
            {getLocalized(siteData.personal.title, lang)}
          </p>
          <p className="text-xs text-[#525252]">
            {getLocalized(siteData.personal.location, lang)}
          </p>
        </div>
      </div>
    </header>
  );
}
