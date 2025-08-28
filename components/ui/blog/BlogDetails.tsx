"use client";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import { useEffect } from "react";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export interface BlogDetailsTypes {
  blogDetails: {
    id: string;
    slug: string;
    author: string;
    title: string;
    short_content: string;
    detailed_content: string;
    featured_image: string;
    created_at: string;
    linkedin_url: string;
    meta_data: {
      title: string;
      description: string;
      openGraph: {
        title: string;
        description: string;
      };
      twitter: {
        title: string;
        description: string;
      };
    };
  };
}

const BlogDetails: React.FC<BlogDetailsTypes> = ({ blogDetails }) => {
  if (!blogDetails) {
    return (
      <section className="h-screen flex flex-col justify-center items-center gap-y-6">
        <h1 className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7">
          OOPS! No Blog Avaliable
        </h1>
        <p>
          Go back to{" "}
          <Link
            href="/"
            className="text-azure-100 underline underline-offset-2"
          >
            Home
          </Link>
        </p>
      </section>
    );
  }
  return (
    <section className="container lg:pt-40 pb-36 pt-28">
      <div className="max-w-[600px] mx-auto">
        <div className="mx-auto max-w-[600px] mb-10">
          <h1 className="font-semibold md:text-5xl md:leading-[55px] sm:text-4xl text-3xl text-black text-center mb-5">
            {blogDetails.title}
          </h1>
          <p className="text-[#11181f] font-normal text-[13px] leading-[16px] text-center">
            Published by{" "}
            <Link
              className="underline underline-offset-[4px] transition-all duration-300 capitalize"
              href={blogDetails.linkedin_url}
            >
              {blogDetails.author}
            </Link>{" "}
            on {blogDetails.created_at}
          </p>
        </div>
        <div className="h-[580px] relative w-full rounded-2xl overflow-hidden mb-10">
          <Image
            src={`https://backoffice.orio.digital/assets/uploads/${blogDetails.featured_image}`}
            className="object-cover w-full h-full"
            alt={blogDetails.featured_image}
            quality={100}
            fill
          />
        </div>
        <div className="mb-5">
          <div
            className="text-start break-words mb-3"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blogDetails.short_content),
            }}
          ></div>
          <div
            className="text-start break-words"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blogDetails.detailed_content),
            }}
          ></div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div>
            <p className="text-charcoal font-normal text-[15px] leading-[23px] text-start">
              Previous Post
            </p>
            <Link
              href="#"
              className="text-charcoal font-normal text-[15px] leading-[23px] underline underline-offset-4 hover:no-underline transition-all duration-300"
            >
              Inventory System
            </Link>
          </div>
          <div>
            <p className="text-charcoal font-normal text-[15px] leading-[23px] text-end">
              Next Post
            </p>
            <Link
              href="#"
              className="text-charcoal font-normal text-[15px] leading-[23px] underline underline-offset-4 hover:no-underline transition-all duration-300"
            >
              Cash Management
            </Link>
          </div>
        </div> */}
        <div className="flex gap-4 justify-start">
          <FacebookShareButton
            url={`https://getorio.com/blog/${blogDetails.slug}`}
          >
            <FacebookMessengerIcon className="w-[35px] h-[35px] rounded-full" />
          </FacebookShareButton>

          <LinkedinShareButton
            url={`https://getorio.com/blog/${blogDetails.slug}`}
          >
            <LinkedinIcon className="w-[35px] h-[35px] rounded-full" />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`https://getorio.com/blog/${blogDetails.slug}`}
          >
            <WhatsappIcon className="w-[35px] h-[35px] rounded-full" />
          </WhatsappShareButton>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
