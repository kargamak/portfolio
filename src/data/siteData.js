/**
 * ===================================================================
 * UFUK EREN KURT - PORTFOLYO VE CV BİLGİ DOSYASI (TR / EN)
 * ===================================================================
 */

export const getLocalized = (data, lang = 'en') => {
  if (!data) return '';
  if (typeof data === 'object' && !Array.isArray(data)) {
    if ('en' in data || 'tr' in data) {
      return data[lang] || data['en'] || data['tr'] || '';
    }
  }
  return data;
};

export const siteData = {
  // --- KİŞİSEL BİLGİLER / PERSONAL INFO ---
  personal: {
    name: "Ufuk Eren Kurt",
    title: {
      tr: "Yönetim Bilişim Sistemleri Öğrencisi • Ürün Yönetimi & Sistem Analizi",
      en: "Management Information Systems Student • Product Management & Systems Analysis"
    },
    dateOfBirth: "01/01/2004",
    location: {
      tr: "İstanbul / Antalya, Türkiye",
      en: "Istanbul / Antalya, Turkey"
    },
    phone: "(+90) 544 894 53 58",
    email: "ufukerenkurt03@gmail.com",
    linkedin: "https://www.linkedin.com/in/ufukerenkurt",
    github: "https://github.com/kargamak",
  },

  // --- HAKKIMDA / ABOUT ME ---
  about: {
    title: {
      tr: "Hakkımda",
      en: "About Me"
    },
    en: [
      "Fourth-year Management Information Systems student at Akdeniz University, shaping my career around Product and Project Management. Actively developing skills in user-centered design, product strategy, and data-driven decision-making. In my projects, I use AI tools to handle coding and implementation, allowing me to focus directly on product vision, scoping, user experience, and business requirements. Additionally, my interest in human nature, philosophy, and history gives me a deeper understanding of both user behaviors and team dynamics.",
      "I consistently transfer practical learnings, Jira workflows, and agile practices from my internships and experiences into both independent digital products and operational processes. During my tenure as President of the AkdeMIS community, I led a core team of 30+ members—cross-coordinating different departments for maximum efficiency to achieve optimal outcomes—while managing stakeholder communications, multidisciplinary training programs, and large-scale initiatives including the TeknoYön Technology & Management Summit with 400+ attendees."
    ],
    tr: [
      "Akdeniz Üniversitesi Yönetim Bilişim Sistemleri 4. sınıf öğrencisiyim. Kariyerimi Ürün ve Proje Yönetimi (Product & Project Management) alanında şekillendiriyor; kullanıcı odaklı tasarım, ürün stratejisi ve veriye dayalı karar alma süreçlerinde kendimi geliştirmeye devam ediyorum. Projelerimde yazılım ve geliştirme kısmını yapay zeka araçlarıyla yürütürken, ben doğrudan ürün vizyonu, kapsam belirleme, kullanıcı deneyimi ve iş gereksinimlerine odaklanıyorum. İnsan doğası, felsefe ve insanlık tarihine olan ilgim ise hem kullanıcı davranışlarını hem de ekip dinamiklerini daha derinlemesine anlamamı sağlıyor.",
      "Stajlarımdan ve deneyimlerimden edindiğim Jira tabanlı iş takip ve çevik metodoloji pratiklerini hem kendi ürün geliştirme süreçlerime hem de operasyonel çalışmalara entegre ediyorum. AkdeMIS topluluğu başkanlığı görevim süresince 30’dan fazla kişilik bir çekirdek ekibi yöneterek farklı departmanları koordineli ve maksimum verimle çalıştırmayı, paydaş iletişimini, farklı disiplinlerden uzmanlarla yürütülen kapsamlı eğitim serilerini ve 400+ katılımcılı TeknoYön Teknoloji & Yönetim Zirvesi gibi büyük ölçekli organizasyonların koordinasyonunu üstlendim."
    ]
  },

  // --- PROJELER / PROJECTS ---
  projects: [
    {
      id: "listor",
      title: "Listor",
      tagline: {
        tr: "Her şey için ortak liste oluşturma, keşif ve oylama platformu",
        en: "A collaborative list creator, discovery, and rating platform for anything"
      },
      description: {
        tr: "Arkadaş grupları, çiftler ve toplulukların film, dizi, oyun, kitap ve müzik listelerini ortaklaşa oluşturup beraber puanlayabildiği, çoklu API entegrasyonuyla güçlendirilmiş gerçek zamanlı sosyal keşif ve derecelendirme platformu.",
        en: "A real-time social discovery and rating platform powered by multi-API integrations, where friend groups, couples, and communities collaboratively build and score lists for movies, TV series, games, books, and music."
      },
      category: {
        tr: "Web Platformu",
        en: "Web Platform"
      },
      status: {
        tr: "Canlı",
        en: "Live"
      },
      liveUrl: "https://list0r.vercel.app/",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Next.js 16", "TypeScript", "React 19", "Supabase", "TMDB API", "RAWG API", "Tailwind CSS"],
      features: {
        tr: [
          "Otomatik sıralama: katılımcı puanlarının ortalamasıyla liste anlık güncellenir, ilk 3 içerik altın/gümüş/bronz rozet alır",
          "İçerik içi canlı sohbet: her kart altında yorum ve not alanı",
          "5 küresel API: Film/Dizi (TMDB), Oyun (RAWG), Kitap (Open Library), Müzik (iTunes)",
          "Kullanıcı rolleri: Admin, Liste Sahibi, Editör, Ziyaretçi — her kullanıcıya özel renk kodu"
        ],
        en: [
          "Automated ranking: lists update dynamically based on participant rating averages; top 3 entries receive gold/silver/bronze badges",
          "In-content live chat: real-time comments and notes attached directly beneath each card",
          "5 global API integrations: Movies/TV (TMDB), Games (RAWG), Books (Open Library), Music (iTunes)",
          "User roles & access control: Admin, List Owner, Editor, and Viewer — color-coded per user"
        ]
      },
      techStack: {
        tr: [
          { label: "Ön Yüz", value: "Next.js 16 (App Router) · TypeScript · React 19" },
          { label: "Stil", value: "Tailwind CSS · Dark Glassmorphism" },
          { label: "Veritabanı", value: "Supabase / PostgreSQL" },
          { label: "API'ler", value: "TMDB · RAWG · Open Library · Apple iTunes" }
        ],
        en: [
          { label: "Frontend", value: "Next.js 16 (App Router) · TypeScript · React 19" },
          { label: "Styling", value: "Tailwind CSS · Dark Glassmorphism" },
          { label: "Database", value: "Supabase / PostgreSQL" },
          { label: "APIs", value: "TMDB · RAWG · Open Library · Apple iTunes" }
        ]
      },
      categories: {
        tr: ["Filmler", "Diziler", "Oyunlar", "Kitaplar", "Müzikler", "Özel / Diğer"],
        en: ["Movies", "TV Shows", "Games", "Books", "Music", "Custom / Other"]
      },
      elevator: {
        tr: "Listor; arkadaş gruplarının ortak listeler kurup beraber puanladığı, gerçek zamanlı sıralama ve çoklu API entegrasyonuyla çalışan sosyal bir keşif platformudur.",
        en: "Listor is a social discovery platform where groups collaboratively build and score lists with real-time dynamic ranking and multi-API integrations."
      }
    },
    {
      id: "memory-line",
      title: "Memory Line",
      tagline: {
        tr: "Görsel hafızayı ve refleksleri test eden minimalist web oyunu",
        en: "A minimalist web game testing visual memory and reflexes"
      },
      description: {
        tr: "Karanlık bir ızgara üzerinde sırayla beliren çizgi desenini akılda tutup, ekrandan el kaldırmadan doğru sırada noktaları birbirine bağlayarak deseni yeniden çizmeye dayanan modern ve minimalist bir hafıza oyunu. Hazır oyun motoru kullanılmadan saf HTML5 Canvas ile 60 FPS olarak geliştirildi.",
        en: "A modern and minimalist memory game where players memorize sequentially appearing line patterns on a dark grid and recreate them by connecting nodes without lifting their finger. Built with pure HTML5 Canvas at 60 FPS without external game engines."
      },
      category: {
        tr: "Web Oyunu",
        en: "Web Game"
      },
      status: {
        tr: "Canlı",
        en: "Live"
      },
      liveUrl: "https://memoryline-azure.vercel.app/",
      githubUrl: "https://github.com/kargamak/memory_line",
      tags: ["React 19", "TypeScript", "Vite", "HTML5 Canvas", "Web Audio API", "LocalStorage"],
      features: {
        tr: [
          "Saf HTML5 Canvas 2D: DOM olmadan 60 FPS çizim, Retina / yüksek DPI ekran desteği",
          "Web Audio API ses sentezleyici: harici ses dosyası yok, doğru bağlantılarda pentatonik notalar, hatalarda gerçek zamanlı frekans dalgaları",
          "Özel takımyıldızı seviyeleri: Büyük Ayı, Küçük Ayı, Kasiopeya, Kozmik Şimşek ve daha fazlası — özel renk teması, ışıltı ve bonus puan",
          "Matematiksel zorluk eğrisi: seviye 1–3 lineer, 3–13 kademeli, 13+ ustalık formülü",
          "Zero-Skip Komşuluk Filtresi: uzak noktalardan geçerken haksız yanma engellendi",
          "Maç sonu analiz paneli: skor, seviye, kombo, hata, en zorlanılan bölüm, süre, keşfedilen şekil sayısı",
          "TR / ENG çoklu dil ve S/M/L/XL boyut seçenekleri",
          "LocalStorage: rekorlar ve tercihler tarayıcıda yerel olarak saklanır"
        ],
        en: [
          "Pure HTML5 Canvas 2D: DOM-less 60 FPS rendering with Retina / high-DPI display support",
          "Web Audio API sound synthesis: no external audio assets; pentatonic tones on matches, real-time frequency waveforms on misses",
          "Special constellation levels: Ursa Major, Ursa Minor, Cassiopeia, Cosmic Lightning, and more with custom palettes and glow effects",
          "Mathematical difficulty scaling: levels 1–3 linear, 3–13 progressive, 13+ mastery curve",
          "Zero-Skip Proximity Filter: eliminates false penalty triggers when passing across distant nodes",
          "Post-game analytics panel: score, level, combo count, errors, bottleneck stages, time, discovered patterns",
          "TR / EN multi-language and S/M/L/XL board sizing",
          "LocalStorage: high scores and preferences persisted locally in the browser"
        ]
      },
      techStack: {
        tr: [
          { label: "Framework", value: "React 19 · TypeScript" },
          { label: "Derleyici", value: "Vite (HMR · yüksek performans)" },
          { label: "Grafik", value: "HTML5 Canvas 2D API · Lerp fiziği · 60 FPS" },
          { label: "Ses", value: "Web Audio API osilatörleri (dosyasız sentez)" },
          { label: "Depolama", value: "LocalStorage API" }
        ],
        en: [
          { label: "Framework", value: "React 19 · TypeScript" },
          { label: "Build Tool", value: "Vite (HMR · high performance)" },
          { label: "Graphics", value: "HTML5 Canvas 2D API · Lerp physics · 60 FPS" },
          { label: "Audio", value: "Web Audio API oscillators (fileless synthesis)" },
          { label: "Storage", value: "LocalStorage API" }
        ]
      },
      categories: {
        tr: ["Büyük Ayı", "Küçük Ayı", "Kasiopeya", "Kozmik Şimşek", "Gök Elması", "Kozmik Yıldız", "Kozmik Kalp", "Sonsuzluk"],
        en: ["Ursa Major", "Ursa Minor", "Cassiopeia", "Cosmic Lightning", "Sky Diamond", "Cosmic Star", "Cosmic Heart", "Infinity"]
      },
      elevator: {
        tr: "Memory Line; hazır motor olmadan, saf Canvas ve Web Audio API ile sıfırdan inşa edilmiş, görsel hafıza ve refleksleri test eden minimalist bir web oyunudur.",
        en: "Memory Line is a minimalist web game built from scratch using pure Canvas and Web Audio API to challenge visual memory and reflexes."
      }
    },
    {
      id: "finai",
      title: "FinAI",
      tagline: {
        tr: "BİST Temel Analiz ve Yapay Zeka Araştırma Platformu",
        en: "BIST Fundamental Analysis & AI Research Platform"
      },
      description: {
        tr: "Borsa İstanbul'da işlem gören şirketlerin finansal tablolarını, rasyolarını, KAP duyurularını ve finans haberlerini otomatik analiz eden; 11 temel kategoride objektif puanlama yapan ve Google Gemini AI ile şirket araştırma notları üreten modern finansal analiz platformu.",
        en: "A modern financial analysis platform that automatically evaluates financial statements, valuation metrics, public disclosures (KAP), and market news for Borsa Istanbul companies; performs objective scoring across 11 fundamental categories and generates institutional research notes with Google Gemini AI."
      },
      category: {
        tr: "Yapay Zeka & Fintek",
        en: "AI & Fintech"
      },
      status: {
        tr: "Canlı",
        en: "Live"
      },
      liveUrl: "https://finaii.streamlit.app/",
      githubUrl: "https://github.com/kargamak/FinAI",
      tags: ["Python", "Streamlit", "Google Gemini AI", "SQLAlchemy", "Plotly", "yfinance", "Pandas", "SQLite"],
      features: {
        tr: [
          "11 Temel Kalite Skoru: Finansal Sağlık, Kârlılık, Büyüme, Borç Yönetimi, Likidite, Nakit Akışı, Değerleme Çarpanları, Yönetim Kalitesi, KAP Etkisi, Haber Duygu Analizi, Makro Dayanıklılık",
          "3 görünüm modu: Epic Games tarzı satır listesi, 4 sütunlu kart ızgarası, TradingView bağlantılı detaylı tablo",
          "Gemini AI hisse analisti: sayfa içi soru-cevap ve şirket araştırma notu üretimi",
          "1-tıkla prompt kopyalama: bilanço özetini ChatGPT / Claude / DeepSeek'e yapıştırarak derin analiz",
          "Canlı Google News RSS ve KAP entegrasyonu ile anlık haber akışı",
          "Yıldız Pazar, BİST 30, BİST 100, Ana Pazar ve sektör bazında filtreleme"
        ],
        en: [
          "11 Fundamental Quality Scores: Financial Health, Profitability, Growth, Debt Management, Liquidity, Cash Flow, Valuation Multiples, Management Quality, KAP Impact, News Sentiment, Macro Resilience",
          "3 view modes: Epic Games-styled row list, 4-column card grid, and comprehensive table view linked to TradingView",
          "Gemini AI equity analyst: in-app interactive Q&A and instant company research report generation",
          "1-click prompt exporter: copy structured financial statements to ChatGPT / Claude / DeepSeek for deep qualitative analysis",
          "Real-time news stream powered by Google News RSS and Public Disclosure Platform (KAP) integration",
          "Multi-tier market filtering by Star Market, BIST 30, BIST 100, Main Market, and industry sectors"
        ]
      },
      techStack: {
        tr: [
          { label: "Dil", value: "Python 3.13 / 3.14" },
          { label: "Arayüz", value: "Streamlit · Özel CSS (Obsidian Dark + Glassmorphism)" },
          { label: "Yapay Zeka", value: "Google Gemini 2.5 Flash" },
          { label: "Veritabanı", value: "SQLite · SQLAlchemy 2.0" },
          { label: "Analitik", value: "Pandas · NumPy · Plotly (Radar & Dağılım)" },
          { label: "Veri", value: "yfinance · BeautifulSoup4 · Google News RSS · KAP" },
          { label: "DevOps", value: "GitHub · Streamlit Community Cloud" }
        ],
        en: [
          { label: "Language", value: "Python 3.13 / 3.14" },
          { label: "UI", value: "Streamlit · Custom CSS (Obsidian Dark + Glassmorphism)" },
          { label: "AI Engine", value: "Google Gemini 2.5 Flash" },
          { label: "Database", value: "SQLite · SQLAlchemy 2.0" },
          { label: "Analytics", value: "Pandas · NumPy · Plotly (Radar & Scatter)" },
          { label: "Data Feed", value: "yfinance · BeautifulSoup4 · Google News RSS · KAP" },
          { label: "DevOps", value: "GitHub · Streamlit Community Cloud" }
        ]
      },
      categories: {
        tr: ["Finansal Sağlık", "Kârlılık", "Büyüme", "Borç Yönetimi", "Likidite", "Nakit Akışı", "Değerleme", "Yönetim", "KAP Duyuruları", "Haber Analizi", "Makro Dayanıklılık"],
        en: ["Financial Health", "Profitability", "Growth", "Debt Management", "Liquidity", "Cash Flow", "Valuation Multiples", "Management Quality", "KAP Disclosures", "News Sentiment", "Macro Resilience"]
      },
      elevator: {
        tr: "FinAI; yatırımcıların yüzlerce sayfalık bilanço yerine saniyeler içinde şirketin finansal sağlığını, kârlılığını ve risklerini 11 kategoride puanlanmış ve AI analiziyle zenginleştirilmiş formatta görmesini sağlar.",
        en: "FinAI empowers investors to evaluate financial health, profitability, and risk across 11 scored categories with AI-generated research notes in seconds instead of sifting through hundreds of financial statement pages."
      }
    },
    {
      id: "pixelcam",
      title: "PixelCam",
      tagline: {
        tr: "Gerçek zamanlı piksel sanatı kamera uygulaması",
        en: "Real-time pixel art camera app"
      },
      description: {
        tr: "Canlı piksel sanatı işleme, özelleştirilebilir renk paletleri ve retro efektler sunan kamera uygulaması.",
        en: "Camera application featuring live pixel-art rendering, customizable retro color palettes, and visual effects."
      },
      category: {
        tr: "Görüntü İşleme",
        en: "Image Processing"
      },
      status: {
        tr: "Geliştirme Aşamasında",
        en: "In Development"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Image Processing", "Pixel Art", "Pipeline", "Mobile"],
      features: {
        tr: [
          "Canlı piksel sanatı işleme ve gerçek zamanlı önizleme",
          "Özelleştirilebilir retro renk paletleri ve efekt filtreleri",
          "Düşük gecikmeli, performans odaklı işleme mimarisi"
        ],
        en: [
          "Live pixel-art processing and real-time preview",
          "Customizable retro color palettes and effect filters",
          "Low-latency, performance-optimized processing pipeline"
        ]
      },
      techStack: {
        tr: [
          { label: "Alan", value: "Görüntü İşleme · Piksel Sanatı" },
          { label: "Mimari", value: "Performans Odaklı Pipeline · Mobil" }
        ],
        en: [
          { label: "Domain", value: "Image Processing · Pixel Art" },
          { label: "Architecture", value: "Performance-Optimized Pipeline · Mobile" }
        ]
      }
    }
  ],

  // --- İŞ DENEYİMLERİ / WORK EXPERIENCE ---
  experience: [
    {
      role: {
        tr: "Yazılım Sistem Analisti Stajyeri",
        en: "Software System Analyst Intern"
      },
      company: "Identify",
      period: "30/06/2025 – 23/06/2026",
      location: {
        tr: "İstanbul, Türkiye",
        en: "Istanbul, Turkey"
      },
      points: {
        tr: [
          "İş gereksinimlerini toplayarak Jira ve Confluence üzerinde teknik dokümantasyon ve kullanıcı senaryoları (User Stories) hazırladım.",
          "Kullanıcı ihtiyaçlarını analiz etmek amacıyla BPMN standartlarında sistem akış şemaları ve iş süreç modelleri tasarladım.",
          "Yazılım ve analiz ekibi için uçtan uca test senaryoları oluşturarak SDLC (Yazılım Geliştirme Yaşam Döngüsü) süreçlerini destekledim."
        ],
        en: [
          "Gathered business requirements to create technical documentation and User Stories on Jira and Confluence.",
          "Designed system flowcharts and business process models in BPMN standards to analyze user needs.",
          "Developed end-to-end test scenarios for software and analysis teams, supporting full SDLC processes."
        ]
      }
    },
    {
      role: {
        tr: "Depo ve Lojistik Operasyonları",
        en: "Warehouse and Logistics Operations"
      },
      company: "Ekol Logistics",
      period: "03/07/2023 – 10/08/2023",
      location: {
        tr: "İstanbul, Türkiye",
        en: "Istanbul, Turkey"
      },
      points: {
        tr: [
          "El terminalleri ile ürün toplama ve dağıtım süreçlerini yöneterek operasyonel verimlilik ve stok doğruluğu sağladım.",
          "Mal kabul ve envanter süreçlerine aktif destek vererek operasyonel iş akışını kolaylaştırdım.",
          "Yoğun ve dinamik bir ekip ortamında iletişim odaklı operasyon görevlerini başarıyla yürüttüm."
        ],
        en: [
          "Managed product picking and distribution processes using handheld terminals, ensuring operational efficiency and inventory accuracy.",
          "Actively supported goods receiving and inventory processes, streamlining daily operational workflows.",
          "Successfully executed communication-driven operational tasks within a fast-paced, dynamic team environment."
        ]
      }
    }
  ],

  // --- EĞİTİM & LİDERLİK / EDUCATION & LEADERSHIP ---
  education: [
    {
      degree: {
        tr: "Yönetim Bilişim Sistemleri (Lisans)",
        en: "Management Information Systems (B.Sc.)"
      },
      school: {
        tr: "Akdeniz Üniversitesi",
        en: "Akdeniz University"
      },
      period: {
        tr: "10/10/2023 – Günümüz",
        en: "10/10/2023 – Present"
      },
      location: {
        tr: "Antalya, Türkiye",
        en: "Antalya, Turkey"
      },
      description: {
        tr: "Veri yönetimi, sistem analizi ve dijital dönüşüm odaklı eğitim. Kurumsal verimliliği artıran bilgi sistemleri tasarımı ile Ürün ve Proje Yönetimi alanlarına odaklanma.",
        en: "Education focused on data management, systems analysis, and digital transformation. Specialization in information systems design for organizational efficiency and Product & Project Management."
      },
      leadership: {
        title: {
          tr: "TOPLULUK BAŞKANI – AkdeMIS (500+ ÜYE)",
          en: "PRESIDENT – AkdeMIS (500+ MEMBERS)"
        },
        period: "2024 – 2025",
        school: {
          tr: "Akdeniz Üniversitesi",
          en: "Akdeniz University"
        },
        details: {
          tr: "Üniversitemizin ilk ve tek YBS öğrenci topluluğunun başkanlığını yürüterek 30+ kişilik çekirdek ekibi ve farklı departmanları koordineli yönettim. 400+ katılımcılı II. TeknoYön Teknoloji & Yönetim Zirvesi’nin konuşmacı ilişkilerini, lojistik operasyonlarını, sponsorluk süreçlerini ve multidisipliner eğitim serilerini başarıyla koordine ettim.",
          en: "Led the first and only Management Information Systems student community at our university, coordinating a 30+ member core team across multiple departments. Successfully managed speaker relations, logistics, sponsorships, multidisciplinary training series, and the II. TeknoYön Technology & Management Summit with 400+ attendees."
        }
      }
    }
  ],

  // --- KONFERANSLAR / CONFERENCES ---
  conferences: [
    {
      title: {
        tr: "Linux Kullanıcıları Derneği Kış Kampı",
        en: "Linux Users Association Winter Camp"
      },
      organization: {
        tr: "Afyon Kocatepe Üniversitesi",
        en: "Afyon Kocatepe University"
      },
      period: "04/02/2026 – 08/02/2026",
      details: {
        tr: "Tüm yazılım yaşam döngüsü boyunca modern Yazılım Geliştirme Yaşam Döngüsü (SDLC) metodolojilerine odaklanan; mikroservis mimarisi, CI/CD süreçleri, DevOps iş akışları, konteynerleştirme ve temel sistem tasarım kalıplarını kapsayan kapsamlı teorik eğitimi tamamladım.",
        en: "Completed comprehensive theoretical training focused on modern Software Development Life Cycle (SDLC) methodologies, covering microservices architecture, CI/CD pipelines, DevOps workflows, containerization, and foundational system design patterns across the entire software lifecycle."
      }
    }
  ],

  // --- YETENEKLER / SKILLS ---
  skillCategories: [
    {
      name: {
        tr: "Veri & Analiz",
        en: "Data & Analytics"
      },
      skills: {
        tr: [
          "SQL ve Veritabanı Yönetimi",
          "Veri Odaklı Raporlama ve İçgörü Üretimi",
          "Büyük Veri Kümeleri İşleme"
        ],
        en: [
          "SQL & Database Management",
          "Data-Driven Reporting & Insight Generation",
          "Large Dataset Processing"
        ]
      }
    },
    {
      name: {
        tr: "Sistem & Süreçler",
        en: "Systems & Processes"
      },
      skills: {
        tr: [
          "Sistem Analizi ve İş Süreci Modelleme (BPMN)",
          "Proje Yönetimi (Scrum, Kanban, Agile)",
          "Yazılım Testi ve Dokümantasyon (SDLC, STLC)"
        ],
        en: [
          "Systems Analysis & Business Process Modeling (BPMN)",
          "Project Management (Scrum, Kanban, Agile)",
          "Software Testing & Documentation (SDLC, STLC)"
        ]
      }
    },
    {
      name: {
        tr: "Teknolojiler & Araçlar",
        en: "Technologies & Tools"
      },
      skills: {
        tr: [
          "Python",
          "C++",
          "C#",
          "ASP.NET",
          "Web Programlama (React, Next.js)",
          "Atlassian Stack (Jira, Confluence)",
          "CRM Sistemleri"
        ],
        en: [
          "Python",
          "C++",
          "C#",
          "ASP.NET",
          "Web Development (React, Next.js)",
          "Atlassian Stack (Jira, Confluence)",
          "CRM Systems"
        ]
      }
    },
    {
      name: {
        tr: "Diller",
        en: "Languages"
      },
      skills: {
        tr: [
          "Türkçe (Ana Dil)",
          "İngilizce (B2 - Bağımsız Kullanıcı)"
        ],
        en: [
          "Turkish (Native)",
          "English (B2 - Professional Working)"
        ]
      }
    }
  ],

  // --- SOSYAL MEDYA & İLETİŞİM / SOCIALS ---
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ufukerenkurt" },
    { name: "GitHub", url: "https://github.com/kargamak" },
    { name: "E-Posta", url: "mailto:ufukerenkurt03@gmail.com" },
    { name: "Telefon", url: "tel:+905448945358", label: "+90 544 894 53 58" }
  ]
};
