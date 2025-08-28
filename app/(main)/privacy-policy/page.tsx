import HeroSection from "@/components/ui/privacy-policy/HeroSection";
import React from "react";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Uncover the vision and expertise driving Orio Technologies`,
  description: `Uncover the vision and expertise driving Orio Technologies. Discover how our innovative team is shaping the future of technology.`,
  canonicalUrlRelative: "/about-us",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/aboutus-page.jpg`
      }
    ]
  },
});
const page = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default page;
