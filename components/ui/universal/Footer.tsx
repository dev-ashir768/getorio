"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type LinksType = {
  id: number;
  label: string;
  link: string;
  socialLink: string;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "facebook",
    link: "/images/svg/facebookIcon.svg",
    socialLink: "https://www.facebook.com/p/ORIO-100083173600026",
  },
  {
    id: 2,
    label: "youtube",
    link: "/images/svg/youtubeIcon.svg",
    socialLink: "https://www.youtube.com/@oriotech-uv4xp",
  },
  {
    id: 3,
    label: "instagram",
    link: "/images/svg/instagramIcon.svg",
    socialLink: "https://www.instagram.com/orio.tech/",
  },
  {
    id: 4,
    label: "linkedin",
    link: "/images/svg/linkedinIcon.svg",
    socialLink: "https://www.linkedin.com/company/orio.tech/",
  },
  {
    id: 5,
    label: "twitter",
    link: "/images/svg/twitterIcon.svg",
    socialLink: "https://x.com/orio97583864_2",
  },
  {
    id: 6,
    label: "whatsapp",
    link: "/images/svg/whatsappIcon.svg",
    socialLink: "https://wa.me/923180268894?text=Hello! I have a Question",
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#01336F] to-azure-100 w-full overflow-x-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="sm:py-14 sm:pt-12 sm:pb-4 pt-4 pb-4 animate-marquee whitespace-nowrap">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className="mx-3 sm:text-7xl text-5xl sm:leading-[75px] leading-[68px] text-white font-bold tracking-wide"
              >
                Orio Technologies.
              </span>
            ))}
        </div>
        <div className="absolute top-0 sm:pt-12 sm:pb-4 pt-4 pb-4 animate-marquee2 whitespace-nowrap">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                className="mx-3 sm:text-7xl text-5xl sm:leading-[75px] leading-[68px] text-white font-bold tracking-wide"
              >
                Orio Technologies.
              </span>
            ))}
        </div>
      </div>
      <div className="container w-full flex lg:flex-row flex-col gap-10">
        <div className="xxl:w-[40%] lg:w-[45%] w-full space-y-8 flex flex-col justify-around">
          <div className="space-y-6">
            <div className="max-w-[470px]">
              <h6 className="text-white font-semibold xl:text-4xl lg:text-[32px] sm:text-4xl text-[25px] xl:leading-[50px] lg:leading-[42px] sm:leading-[50px] leading-[35px]">
                Simplifying E-Commerce Fulfillment
              </h6>
            </div>
            <div className="sm:max-w-[470px] max-w-[310px]">
              <p className="text-white font-normal text-[15px] leading-[26px]">
                Orio provides plug & play integration and efficient solutions to
                streamline your e-commerce operations.
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-3">
              <h6 className="text-white font-semibold text-xl tracking-wide max-w-[274px] sm:max-w-[450px]">
                D-63/1, Block-4, Gulshan-e-Iqbal Karachi
              </h6>
              <h6 className="text-white font-semibold text-xl underline underline-offset-[5px] decoration-white tracking-wide">
                <a href="mailto:info@getorio.com">info@getorio.com</a>
              </h6>
              <h6 className="text-white font-semibold text-xl tracking-wide space-x-6">
                <a href="tel:02137293292">021-37293292</a>
                <a href="tel:923180268894">0318-0268894</a>
              </h6>
            </div>
            <div className="flex flex-row items-center gap-x-6">
              {links.map((item, index) => (
                <div key={index} className="max-w-[25px]">
                  <a href={item.socialLink} target="_blank">
                    <Image
                      src={item.link}
                      className="w-full"
                      width={15}
                      height={15}
                      alt={item.label}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-white font-normal text-sm text-opacity-85 underline underline-offset-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="terms-and-conditions"
                className="text-white font-normal text-sm text-opacity-85 underline underline-offset-2"
              >
                Terms & Conditions
              </Link>
            </div>
            <p className="text-white font-normal text-sm text-opacity-85">
              © {new Date().getFullYear()} Orio Technologies (Pvt.) Limited. All
              Right Reserved.
            </p>
          </div>
        </div>
        <div className="xxl:w-[60%] lg:w-[55%] w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/png/phoneMockup-3.png"
              width={900}
              height={900}
              alt="phoneMockup-3"
            />
          </motion.div>
        </div>
      </div>
      <div className="fixed bottom-8 right-6 z-30">
        <Link
          href="https://wa.me/923180268894?text=Hello! I have a Question"
          target="_blank"
        >
          <Image
            src="/images/gif/whatsapp.gif"
            className="sm:w-[70px] w-[50px]"
            width={100}
            height={100}
            alt="whatsapp"
            unoptimized
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
