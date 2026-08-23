import React from 'react';
import { siteData } from '../data/siteData';

export default function HeaderDraft() {
  return (
    <header className="text-center pt-8 pb-10 sm:pt-12 sm:pb-14 px-4">
      {/* Draft-exact Title */}
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif-title text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest text-white uppercase mb-3">
          {siteData.personal.name}
        </h1>
        
        {/* Solid Line underneath matching the wireframe */}
        <div className="w-full max-w-2xl mx-auto h-[2px] bg-slate-400/50 my-4" />

        {/* Subtitle & Info from CV */}
        <p className="text-sm sm:text-base text-slate-300 font-medium tracking-wide max-w-xl mx-auto mt-3">
          {siteData.personal.title}
        </p>

        <p className="text-xs text-slate-400 mt-2 font-normal">
          {siteData.personal.location} • {siteData.personal.email} • {siteData.personal.phone}
        </p>
      </div>
    </header>
  );
}
