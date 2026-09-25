export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
    reddit?: string;
    steam?: string;
    officialWebsite?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Transport Fever 3 Wiki",
  shortName: "Transport Fever 3",
  logoText: "TF3",
  tagline: "The Ultimate Transport Fever 3 Strategy & Vehicle Guide",
  description: "Transport Fever 3 Wiki provides vehicle lists, beginner guides, gameplay tips, maps, economy strategies and detailed information for building transport networks.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://transport-fever3.top",
  supportEmail: "support@transport-fever3.top",
  gameUrl: "https://store.steampowered.com/app/3493540/Transport_Fever_3/",
  heroVideoId: "Hcgff2-44rU",
  social: {
    officialWebsite: "https://www.transportfever3.com/",
    steam: "https://store.steampowered.com/app/3493540/Transport_Fever_3/",
    reddit: "https://www.reddit.com/r/TransportFever",
    youtube: "https://www.youtube.com/watch?v=Hcgff2-44rU",
    discord: "https://www.transportfever3.com/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
