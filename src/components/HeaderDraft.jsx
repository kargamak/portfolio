import React from 'react';
import { siteData } from '../data/siteData';

export default function HeaderDraft() {
  return (
    <header className="py-16 sm:py-24">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
          {siteData.personal.name}
        </h1>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
          <p className="text-sm text-[#a3a3a3] max-w-md leading-relaxed">
            {siteData.personal.title}
          </p>
          <p className="text-xs text-[#525252]">
            {siteData.personal.location}
          </p>
        </div>
      </div>
    </header>
  );
}
