import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "zh-CN", "ja"],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
