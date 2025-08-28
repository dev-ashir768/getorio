import ContactCards from "@/components/ui/contact-us/ContactCards";
import ContactForm from "@/components/ui/contact-us/ContactForm";
import GoogleMap from "@/components/ui/contact-us/GoogleMap";
import HeroSection from "@/components/ui/contact-us/HeroSection";
import React from "react";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Reach Out to ${process.env.NEXT_PUBLIC_APP_NAME} for Support and Inquiries`,
  description: `Get in touch with ${process.env.NEXT_PUBLIC_APP_NAME} for any questions, support, or inquiries. We're here to help you with all your e-commerce needs and provide prompt assistance.`,
  canonicalUrlRelative: "/contact-us",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/contactus-page.jpg`
      }
    ]
  },
});


const Contact = () => {
  return (
    <>
      <HeroSection />
      <ContactCards />
      <GoogleMap />
      <ContactForm />
    </>
  );
};

export default Contact;
