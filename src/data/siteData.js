/**
 * ===================================================================
 * UFUK EREN KURT - PORTFOLYO VE CV BİLGİ DOSYASI
 * ===================================================================
 * Gerçek proje bağlantıları ve Europass CV bilgileri
 */

export const siteData = {
  // --- KİŞİSEL BİLGİLER ---
  personal: {
    name: "Ufuk Eren Kurt",
    title: "Yönetim Bilişim Sistemleri Öğrencisi • Ürün Yönetimi & Sistem Analizi",
    dateOfBirth: "01/01/2004",
    location: "İstanbul / Antalya, Türkiye",
    phone: "(+90) 544 894 53 58",
    email: "ufukerenkurt03@gmail.com",
    linkedin: "https://www.linkedin.com/in/ufukerenkurt",
    github: "https://github.com/kargamak",
  },

  // --- HAKKIMDA (ABOUT ME) ---
  about: {
    title: "Hakkımda",
    en: [
      "Fourth-year Management Information Systems student at Akdeniz University, shaping my career around Product and Project Management. Actively developing skills in user-centered design, product strategy, and data-driven decision-making. In my projects, I use AI tools to handle coding and implementation, allowing me to focus directly on product vision, scoping, user experience, and business requirements. Additionally, my interest in human nature, philosophy, and history gives me a deeper understanding of both user behaviors and team dynamics.",
      "I consistently transfer practical learnings, Jira workflows, and agile practices from my internships and experiences into both independent digital products and operational processes. During my tenure as President of the AkdeMIS community, I led a core team of 30+ members—cross-coordinating different departments for maximum efficiency to achieve optimal outcomes—while managing stakeholder communications, multidisciplinary training programs, and large-scale initiatives including the TeknoYön Technology & Management Summit with 400+ attendees."
    ],
    tr: [
      "Akdeniz Üniversitesi Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim. Kariyerimi Ürün ve Proje Yönetimi (Product & Project Management) alanında şekillendiriyor; kullanıcı odaklı tasarım, ürün stratejisi ve veriye dayalı karar alma süreçlerinde kendimi geliştirmeye devam ediyorum. Projelerimde yazılım ve geliştirme kısmını yapay zeka araçlarıyla yürütürken, ben doğrudan ürün vizyonu, kapsam belirleme, kullanıcı deneyimi ve iş gereksinimlerine odaklanıyorum. İnsan doğası, felsefe ve insanlık tarihine olan ilgim ise hem kullanıcı davranışlarını hem de ekip dinamiklerini daha derinlemesine anlamamı sağlıyor.",
      "Stajlarımdan ve deneyimlerimden edindiğim Jira tabanlı iş takip ve çevik metodoloji pratiklerini hem kendi ürün geliştirme süreçlerime hem de operasyonel çalışmalara entegre ediyorum. AkdeMIS topluluğu başkanlığı görevim süresince 30’dan fazla kişilik bir çekirdek ekibi yöneterek farklı departmanları koordineli ve maksimum verimle çalıştırmayı, paydaş iletişimini, farklı disiplinlerden uzmanlarla yürütülen kapsamlı eğitim serilerini ve 400+ katılımcılı TeknoYön Teknoloji & Yönetim Zirvesi gibi büyük ölçekli organizasyonların koordinasyonunu üstlendim."
    ]
  },

  // --- PROJELERİM (GERÇEK BAĞLANTILARLA) ---
  projects: [
    {
      id: "listor",
      title: "Listor",
      tagline: "A list creator for anything",
      description: "Arkadaş grupları, çiftler ve toplulukların film, dizi, oyun, kitap ve müzik listelerini ortaklaşa oluşturup beraber puanlayabildiği, çoklu API entegrasyonuyla güçlendirilmiş gerçek zamanlı sosyal keşif ve derecelendirme platformu.",
      category: "Web Platformu",
      status: "Canlı",
      liveUrl: "https://list0r.vercel.app/",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Next.js 16", "TypeScript", "React 19", "Supabase", "TMDB API", "RAWG API", "Tailwind CSS"],
      features: [
        "Otomatik sıralama: katılımcı puanlarının ortalamasıyla liste anlık güncellenir, ilk 3 içerik altın/gümüş/bronz rozet alır",
        "İçerik içi canlı sohbet: her kart altında yorum ve not alanı",
        "5 küresel API: Film/Dizi (TMDB), Oyun (RAWG), Kitap (Open Library), Müzik (iTunes)",
        "Kullanıcı rolleri: Admin, Liste Sahibi, Editör, Ziyaretçi — her kullanıcıya özel renk kodu"
      ],
      techStack: [
        { label: "Frontend", value: "Next.js 16 (App Router) · TypeScript · React 19" },
        { label: "Stil", value: "Tailwind CSS · Dark Glassmorphism" },
        { label: "Veritabanı", value: "Supabase / PostgreSQL" },
        { label: "API'ler", value: "TMDB · RAWG · Open Library · Apple iTunes" },
      ],
      categories: ["Filmler", "Diziler", "Oyunlar", "Kitaplar", "Müzikler", "Özel / Diğer"],
      elevator: "Listor; arkadaş gruplarının ortak listeler kurup beraber puanladığı, gerçek zamanlı sıralama ve çoklu API entegrasyonuyla çalışan sosyal bir keşif platformudur."
    },
    {
      id: "memory-line",
      title: "Memory Line",
      tagline: "Görsel hafızayı ve refleksleri test eden minimalist web oyunu",
      description: "Karanlık bir ızgara üzerinde sırayla beliren çizgi desenini akılda tutup, ekrandan el kaldırmadan doğru sırada noktaları birbirine bağlayarak deseni yeniden çizmeye dayanan modern ve minimalist bir hafıza oyunu. Hazır oyun motoru kullanılmadan saf HTML5 Canvas ile 60 FPS olarak geliştirildi.",
      category: "Web Oyunu",
      status: "Canlı",
      liveUrl: "https://memoryline-azure.vercel.app/",
      githubUrl: "https://github.com/kargamak/memory_line",
      tags: ["React 19", "TypeScript", "Vite", "HTML5 Canvas", "Web Audio API", "LocalStorage"],
      features: [
        "Saf HTML5 Canvas 2D: DOM olmadan 60 FPS çizim, Retina / yüksek DPI ekran desteği",
        "Web Audio API ses sentezleyici: harici ses dosyası yok, doğru bağlantılarda pentatonik notalar, hatalarda gerçek zamanlı frekans dalgaları",
        "Özel takımyıldızı seviyeleri: Büyük Ayı, Küçük Ayı, Kasiopeya, Kozmik Şimşek ve daha fazlası — özel renk teması, ışıltı ve bonus puan",
        "Matematiksel zorluk eğrisi: seviye 1–3 lineer, 3–13 kademeli, 13+ ustalık formülü",
        "Zero-Skip Komşuluk Filtresi: uzak noktalardan geçerken haksız yanma engellendi",
        "Maç sonu analiz paneli: skor, seviye, kombo, hata, en zorlanılan bölüm, süre, keşfedilen şekil sayısı",
        "TR / ENG çoklu dil ve S/M/L/XL boyut seçenekleri",
        "LocalStorage: rekorlar ve tercihler tarayıcıda yerel olarak saklanır"
      ],
      techStack: [
        { label: "Framework", value: "React 19 · TypeScript" },
        { label: "Build", value: "Vite (HMR · yüksek performans)" },
        { label: "Grafik", value: "HTML5 Canvas 2D API · Lerp fiziği · 60 FPS" },
        { label: "Ses", value: "Web Audio API osilatörleri (dosyasız sentez)" },
        { label: "Depolama", value: "LocalStorage API" },
      ],
      categories: ["Büyük Ayı", "Küçük Ayı", "Kasiopeya", "Kozmik Şimşek", "Gök Elması", "Kozmik Yıldız", "Kozmik Kalp", "Sonsuzluk"],
      elevator: "Memory Line; hazır motor olmadan, saf Canvas ve Web Audio API ile sıfırdan inşa edilmiş, görsel hafıza ve refleksleri test eden minimalist bir web oyunudur."
    },
    {
      id: "finai",
      title: "FinAI",
      tagline: "BİST Temel Analiz ve AI Araştırma Platformu",
      description: "Borsa İstanbul'da işlem gören şirketlerin finansal tablolarını, rasyolarını, KAP duyurularını ve finans haberlerini otomatik analiz eden; 11 temel kategoride objektif puanlama yapan ve Google Gemini AI ile şirket araştırma notları üreten modern finansal analiz platformu.",
      category: "AI & Fintech",
      status: "Canlı",
      liveUrl: "https://finaii.streamlit.app/",
      githubUrl: "https://github.com/kargamak/FinAI",
      tags: ["Python", "Streamlit", "Google Gemini AI", "SQLAlchemy", "Plotly", "yfinance", "Pandas", "SQLite"],
      features: [
        "11 Temel Kalite Skoru: Finansal Sağlık, Kârlılık, Büyüme, Borç Yönetimi, Likidite, Nakit Akışı, Değerleme Çarpanları, Yönetim Kalitesi, KAP Etkisi, Haber Duygu Analizi, Makro Dayanıklılık",
        "3 görünüm modu: Epic Games tarzı satır listesi, 4 sütunlu kart ızgarası, TradingView bağlantılı detaylı tablo",
        "Gemini AI hisse analisti: sayfa içi soru-cevap ve şirket araştırma notu üretimi",
        "1-tıkla prompt kopyalama: bilanço özetini ChatGPT / Claude / DeepSeek'e yapıştırarak derin analiz",
        "Canlı Google News RSS ve KAP entegrasyonu ile anlık haber akışı",
        "Yıldız Pazar, BİST 30, BİST 100, Ana Pazar ve sektör bazında filtreleme"
      ],
      techStack: [
        { label: "Dil", value: "Python 3.13 / 3.14" },
        { label: "Arayüz", value: "Streamlit · Özel CSS (Obsidian Dark + Glassmorphism)" },
        { label: "Yapay Zeka", value: "Google Gemini 2.5 Flash" },
        { label: "Veritabanı", value: "SQLite · SQLAlchemy 2.0" },
        { label: "Analitik", value: "Pandas · NumPy · Plotly (Radar & Dağılım)" },
        { label: "Veri", value: "yfinance · BeautifulSoup4 · Google News RSS · KAP" },
        { label: "DevOps", value: "GitHub · Streamlit Community Cloud" },
      ],
      categories: ["Finansal Sağlık", "Kârlılık", "Büyüme", "Borç Yönetimi", "Likidite", "Nakit Akışı", "Değerleme", "Yönetim", "KAP Duyuruları", "Haber Analizi", "Makro Dayanıklılık"],
      elevator: "FinAI; yatırımcıların yüzlerce sayfalık bilanço yerine saniyeler içinde şirketin finansal sağlığını, kârlılığını ve risklerini 11 kategoride puanlanmış ve AI analiziyle zenginleştirilmiş formatta görmesini sağlar."
    },
    {
      id: "pixelcam",
      title: "PixelCam",
      tagline: "Real-time pixel art camera app",
      description: "Canlı piksel sanatı işleme, özelleştirilebilir renk paletleri ve efektler sunan kamera uygulaması.",
      category: "Görüntü İşleme",
      status: "Aktif",
      liveUrl: "#",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Image Processing", "Pixel Art", "Pipeline", "Mobile"],
      features: [
        "Live pixel-art processing (Canlı piksel sanatı işleme)",
        "Customizable palettes & effects (Özelleştirilebilir efektler)",
        "Performance-optimized pipeline (Performans odaklı mimari)"
      ]
    }
  ],

  // --- İŞ DENEYİMLERİ (WORK EXPERIENCE) ---
  experience: [
    {
      role: "Software System Analyst Intern",
      company: "Identify",
      period: "30/06/2025 – 23/06/2026",
      location: "İstanbul, Türkiye",
      points: [
        "İş gereksinimlerinin toplanması, belgelenmesi ve analiz süreçlerine katkı sağlandı.",
        "Kullanıcı ihtiyaçlarını anlamak için sistem akış şemaları ve süreç modellerinin hazırlanması desteklendi.",
        "Analiz ekibi için test senaryoları ve teknik dokümantasyon oluşturulmasında aktif rol alındı."
      ]
    },
    {
      role: "Warehouse and Logistics Operations",
      company: "Ekol Logistics",
      period: "03/07/2023 – 10/08/2023",
      location: "İstanbul, Türkiye",
      points: [
        "El terminalleri ile ürün toplama ve dağıtım süreçleri yönetilerek doğruluk ve verimlilik sağlandı.",
        "Mal kabul ve envanter süreçlerine destek verilerek operasyonel akış kolaylaştırıldı.",
        "Takım çalışması ve etkin iletişim odaklı operasyon görevleri başarıyla yürütüldü."
      ]
    }
  ],

  // --- EĞİTİM & LİDERLİK ---
  education: [
    {
      degree: "Yönetim Bilişim Sistemleri (Lisans)",
      school: "Akdeniz Üniversitesi",
      period: "10/10/2023 – Günümüz",
      location: "Antalya, Türkiye",
      description: "Veri yönetimi, sistem analizi ve dijital dönüşüm odaklı eğitim. Kurumsal verimliliği artıran bilgi sistemlerinin tasarımı, ürün ve proje yönetimi alanlarında uzmanlaşma.",
      leadership: {
        title: "Eski Topluluk Başkanı – AkdeMIS (500+ Üye)",
        details: "Akdeniz Üniversitesi'nde Türkiye'nin ilk YBS öğrenci topluluğunun başkanlığı yürütüldü. 400 katılımcılı II. TeknoYön Teknoloji & Yönetim Zirvesi'nin konuşmacı, lojistik ve sponsorluk koordinasyonu yönetildi."
      }
    }
  ],

  // --- KONFERANSLAR ---
  conferences: [
    {
      title: "Linux Kullanıcıları Derneği Kış Kampı",
      organization: "Afyon Kocatepe Üniversitesi",
      period: "04/02/2026 – 08/02/2026",
      details: "Mikroservis mimarileri, SDLC tabanlı yazılım geliştirme, CI/CD, DevOps, konteynerleştirme ve temel sistem tasarım kalıpları üzerine teorik ve pratik eğitim tamamlandı."
    }
  ],

  // --- YETENEKLER (SKILLS) ---
  skillCategories: [
    {
      name: "Veri & Analiz",
      skills: ["SQL ve Veritabanı Yönetimi", "Veri Odaklı Raporlama ve İçgörü Üretimi", "Büyük Veri Kümeleri İşleme"]
    },
    {
      name: "Sistem & Süreçler",
      skills: ["Sistem Analizi ve İş Süreci Modelleme", "Proje Yönetimi (Scrum, Kanban, Agile)", "Yazılım Testi ve Dokümantasyon (SDLC, STLC)"]
    },
    {
      name: "Teknolojiler & Araçlar",
      skills: ["Python", "C++", "C#", "ASP.NET", "Web Programlama (React, Next.js)", "Atlassian Stack (Jira, Confluence)", "CRM Sistemleri"]
    },
    {
      name: "Diller",
      skills: ["Türkçe (Ana Dil)", "İngilizce (B2 - Bağımsız Kullanıcı)"]
    }
  ],

  // --- SOSYAL MEDYA & İLETİŞİM ---
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ufukerenkurt" },
    { name: "GitHub", url: "https://github.com/kargamak" },
    { name: "E-Posta", url: "mailto:ufukerenkurt03@gmail.com" },
    { name: "Telefon", url: "tel:+905448945358", label: "+90 544 894 53 58" }
  ]
};

