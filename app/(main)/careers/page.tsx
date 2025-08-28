import Benefits from "@/components/ui/careers/Benefits";
import HeroSection from "@/components/ui/careers/HeroSection";
import Opportunity from "@/components/ui/careers/Opportunity";
import Positions from "@/components/ui/careers/Positions";
import React from "react";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";


export const metadata = getSEOTags({
  title: `Explore career opportunities at Orio`,
  description: `Discover exciting career opportunities at ${process.env.NEXT_PUBLIC_APP_NAME}. We're looking for talented individuals to join our team and contribute to our innovative projects.`,
  canonicalUrlRelative: "/careers",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/careers-page.jpg`
      }
    ]
  },
});

const Careers = () => {
  return (
    <>
      <HeroSection />
      <Opportunity />
      <Benefits />
      <Positions />
    </>
  );
};

export default Careers;
