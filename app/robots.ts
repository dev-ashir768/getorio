import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/images/"],
      },
    ],
    sitemap: "https://getorio.com/sitemap.xml",
    host: "https://getorio.com",
  };
}
