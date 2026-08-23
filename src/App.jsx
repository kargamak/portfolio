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
    <div className="min-h-screen bg-[#f1f3f8] py-4 sm:py-8 px-2 sm:px-6 md:px-12 flex justify-center">
      
      {/* Outer Card with Draft-Faithful Purple Border Frame */}
      <div className="w-full max-w-6xl bg-white draft-frame rounded-2xl sm:rounded-3xl shadow-xl flex flex-col justify-between p-6 sm:p-10 md:p-14 transition-all">
        
        {/* Top Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="space-y-4">
          {/* Header matching draft: UFUK EREN KURT + line */}
          <HeaderDraft />

          {/* HAKKIMDA section matching draft */}
          <AboutSection />

          {/* PROJELERİM section matching draft 4-cards layout */}
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
