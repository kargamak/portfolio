/**
 * ===================================================================
 * UFUK EREN KURT - PORTFOLYO VE CV BİLGİ DOSYASI
 * ===================================================================
 * Gerçek proje bağlantıları ve Europass CV bilgileri
 */

export const siteData = {
  // --- KİŞİSEL BİLGİLER ---
  personal: {
    name: "UFUK EREN KURT",
    title: "Yönetim Bilişim Sistemleri Öğrencisi • Ürün Yönetimi & Sistem Analizi",
    dateOfBirth: "01/01/2004",
    location: "İstanbul / Antalya, Türkiye",
    phone: "(+90) 5448945358",
    email: "ufukerenkurt03@gmail.com",
    linkedin: "https://www.linkedin.com/in/ufukerenkurt",
    github: "https://github.com/ufukerenkurt",
  },

  // --- HAKKIMDA (ABOUT ME) ---
  about: {
    title: "HAKKIMDA",
    en: "As a fourth-year MIS student focused on Product Management, I am developing skills in user-centered design, product strategy, and data-informed decision making. I actively follow technological trends to better understand product development processes and user needs. Previously, I served as president of the AkdeMIS community, gaining experience in leadership, stakeholder communication, and coordinating product-oriented initiatives, including organizing a major Technology & Management Summit with nearly 400 participants.",
    tr: "Ürün Yönetimi (Product Management) ve Sistem Analizi odaklı Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim. Kullanıcı odaklı tasarım, ürün stratejisi ve veriye dayalı karar alma süreçlerinde kendimi geliştiriyorum. Teknoloji trendlerini ve kullanıcı ihtiyaçlarını yakından takip ediyorum. AkdeMIS topluluğu başkanlığı görevim süresince liderlik, paydaş iletişimi ve 400 katılımcılı TeknoYön Teknoloji & Yönetim Zirvesi gibi büyük ölçekli organizasyonların koordinasyonunu üstlendim."
  },

  // --- PROJELERİM (GERÇEK BAĞLANTILARLA) ---
  projects: [
    {
      id: "listor",
      title: "LİSTOR",
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
      elevator: "LISTOR; arkadaş gruplarının ortak listeler kurup beraber puanladığı, gerçek zamanlı sıralama ve çoklu API entegrasyonuyla çalışan sosyal bir keşif platformudur."
    },
    {
      id: "memory-line",
      title: "MEMORY LİNE",
      tagline: "Dijital Anı & Zaman Çizelgesi Platformu",
      description: "Kullanıcıların hayatlarındaki dönüm noktalarını, anılarını ve hedeflerini interaktif bir zaman çizelgesinde kronolojik olarak saklayıp paylaştığı platform.",
      category: "Web & Arşiv",
      status: "Canlı",
      liveUrl: "https://memoryline-azure.vercel.app/",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Timeline", "Cloud Storage", "Next.js", "Azure / Vercel"],
      features: [
        "Etkileşimli dinamik zaman çizelgesi",
        "Medya ve anı koleksiyonları",
        "Tarihe göre akıllı filtreleme"
      ]
    },
    {
      id: "finai",
      title: "FINAİ",
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
      title: "PIXELCAM",
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
      role: "SOFTWARE SYSTEM ANALYST INTERN",
      company: "IDENTIFY",
      period: "30/06/2025 – 23/06/2026",
      location: "İstanbul, Türkiye",
      points: [
        "Assisted in gathering, documenting and analyzing business requirements",
        "Supported the preparation of system flowcharts and process models to understand user needs",
        "Contributed to creating test scenarios and technical documentation for the analysis team"
      ]
    },
    {
      role: "WAREHOUSE AND LOGISTICS OPERATIONS",
      company: "EKOL LOGISTIC",
      period: "03/07/2023 – 10/08/2023",
      location: "İstanbul, Türkiye",
      points: [
        "Ensured accuracy by managing product picking and distribution processes using handheld terminals.",
        "Contributed to smooth logistics operations by supporting product receiving processes.",
        "Actively participated in team-based tasks, fostering collaboration and effective communication."
      ]
    }
  ],

  // --- EĞİTİM & LİDERLİK ---
  education: [
    {
      degree: "MANAGEMENT INFORMATION SYSTEMS (YBS)",
      school: "Akdeniz University",
      period: "10/10/2023 – CURRENT",
      location: "Antalya, Türkiye",
      description: "Strong foundation in data management, systems analysis, and digital transformation. Focused on designing information systems that improve organizational efficiency. Interested in data analysis, product management, project management, and technology integration.",
      leadership: {
        title: "Former President – AkdeMIS (500+ members)",
        details: "Led Turkey’s first MIS student community at Akdeniz University. Organized II. TeknoYon Technology & Management Summit (400 participants), managing speakers, logistics, and partnerships."
      }
    }
  ],

  // --- KONFERANSLAR ---
  conferences: [
    {
      title: "Linux Users Federation Winter Camp",
      organization: "Afyon Kocatepe University",
      period: "04/02/2026 – 08/02/2026",
      details: "Completed theoretical training on microservices architecture and SDLC-based software development practices. Covered CI/CD, DevOps, containerization, and key system design patterns. Developed a solid conceptual understanding of high-availability architectures, monitoring, and secure software lifecycle management."
    }
  ],

  // --- YETENEKLER (SKILLS) ---
  skillCategories: [
    {
      name: "Data & Analysis",
      skills: ["SQL and database management", "Data-driven reporting and insight generation", "Large dataset processing"]
    },
    {
      name: "Systems & Processes",
      skills: ["System analysis and business process modeling", "Project management fundamentals (Scrum, Kanban, Agile)", "System testing and documentation (SDLC, STLC)"]
    },
    {
      name: "Tech & Tools",
      skills: ["Python", "C++", "C#", "ASP.NET", "Web Programming", "Atlassian stack (Jira, Confluence)", "CRM Systems"]
    },
    {
      name: "Languages",
      skills: ["Turkish (Mother tongue)", "English (B2 - Independent User)"]
    }
  ],

  // --- ALT LİNKLER ---
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/ufukerenkurt" },
    { name: "github", url: "https://github.com/ufukerenkurt" },
    { name: "mail", url: "mailto:ufukerenkurt03@gmail.com" },
    { name: "phone", url: "tel:+905448945358", label: "+90 544 894 53 58" }
  ]
};
