// Görünür web sayfası kısımları için Türkçe çeviriler - Dijital Pazarlama ve Web Geliştirme Şirketi

import { airbnb, binance, coinbase, dropbox, facebook, instagram, linkedin, people01, people02, people03, send, shield, star, twitter } from "../assets";

// NavBar Bağlantıları
export const navLinks = [
  {
    id: "anasayfa",
    title: "Ana Sayfa",
  },
  {
    id: "yenilikler",
    title: "Yenilikler",
  },
  {
    id: "hizmetler",
    title: "Hizmetler",
  },
  {
    id: "hakkimizda",
    title: "Hakkımızda",
  },
  {
    id: "iletisim",
    title: "İletişim",
  },
];

// Özellikler Bölümü
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "İleri Seviye Web Projeleri",
    content:
      "Dijital pazarlama stratejilerinizi güçlendirmek ve ödüllerle desteklenen web projeleri sunarak işinize değer katıyoruz. Teknolojinin sınırlarını zorlayan projelere imza atıyoruz.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Güvenlik ve Koruma",
    content:
      "Web geliştirme süreçlerinde işletmenizin güvenliği bizim için temel önceliktir. Bilgilerinizi proaktif güvenlik önlemleriyle koruyor ve güvenle yönetmenizi sağlıyoruz.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Dijital Dönüşüm Stratejileri",
    content:
      "Fiziksel dünyadan online dünyaya geçişte, işletmenizin kapılarını dünyanın her yerinden müşterilere açmanıza yardımcı oluyoruz. Dijital pazarlama ve web geliştirme stratejileriyle işletmenizi öne çıkarıyoruz.",
  },
];


// Geri Bildirim Bölümü
export const feedback = [
  {
    id: "feedback-1",
    content:
      "Para sadece bir araçtır. Sizi nereye isterseniz götürür, ancak sizi sürücü olarak değiştirmez.",
    name: "Herman Jensen",
    title: "Kurucu ve Lider",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Dijital pazarlama, hayatınızı kolaylaştırır. Eğer ona sahipseniz, şanslısınız demektir.",
    name: "Steve Mark",
    title: "Kurucu ve Lider",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Genellikle başarılı olanlar, dijital pazarlama, web geliştirme ve teknoloji ile uğraşanlardır.",
    name: "Kenn Gallagher",
    title: "Kurucu ve Lider",
    img: people03,
  },
];

// İstatistikler Bölümü
export const stats = [
  {
    id: "stats-1",
    title: "Aktif Kullanıcı",
    value: "1500+",
  },
  {
    id: "stats-2",
    title: "Stratejik İş Ortaklıkları",
    value: "25+",
  },
  {
    id: "stats-3",
    title: "Toplam İşlem Hacmi",
    value: "$0.5M+",
  },
];

// Form Alanları
export const formFields = [
  {
    id: "name",
    label: "Adınız (Zorunlu)",
    type: "text",
  },
  {
    id: "surname",
    label: "Soyadınız (Zorunlu)",
    type: "text",
  },
  {
    id: "email",
    label: "E-posta (Zorunlu)",
    type: "email",
  },
  {
    id: "phone",
    label: "Telefon (Opsiyonel)",
    type: "tel",
  },
  {
    id: "sector",
    label: "Hizmet talebi (Zorunlu)",
    type: "radio",  // Radio olarak güncellendi
    options: [
      { id: "webDev", label: "Web Sayfasi & Tasarım ve Geliştirme Hizmetleri" },
      { id: "seo", label: "Arama Motoru Optimizasyonu (SEO)" },
      { id: "smm", label: "Sosyal Medya Yönetimi (SMM)" },
    ],
  },
  {
    id: "description",
    label: "İşletmeniz hakkında bilgi (Zorunlu)",
    type: "textarea",
  },
  {
    id: "document",
    label: "Belge Yükle (Opsiyonel)",
    type: "file",
  },
];

// Alt Bağlantılar
export const footerLinks = [
  {
    title: "Faydalı Bağlantılar",
    links: [
      {
        name: "İçerik",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "Nasıl Çalışır",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Oluştur",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Keşfet",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Koşullar ve Hizmetler",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Topluluk",
    links: [
      {
        name: "Yardım Merkezi",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Stratejik Ortaklıklar",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Öneriler",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Bültenler",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "İş Ortaklığı",
    links: [
      {
        name: "Ortaklarımız",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Ortak Ol",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

// Sosyal Medya Simgeleri
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

// İş Ortağının Logoları
export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
