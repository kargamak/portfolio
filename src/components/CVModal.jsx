import React from 'react';
import { siteData } from '../data/siteData';
import { X, Download, FileText, ExternalLink, Briefcase, GraduationCap, Code, CheckCircle, Printer } from 'lucide-react';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0d121f] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-black/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-syne">
                {siteData.personal.name} - Özgeçmiş (CV)
              </h3>
              <p className="text-xs text-slate-400">
                {siteData.personal.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              title="Yazdır"
            >
              <Printer className="w-4 h-4" />
              <span>Yazdır</span>
            </button>

            {siteData.personal.cvUrl && siteData.personal.cvUrl !== '#' && (
              <a
                href={siteData.personal.cvUrl}
                download={siteData.personal.cvFileName}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>PDF İndir</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors ml-1"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b101c] print:bg-white print:text-black">
          
          {/* Header section in CV */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-syne tracking-tight print:text-black">
              {siteData.personal.name}
            </h1>
            <p className="text-sm font-semibold text-purple-400 mt-1 print:text-purple-700">
              {siteData.personal.title}
            </p>
            <p className="text-xs text-slate-400 mt-2 print:text-slate-600">
              {siteData.personal.location} • {siteData.socials.find(s => s.name.includes('Email'))?.username || 'ufukerenkurt@example.com'}
            </p>
          </div>

          {/* Profile Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-2 flex items-center gap-2 print:text-purple-700">
              <FileText className="w-4 h-4" />
              <span>Özet Profil</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-black">
              {siteData.about.paragraphs[0]} {siteData.about.paragraphs[1]}
            </p>
          </div>

          {/* Experience in CV */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2 print:text-purple-700">
              <Briefcase className="w-4 h-4" />
              <span>Deneyim & Proje Liderliği</span>
            </h4>
            <div className="space-y-4">
              {siteData.experience.map((exp, idx) => (
                <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5 print:border-slate-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-sm font-bold text-white print:text-black">{exp.role}</h5>
                      <span className="text-xs text-purple-300 font-medium print:text-purple-800">{exp.company}</span>
                    </div>
                    <span className="text-xs text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 print:text-slate-800 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects in CV */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2 print:text-purple-700">
              <Code className="w-4 h-4" />
              <span>Geliştirilen Başlıca Platformlar</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {siteData.projects.map((proj) => (
                <div key={proj.id} className="bg-white/[0.02] p-3.5 rounded-xl border border-white/5 print:border-slate-200">
                  <span className="text-xs font-bold text-white font-syne print:text-black">{proj.title}</span>
                  <p className="text-[11px] text-slate-400 mt-1 print:text-slate-700">{proj.tagline}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education in CV */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2 print:text-purple-700">
              <GraduationCap className="w-4 h-4" />
              <span>Eğitim Bilgisi</span>
            </h4>
            {siteData.education.map((edu, idx) => (
              <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5 print:border-slate-200">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-sm font-bold text-white print:text-black">{edu.degree}</h5>
                    <span className="text-xs text-indigo-300 font-medium print:text-indigo-800">{edu.school} - {edu.department}</span>
                  </div>
                  <span className="text-xs text-slate-400 print:text-slate-600">{edu.period}</span>
                </div>
                <p className="text-xs text-slate-300 mt-2 print:text-slate-800 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Skills in CV */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2 print:text-purple-700">
              <CheckCircle className="w-4 h-4" />
              <span>Yetenekler & Uzmanlıklar</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {siteData.skills.map((s, idx) => (
                <span key={idx} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-slate-200 print:text-black print:border-slate-300">
                  {s.name} ({s.level})
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
