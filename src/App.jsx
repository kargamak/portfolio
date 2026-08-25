import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeaderDraft from './components/HeaderDraft';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import FooterLinks from './components/FooterLinks';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] selection:bg-white/20 selection:text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Navbar lang={lang} setLang={setLang} />
        <main>
          <HeaderDraft lang={lang} />
          <AboutSection lang={lang} />
          <ProjectsSection lang={lang} />
          <ExperienceSection lang={lang} />
          <SkillsSection lang={lang} />
        </main>
        <FooterLinks lang={lang} />
      </div>
    </div>
  );
}

