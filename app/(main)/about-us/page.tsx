import HeroSection from "@/components/ui/about-us/HeroSection";
import PerformanceSection from "@/components/ui/home/PerformanceSection";
import WhoWeAre from "@/components/ui/about-us/WhoWeAre";
import React from "react";
import WorkingTechnologies from "@/components/ui/about-us/WorkingTechnologies";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";


export const metadata = getSEOTags({
  title: `About Us - Building Better E-Commerce Solutions and Plug & Play Fulfillment`,
  description: `Get to know ${process.env.NEXT_PUBLIC_APP_NAME}. Our mission is to offer reliable, efficient e-commerce solutions that transform your business operations and streamline growth.`,
  canonicalUrlRelative: "/about-us",
  keywords: keywords.aboutus,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/aboutus-page.jpg`
      }
    ]
  },
});

const links = [
  {
    id: 1,
    label: "years in business",
    digit: "3",
    suffix: "+",
    link: "/images/svg/icon-7.svg",
  },
  {
    id: 2,
    label: "client number",
    digit: "600",
    suffix: "+",
    link: "/images/svg/icon-8.svg",
  },
  {
    id: 3,
    label: "Employees",
    digit: "40",
    suffix: "+",
    link: "/images/svg/icon-9.svg",
  },
];

const About = () => {
  return (
    <>
      <HeroSection />
      <PerformanceSection
        className="lg:py-28 md:py-0 sm:py-28 py-20"
        links={links}
        title="Revolutionizing E-Commerce"
        cardHeight="h-[310px]"
        subtitle="Orio is dedicated to revolutionizing e-commerce by its oms, wms, and orio express, streamlining processes, and enhancing overall efficiency."
        end={""}
      />
      <WhoWeAre />
      <WorkingTechnologies />
    </>
  );
};

export default About;
