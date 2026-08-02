import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/form-test", "/ai-tools"],
    },
    sitemap: "https://mikemcmillan.ca/sitemap.xml",
  };
}
