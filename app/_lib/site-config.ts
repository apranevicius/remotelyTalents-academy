export const siteConfig = {
  name: "RemotelyTalents Academy",
  siteName: "RemotelyTalents Academy",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.remotelytalents.com",
  description:
    "Recruiter-led courses from RemotelyTalents Academy designed to help professionals search smarter, improve their applications, and move toward real remote job opportunities.",
  locale: "en_US",
  organizationName: "RemotelyTalents",
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
