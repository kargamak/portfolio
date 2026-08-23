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
      tagline: "Collaborative listing & rating app",
      description: "Gerçek zamanlı paylaşımlı listeler ve kolektif puanlama algoritması ile kullanıcı odaklı, temiz arayüze sahip ortak liste yönetim uygulaması.",
      category: "Web Uygulaması",
      status: "Canlı",
      liveUrl: "https://list0r.vercel.app/",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Real-time", "Scoring Algorithm", "UI/UX", "Next.js / React"],
      features: [
        "Real-time shared lists (Gerçek zamanlı paylaşımlı listeler)",
        "Collective scoring algorithm (Kolektif puanlama algoritması)",
        "Clean, user-focused UI (Kullanıcı odaklı arayüz)"
      ]
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
      tagline: "Yapay Zeka Destekli Finans Analiz Asistanı",
      description: "Finansal verileri, bütçeleri ve piyasa analizlerini yapay zeka modelleriyle işleyerek kişiselleştirilmiş içgörüler sunan akıllı finans platformu.",
      category: "AI & Fintech",
      status: "Canlı (Streamlit)",
      liveUrl: "https://finaii.streamlit.app/",
      githubUrl: "https://github.com/ufukerenkurt",
      tags: ["Python", "Streamlit", "AI / LLM", "Financial Analysis"],
      features: [
        "Doğal dil ile harcama ve bütçe analizi",
        "Tahmine dayalı portföy grafik modelleme",
        "Kişiselleştirilmiş finansal içgörüler"
      ]
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
