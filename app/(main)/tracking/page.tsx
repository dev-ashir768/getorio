import TrackingWrapper from "@/components/ui/tracking/TrackingWrapper";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";

export const metadata = getSEOTags({
  title: `Real-Time Order Tracking with ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: `Track your shipments effortlessly with Orio. Follow your orders in real-time and get updates on delivery status and progress.`,
  canonicalUrlRelative: "/tracking",
  keywords: keywords.tracking,
  openGraph:
  {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/aboutus-page.jpg`
      }
    ]
  },
});

const Track = () => {
  return (
    <>
      <TrackingWrapper />
    </>
  );
};

export default Track;
