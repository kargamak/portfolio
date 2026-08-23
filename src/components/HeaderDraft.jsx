import React from 'react';
import { siteData } from '../data/siteData';

export default function HeaderDraft() {
  return (
    <header className="text-center pt-8 pb-10 sm:pt-12 sm:pb-14 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Crisp Bold High-Contrast Title */}
        <h1 className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest text-white uppercase mb-3 drop-shadow-sm">
          {siteData.personal.name}
        </h1>
        
        {/* Crisp Dividing Line */}
        <div className="w-full max-w-2xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent my-5" />

        {/* Subtitle & Role */}
        <p className="text-sm sm:text-base text-purple-300 font-semibold tracking-wide max-w-xl mx-auto mt-2">
          {siteData.personal.title}
        </p>

        {/* Location & Quick Contact */}
        <p className="text-xs text-slate-400 mt-2 font-normal">
          {siteData.personal.location} • <span className="text-slate-300">{siteData.personal.email}</span> • <span className="text-slate-300">{siteData.personal.phone}</span>
        </p>
      </div>
    </header>
  );
}
