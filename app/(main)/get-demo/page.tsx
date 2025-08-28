import GetDemoCard from "@/components/ui/get-demo/GetDemoCard";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Request a Demo and Revolutionize Your E-Commerce with ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: `Request a demo of ${process.env.NEXT_PUBLIC_APP_NAME}’s services. See how our solutions can streamline your e-commerce, shipping, and order management for better efficiency and growth.`,
  canonicalUrlRelative: "/get-demo",
  keywords: keywords.generic,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/getdemo-page.jpg`
      }
    ]
  },
});


const Demonstration = () => {
  return (
    <>
      <section className="bg-[#E6F1FF]">
        <div className="container flex justify-center items-center">
          <GetDemoCard />
        </div>
      </section>
    </>
  );
};

export default Demonstration;
