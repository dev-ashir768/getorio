import Features from "@/components/ui/wms/Features";
import HeroSection from "@/components/ui/wms/HeroSection";
import OptimizationSection from "@/components/ui/wms/OptimizationSection";
import React from "react";
import ManageSection from "@/components/ui/wms/ManageSection";
import FAQs from "@/components/ui/wms/FAQs";
import WmsCarousel from "@/components/ui/wms/WmsCarousel";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Effortlessly Manage Inventory with ${process.env.NEXT_PUBLIC_APP_NAME}'s Warehouse Management System`,
  description: `Streamline your inventory management with ${process.env.NEXT_PUBLIC_APP_NAME}'s Warehouse Management System. Easy tracking, efficient control, and seamless operations for your business.`,
  canonicalUrlRelative: "/warehouse-management-system",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/wms-page.jpg`
      }
    ]
  },
});

const WMS = () => {
  return (
    <>
      <HeroSection />
      <OptimizationSection />
      <ManageSection />
      <Features />
      <WmsCarousel />
      <FAQs />
    </>
  );
};

export default WMS;
