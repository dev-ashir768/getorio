import type { Metadata } from "next";
import "@/app/globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { sora } from "@/app/fonts";
import Navbar from "@/components/ui/universal/Navbar";
import { renderSchemaTags } from "@/seo/getSeoTags";
import { fbPixelTag, getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";


export const metadata = getSEOTags({
  title: `Transform Your E-Commerce Store with ${process.env.NEXT_PUBLIC_APP_NAME}'s Plug & Play Fulfillment`,
  description: `Make your e-commerce store easy with ${process.env.NEXT_PUBLIC_APP_NAME}'s plug & play fulfillment. Fast, reliable delivery to help your business grow smoothly.`,
  canonicalUrlRelative: "/",
  keywords: keywords.generic,
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            {renderSchemaTags()}
            {fbPixelTag()}
          </>
        )}
      </head>
      {process.env.NODE_ENV === "production" && (<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />)}
      <body className={sora.className}>
        <NextTopLoader color="#0074FC" showSpinner={false} />
        <Toaster richColors position="bottom-right" />
        <Navbar />
        {children}
      </body>
      {process.env.NODE_ENV === "production" && (<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />)}
    </html>
  );
}
