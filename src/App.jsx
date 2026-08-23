import React from 'react';
import Navbar from './components/Navbar';
import HeaderDraft from './components/HeaderDraft';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import FooterLinks from './components/FooterLinks';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 py-6 sm:py-10 px-3 sm:px-6 md:px-10 flex justify-center selection:bg-purple-500 selection:text-white">
      
      {/* Outer Card with Draft-Faithful Purple Border Frame & Modern Dark Palette */}
      <div className="w-full max-w-6xl draft-frame rounded-2xl sm:rounded-3xl flex flex-col justify-between p-6 sm:p-10 md:p-12 transition-all">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="space-y-6">
          {/* Header: UFUK EREN KURT */}
          <HeaderDraft />

          {/* HAKKIMDA section */}
          <AboutSection />

          {/* PROJELERİM section: LİSTOR, MEMORY LİNE, FINAİ, PIXELCAM */}
          <ProjectsSection />

          {/* DENEYİM & EĞİTİM from Europass CV */}
          <ExperienceSection />

          {/* YETENEKLER from Europass CV */}
          <SkillsSection />
        </main>

        {/* Footer with exact draft lowercase links (linkedin, github, mail) */}
        <FooterLinks />

      </div>

    </div>
  );
}
