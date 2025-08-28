export const dynamic = "force-dynamic";
import BlogDetails from "@/components/ui/blog/BlogDetails";
import axios from "axios";
import React from "react";

async function fetchBlogs(slug: string) {
  try {
    const response = await axios.post(
      "https://backoffice.orio.digital/api/blogs/details.php",
      {
        slug: slug,
      }
    );
    return response.data.payload;
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogDetails = await fetchBlogs(params.slug);
  if (blogDetails && blogDetails.meta_data) {
    return {
      title:
        blogDetails.meta_data.title ||
        "Articles & Insights - Stay Updated with Orio",
      description:
        blogDetails.meta_data.description ||
        "Read Orio's latest articles and insights. Learn from industry experts, discover trends, and get tips to improve your business and stay ahead of the competition.",
      openGraph: {
        title:
          blogDetails.meta_data.openGraph.title ||
          "Articles & Insights - Stay Updated with Orio",
        description:
          blogDetails.meta_data.openGraph.description ||
          "Read Orio's latest articles and insights. Learn from industry experts, discover trends, and get tips to improve your business and stay ahead of the competition.",
        url: `https://getorio.com/blogs/${blogDetails.slug}`,
        images: [
          {
            url: "https://getorio.com/images/svg/logo.svg",
            width: 110,
            height: 38,
            alt: "getorio",
          },
        ],
        siteName: "getorio",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title:
          blogDetails.meta_data.twitter.title ||
          "Blog | Latest Insights from Orio Technologies",
        description:
          blogDetails.meta_data.twitter.description ||
          "Explore the latest blog posts from Orio Technologies, covering trends, tips, and innovations in the tech industry. Stay ahead with our expert content.",
        images: [
          {
            url: "https://getorio.com/images/svg/logo.svg",
            width: 110,
            height: 38,
            alt: "getorio",
          },
        ],
        site: "sales@getorio.com",
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } else if (blogDetails.meta_data == null) {
    return {
      title: "Blog | Stay Updated with the Latest from Orio Technologies",
      description:
        "Discover the latest news, insights, and updates from Orio Technologies. Read our blog to stay informed about technology trends and company innovations.",
    };
  }

  return {
    title: "Blog not found",
    description: "This blog post does not exist.",
  };
}

const page = async ({ params }: { params: { slug: string } }) => {
  const blogDetails = await fetchBlogs(params.slug);
  return (
    <>
      <BlogDetails blogDetails={blogDetails} />
    </>
  );
};

export default page;
