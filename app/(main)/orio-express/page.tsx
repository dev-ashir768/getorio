import HeroSection from "@/components/ui/orio-express/HeroSection";
import React from "react";
import Features from "@/components/ui/orio-express/Features";
import FAQs from "@/components/ui/orio-express/FAQs";
import OrioExpressCarousel from "@/components/ui/orio-express/OrioExpressCarousel";
import ThreePLManagement from "@/components/ui/orio-express/ThreePLManagement";
import ThreePLFeatures from "@/components/ui/orio-express/ThreePLFeatures";
import Couriers from "@/components/ui/orio-express/Couriers";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Streamline Your 3PL Operations with Orio Express`,
  description: `Optimize your 3PL operations with Orio Express. Fast, reliable logistics solutions to streamline your supply chain and improve efficiency.`,
  canonicalUrlRelative: "/orio-express",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/oex-page.jpg`
      }
    ]
  },
});

const OrioExpress = () => {
  return (
    <>
      <HeroSection />
      <Couriers />
      <ThreePLManagement />
      <ThreePLFeatures />
      <Features />
      <OrioExpressCarousel />
      <FAQs />
    </>
  );
};

export default OrioExpress;
