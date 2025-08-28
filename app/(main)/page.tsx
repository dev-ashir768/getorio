"use client"
import DemoBooking from "@/components/ui/home/DemoBooking";
import Feedback from "@/components/ui/home/Feedback";
import HeroSection from "@/components/ui/home/HeroSection";
import MultiPlatform from "@/components/ui/home/MultiPlatform";
import OneWindow from "@/components/ui/home/OneWindow";
import OptimizationSection from "@/components/ui/home/OptimizationSection";
import OurClient from "@/components/ui/home/OurClient";
import PerformanceSection from "@/components/ui/home/PerformanceSection";
import StreamlineNBenefits from "@/components/ui/home/StreamlineNBenefits";
import WholeTeam from "@/components/ui/home/WholeTeam";

export type PerformanceSectionLinksType = {
  id: number;
  label: string;
  digit: string;
  suffix?: string;
  link: string;
};

type LinksType = {
  PerformanceSectionLinks: PerformanceSectionLinksType[];
};

const links: LinksType = {
  PerformanceSectionLinks: [
    {
      id: 1,
      label: "order management system users",
      digit: "1000",
      suffix: "+",
      link: "/images/svg/icon-1.svg",
    },
    {
      id: 2,
      label: "warehouse management system users",
      digit: "60",
      suffix: "+",
      link: "/images/svg/icon-2.svg",
    },
    {
      id: 3,
      label: "3pl couriers using logistics system",
      digit: "20",
      suffix: "+",
      link: "/images/svg/icon-3.svg",
    },
    {
      id: 4,
      label: "Annual Order Volume",
      digit: "125",
      suffix: "+ M",
      link: "/images/svg/icon-4.svg",
    },
    {
      id: 5,
      label: "Orio Customers",
      digit: "2000",
      suffix: "+",
      link: "/images/svg/icon-5.svg",
    },
    {
      id: 6,
      label: "Gross Merchandise Value",
      digit: "14",
      suffix: "+ B",
      link: "/images/svg/icon-6.svg",
    },
  ],
};

export default function Home() {



  return (
    <>
      <HeroSection />
      <PerformanceSection
        className="lg:py-28 md:py-0 sm:py-28 py-20"
        links={links.PerformanceSectionLinks.slice(0, 3)}
        title="Unified E-Commerce Platform"
        cardHeight="h-[340px]"
        subtitle="Orio changes your business by connecting systems, automating tasks, and improving efficiency. Enjoy easy-to-use solutions made for great performance."
        end={""}
      />
      <OptimizationSection />
      <OneWindow />
      <MultiPlatform />
      <PerformanceSection
        className="md:py-28 sm:py-28 py-20"
        links={links.PerformanceSectionLinks.slice(3, 6)}
        title="Performance Everywhere"
        cardHeight="h-[340px]"
        subtitle="Orio changes how your business works by bringing systems together, automating tasks, and improving efficiency. This ensures strong and simple solutions for great results."
        end={""}
      />
      <StreamlineNBenefits />
      <OurClient />
      <Feedback />
      <WholeTeam />
      <DemoBooking />

    </>
  );
}
