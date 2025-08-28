export const dynamic = "force-dynamic";
import BlogListing from "@/components/ui/blog/BlogListing";
import Link from "next/link";
import { getSEOTags } from "@/seo/getSeoTags";
import { keywords } from "@/seo/keywords";
import axios from "axios";

export const metadata = getSEOTags({
  title: `Articles & Insights - Stay Updated with ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description: `Read ${process.env.NEXT_PUBLIC_APP_NAME}'s latest articles and insights. Learn from industry experts, discover trends, and get tips to improve your business and stay ahead of the competition.`,
  canonicalUrlRelative: "/blog",
  keywords: keywords.generic,
  openGraph: {
    images: [
      {
        url: `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/images/jpg/blog-page.jpg`
      }
    ]
  },
});

const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      "https://backoffice.orio.digital/api/blogs/list.php"
    );
    return response.data.payload;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

const page = async () => {
  const blogListing = await fetchBlogs();

  if (!blogListing || blogListing.length === 0) {
    return (
      <section className="h-screen flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
          OOPS! No Blog Available
        </h1>
        <p>
          Go back to{" "}
          <Link href="/" className="text-azure-100 underline underline-offset-2">
            Home
          </Link>
        </p>
      </section>
    );
  }

  return <BlogListing blogListing={blogListing} />;
};

export default page;
