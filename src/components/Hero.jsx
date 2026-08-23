import React from 'react';
import { siteData } from '../data/siteData';
import { ArrowDown, ExternalLink, FileText, Sparkles, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ onOpenCV }) {
  const iconMap = {
    Linkedin: <LinkedinIcon className="w-4 h-4" />,
    Github: <GithubIcon className="w-4 h-4" />,
    Mail: <Mail className="w-4 h-4" />
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-8 backdrop-blur-md animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{siteData.personal.status}</span>
        </div>

        {/* Big Name Header - Editorial Minimalist Style inspired by draft */}
        <div className="relative inline-block mb-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-syne uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
              {siteData.personal.name}
            </span>
          </h1>
          {/* Subtle underline accent matching the wireframe */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mt-3 rounded-full opacity-80" />
        </div>

        {/* Subtitle / Role */}
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-300 max-w-2xl mx-auto mt-4 mb-6">
          {siteData.personal.title}
        </p>

        {/* Short Bio */}
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
          {siteData.personal.shortBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projeler"
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Projelerimi & Sitelerimi Keşfet</span>
          </a>

          <button
            onClick={onOpenCV}
            className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-sm font-semibold transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>CV / Özgeçmiş Görüntüle</span>
          </button>
        </div>

        {/* Quick Social Links Pills (linkedin, github, mail) - Inspired by wireframe */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
          {siteData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-transparent transition-all duration-200 ${social.color}`}
            >
              {iconMap[social.icon] || <ExternalLink className="w-4 h-4" />}
              <span>{social.name.toLowerCase()}</span>
            </a>
          ))}
        </div>

        {/* Down Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#hakkimda"
            className="p-2 rounded-full text-slate-500 hover:text-purple-400 hover:bg-white/5 transition-all animate-bounce"
            aria-label="Aşağı kaydır"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
