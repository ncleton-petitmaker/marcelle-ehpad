import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const esmsTypes = [
    "agent-ia-ehpad",
    "agent-ia-residence-autonomie",
    "agent-ia-usld",
    "agent-ia-ime",
    "agent-ia-iem",
    "agent-ia-itep",
    "agent-ia-eeap",
    "agent-ia-sessad",
    "agent-ia-camsp",
    "agent-ia-cmpp",
    "agent-ia-mas",
    "agent-ia-fam",
    "agent-ia-foyer-de-vie",
    "agent-ia-esat",
    "agent-ia-fhth",
    "agent-ia-ssiad",
    "agent-ia-cmp",
    "agent-ia-cattp",
  ];

  return [
    {
      url: "https://marcelle.ai",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...esmsTypes.map((slug) => ({
      url: `https://marcelle.ai/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://marcelle.ai/confidentialite",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://marcelle.ai/cgv",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
