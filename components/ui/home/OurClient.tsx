"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    label: "yoca",
    link: "/images/png/yoca.png",
    varient: false,
  },
  {
    id: 2,
    label: "meriPharmacy",
    link: "/images/png/meriPharmacy.png",
    varient: false,
  },
  {
    id: 3,
    label: "chitralHouse",
    link: "/images/png/chitralHouse.png",
    varient: false,
  },
  {
    id: 4,
    label: "chikoo",
    link: "/images/png/chikoo.png",
    varient: false,
  },
  {
    id: 5,
    label: "menigma",
    link: "/images/png/menigma.png",
    varient: true,
  },
  {
    id: 6,
    label: "acocoCurls",
    link: "/images/png/cocoCurls.png",
    varient: true,
  },
  {
    id: 7,
    label: "scentsNsecrets",
    link: "/images/png/scentsNsecrets.png",
    varient: false,
  },
  {
    id: 8,
    label: "hinamirza",
    link: "/images/png/hinamirza.png",
    varient: false,
  },
  {
    id: 9,
    label: "brandsKahani",
    link: "/images/png/brandsKahani.png",
    varient: false,
  },
  {
    id: 10,
    label: "shahChemicals",
    link: "/images/png/elva.png",
    varient: false,
  },
  {
    id: 11,
    label: "brandverse",
    link: "/images/png/brandverse.png",
    varient: false,
  },
  {
    id: 12,
    label: "cleanXmax",
    link: "/images/png/cleanXmax.png",
    varient: false,
  },
  {
    id: 13,
    label: "shahChemicals",
    link: "/images/png/shahChemicals.png",
    varient: true,
  },
  {
    id: 14,
    label: "sellerlogs",
    link: "/images/png/sellerlogs.png",
    varient: false,
  },
  {
    id: 15,
    label: "mjafferjees",
    link: "/images/png/mjafferjees.png",
    varient: false,
  },
  {
    id: 16,
    label: "aliflaameem",
    link: "/images/png/aliflaameem.png",
    varient: false,
  },
  {
    id: 17,
    label: "nova",
    link: "/images/png/nova.png",
    varient: false,
  },
  {
    id: 18,
    label: "xaxo",
    link: "/images/png/xaxo.png",
    varient: false,
  },
  {
    id: 19,
    label: "3s-car-care",
    link: "/images/png/3s-car-care.png",
    varient: false,
  },
  {
    id: 20,
    label: "mova",
    link: "/images/png/mova.png",
    varient: true,
  },
];

const OurClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getBackgroundColor = (id: number) => {
    switch (id) {
      case 5:
        return "bg-[#C0E3D3]";
      case 6:
        return "bg-[#E0CDFF]";
      case 13:
        return "bg-[#FFF98A]";
      case 20:
        return "bg-[#e5f1ff]";
      // case 19:
      //   return "bg-[#ebebf7]";
      default:
        return "bg-[#F7F7F7]";
    }
  };

  const isExtraSmall = useMediaQuery("(max-width: 575px)");

  if (!isClient) {
    return null;
  }

  const animationVariantsOne = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const animationVariantsTwo = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="sm:container lg:pt-28 pt-20 overflow-x-hidden space-y-8">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <motion.h6
            className="text-midnight font-bold sm:text-[45px] sm:leading-none text-3xl sm:tracking-wide"
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
          >
            Our Clients
          </motion.h6>
        </div>
        <div className="sm:max-w-[860px] max-w-[315px]">
          <motion.p
            className="text-charcoal font-normal sm:text-base text-sm"
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Empowering success through trusted partnerships
          </motion.p>
        </div>
      </div>
      {isExtraSmall ? (
        <Swiper
          loop={true}
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
        >
          {links.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-[200px] mx-2 rounded-2xl p-3 flex justify-center items-center transition-all duration-300 bg-[#F6F6F6]`}
              >
                <Image
                  src={item.link}
                  width={100}
                  height={100}
                  alt={item.label}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="sm:grid lg:grid-cols-6 sm:grid-cols-2 gap-4">
          {links.map((item: { link: string; label: string; varient?: boolean; id: number }, index: number) => (
            <div
              key={index}
              className={`h-[200px] rounded-2xl p-3 flex justify-center items-center transition-all duration-300 ${item.varient
                ? `${getBackgroundColor(item.id)} col-span-2`
                : "bg-[#F7F7F7]"
                }`}
            >
              <Image
                src={item.link}
                width={100}
                height={100}
                alt={item.label}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OurClient;
