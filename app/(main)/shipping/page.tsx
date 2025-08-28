import HeroSection from "@/components/ui/shipping/HeroSection";
import ManagedShipping from "@/components/ui/shipping/ManagedShipping";
import ShippingCTA from "@/components/ui/shipping/ShippingCTA";
import ShippingFeatures from "@/components/ui/shipping/ShippingFeatures";
import ShippingProvider from "@/components/ui/shipping/ShippingProvider";
import ShippingWithOrio from "@/components/ui/shipping/ShippingWithOrio";

import { keywords } from "@/seo/keywords";
import { getSEOTags } from "@/seo/getSeoTags";

export const metadata = getSEOTags({
  title: `Start Cash on Delivery with Orio Managed Shipping`,
  description: `Start offering cash on delivery with ${process.env.NEXT_PUBLIC_APP_NAME}'s managed shipping. Easy setup, reliable service, and smooth delivery for your e-commerce store.`,
  canonicalUrlRelative: "/shipping",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/shipping-page.jpg`
      }
    ]
  },
});



const Shipping = () => {
  return (
    <>
      <HeroSection />
      <ManagedShipping />
      <ShippingProvider />
      <ShippingFeatures />
      <ShippingWithOrio />
      <ShippingCTA />
    </>
  );
};

export default Shipping;
