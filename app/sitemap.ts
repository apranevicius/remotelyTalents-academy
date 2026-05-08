import type { MetadataRoute } from "next";

import { absoluteUrl } from "./_lib/site-config";

const routeLastModified = {
  home: new Date("2026-04-28"),
  course: new Date("2026-04-28"),
  about: new Date("2026-04-28"),
  coaching: new Date("2026-04-28"),
  introCall: new Date("2026-05-08"),
  terms: new Date("2026-05-07"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: routeLastModified.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/find-remote-job-with-ai"),
      lastModified: routeLastModified.course,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/about"),
      lastModified: routeLastModified.about,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/coaching-programs"),
      lastModified: routeLastModified.coaching,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/intro-call"),
      lastModified: routeLastModified.introCall,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/terms-of-service"),
      lastModified: routeLastModified.terms,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
