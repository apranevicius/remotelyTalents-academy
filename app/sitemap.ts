import type { MetadataRoute } from "next";

import { absoluteUrl } from "./_lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/find-remote-job-with-ai"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
