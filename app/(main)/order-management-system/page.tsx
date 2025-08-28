import BusinessSize from "@/components/ui/oms/BusinessSize";
import FAQs from "@/components/ui/oms/FAQs";
import Features from "@/components/ui/oms/Features";
import HeroSection from "@/components/ui/oms/HeroSection";
import HowOrioWorks from "@/components/ui/oms/HowOrioWorks";
import MultiPlatforms from "@/components/ui/oms/MultiPlatforms";
import OmsCarousel from "@/components/ui/oms/OmsCarousel";
import React from "react";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";


export const metadata = getSEOTags({
  title: `Effortlessly Manage Orders with ${process.env.NEXT_PUBLIC_APP_NAME}'s Order Management System`,
  description: `Effortlessly manage all your orders with ${process.env.NEXT_PUBLIC_APP_NAME}’s Order Management System. Streamlined process, easy tracking, and better control for your business.`,
  canonicalUrlRelative: "/order-management-system",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/oms-page.jpg`
      }
    ]
  },
});

const OMS = () => {
  return (
    <>
      <HeroSection />
      <HowOrioWorks />
      <BusinessSize />
      <MultiPlatforms />
      <Features />
      <OmsCarousel />
      <FAQs />
    </>
  );
};

export default OMS;
