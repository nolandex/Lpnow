import type { Product } from "./types"

export const getInstagramBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000":
      return ["5000 Likes", "100000 Views"]
    case "5000":
      return ["10000 Likes", "170000 Views"]
    case "10000":
      return ["15000 Likes", "300000 Views"]
    default:
      return []
  }
}

export const getTikTokBoosterFeatures = (option: string) => {
  const baseViews = 70000
  const baseLikes = 5000
  const baseShares = 700
  const baseSaves = 700

  switch (option) {
    case "2000":
      return [
        `${baseViews.toLocaleString()} Views`,
        `${baseLikes.toLocaleString()} Likes`,
        `${baseShares.toLocaleString()} Shares`,
        `${baseSaves.toLocaleString()} Saves`,
      ]
    case "5000":
      return [
        `${(baseViews * 2.5).toLocaleString()} Views`,
        `${(baseLikes * 2.5).toLocaleString()} Likes`,
        `${(baseShares * 2.5).toLocaleString()} Shares`,
        `${(baseSaves * 2.5).toLocaleString()} Saves`,
      ]
    default:
      return []
  }
}

export const getTelegramBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000":
      return ["10000 Views", "1000 Reactions"]
    case "5000":
      return ["15000 Views", "1500 Reactions"]
    case "10000":
      return ["30000 Views", "3000 Reactions"]
    default:
      return []
  }
}

export const getFacebookBoosterFeatures = (option: string) => {
  switch (option) {
    case "3000":
      return ["5000 Likes", "100000 Views"]
    case "5000":
      return ["10000 Likes", "170000 Views"]
    case "10000":
      return ["15000 Likes", "300000 Views"]
    default:
      return []
  }
}

export const productData: Product[] = [
  {
    name: "Paket Bisnis",
    price: "Rp 50,000",
    category: "paket_bisnis",
    features: ["Website", "Desain Konten Sosmed", "Booster Sosmed", "Video Promosi", "Copywriting", "SEO On-page"],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Paket Bisnis Reseller",
    price: "Rp 25,000",
    category: "paket_bisnis",
    features: ["Website", "Desain Konten Sosmed", "Booster Sosmed", "Video Promosi", "Copywriting", "Alat promosi"],
    exampleUrl: "https://example.com",
    modalType: "details",
  },
  {
    name: "Instagram Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/instagram",
    modalType: "details",
  },
  {
    name: "TikTok Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/tiktok",
    modalType: "details",
  },
  {
    name: "Telegram Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/telegram",
    modalType: "details",
  },
  {
    name: "Facebook Booster",
    price: "",
    category: "sosmed_booster",
    features: [],
    exampleUrl: "https://example.com/facebook",
    modalType: "details",
  },
  {
    name: "Desain Konten",
    price: "Rp 10,000",
    category: "lainnya",
    modalType: "contentImages",
  },
  {
    name: "Video Promosi",
    price: "Rp 10,000",
    category: "lainnya",
    exampleUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    modalType: "videoPromo",
  },
  {
    name: "SEO & Domain Website",
    price: "Rp 25,000",
    category: "lainnya",
    features: ["Riset Kata Kunci", "Optimasi Halaman", "setting dll"],
    modalType: "seoImages",
  },
  {
    name: "Jasa Iklan Online",
    price: "Rp 50,000",
    category: "lainnya",
    features: ["Meta ads", "Tiktok ads"],
    modalType: "adsImages",
  },
  {
    name: "Landing Page",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://unbounce.com",
    modalType: "example",
  },
  {
    name: "Profil Bisnis",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://profil-bisnis-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Simple Store",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://shopify.com",
    modalType: "example",
  },
  {
    name: "Portfolio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://portfolio-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Online Course",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://course-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Membership",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://membership-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Link in Bio",
    price: "Rp 20,000",
    category: "website",
    subcategory: "business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://linkinbio-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Digital Invitation",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://invitation-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Birthday",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://birthday-demo.vercel.app",
    modalType: "example",
  },
  {
    name: "Event",
    price: "Rp 20,000",
    category: "website",
    subcategory: "non-business",
    features: ["Responsif", "Hosting Gratis"],
    exampleUrl: "https://event-demo.vercel.app",
    modalType: "example",
  },
]

export const imageSources = {
  contentImages: ["/images/template1.jpg", "/images/template2.jpg", "/images/template3.jpg"],
  seoImages: ["/images/seo1.jpg"],
  adsImages: ["/images/ads1.jpg"],
}
