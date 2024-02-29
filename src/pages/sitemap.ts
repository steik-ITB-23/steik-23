import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://steik23.netlify.app",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
  ];
}
