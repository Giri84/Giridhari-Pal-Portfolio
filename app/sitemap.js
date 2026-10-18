const SITE = "https://giridhari-pal-portfolio.vercel.app";

export default function sitemap() {
  return [{ url: SITE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
