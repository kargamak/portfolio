import React, { useState } from 'react';
import { siteData } from '../data/siteData';
import { Mail, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const emailSocial = siteData.socials.find(s => s.name.includes('Email') || s.name.includes('Mail'));
  const emailAddress = emailSocial?.username || 'ufukerenkurt@example.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    window.location.href = `mailto:${emailAddress}?subject=Portfolyo İletişim: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)} (Gönderen: ${formData.email})`;
    setSubmitted(true);
  };

  const iconMap = {
    Linkedin: <LinkedinIcon className="w-5 h-5" />,
    Github: <GithubIcon className="w-5 h-5" />,
    Mail: <Mail className="w-5 h-5" />
  };

  return (
    <section id="iletisim" className="py-24 relative border-t border-white/5 bg-[#080c15]">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>BAĞLANTIDA KALALIM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-syne uppercase">
            İLETİŞİM & BAĞLANTILAR
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto">
            Yeni bir proje, iş birliği teklifi veya sadece sohbet etmek için bana dilediğiniz kanaldan ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Quick Direct Channels & Copy Email */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Social Cards matching wireframe */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white font-syne uppercase tracking-wider">
                Sosyal Medya & Ağlarım
              </h3>

              <div className="space-y-2.5">
                {siteData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-purple-500/40 text-slate-200 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-600/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                        {iconMap[social.icon] || <Mail className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white font-syne">
                          {social.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          @{social.username}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                      Bağlan →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Copy Email Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/40 to-indigo-950/40 border border-purple-500/30 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider block">
                  Doğrudan E-Posta
                </span>
                <span className="text-xs sm:text-sm font-medium text-white truncate block">
                  {emailAddress}
                </span>
              </div>
              
              <button
                onClick={copyEmail}
                className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg transition-all active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Kopyalandı!' : 'Kopyala'}</span>
              </button>
            </div>

          </div>

          {/* Right: Quick Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
              <h3 className="text-base font-bold text-white font-syne mb-1">
                Hızlı Mesaj Gönder
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Formu doldurarak doğrudan e-posta istemciniz üzerinden bana mesaj iletebilirsiniz.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Adınız / Şirket
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn. Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      E-Posta Adresiniz
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="adiniz@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Projeniz veya paylaşmak istediğiniz konu hakkında kısa bilgi..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Mesajı Gönder</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
