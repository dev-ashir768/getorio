"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

const links = [
  {
    id: 1,
    ladel: "oex-1",
    link: "/images/png/oex-1.png",
  },
  {
    id: 2,
    ladel: "oex-2",
    link: "/images/png/oex-2.png",
  },
  {
    id: 3,
    ladel: "oex-3",
    link: "/images/png/oex-3.png",
  },
  {
    id: 4,
    ladel: "oex-4",
    link: "/images/png/oex-4.png",
  },
  {
    id: 5,
    ladel: "oex-5",
    link: "/images/png/oex-5.png",
  },
  {
    id: 6,
    ladel: "oex-6",
    link: "/images/png/oex-6.png",
  },
  {
    id: 7,
    ladel: "oex-7",
    link: "/images/png/oex-7.png",
  },
];

const OrioExpressCarousel = () => {
  return (
    <section className="bg-[#E6F1FF]">
      <div className="container w-full pt-12">
        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-end space-y-4 lg:space-y-0">
          <div>
            <h6 className="text-midnight font-bold xl:text-5xl sm:text-4xl text-3xl">
              Download Express App
            </h6>
          </div>
          <div className="flex gap-x-3">
            <div className="bg-black rounded-lg sm:py-2 py-1 sm:px-3 px-2 flex flex-row justify-start items-center sm:gap-x-3 gap-2">
              <Image
                src="/images/png/playStore.png"
                className="sm:w-[35px] w-[22px]"
                width={35}
                height={39}
                alt="playStore"
              />
              <div className="flex flex-col">
                <p className="uppercase text-white text-[11px] leading-[16px] font-light">
                  Get it on
                </p>
                <p className="capitalize text-white sm:text-lg text-base sm:leading-[23px] font-medium sm:tracking-wide tracking-normal">
                  google play
                </p>
              </div>
            </div>
            <div className="bg-black rounded-lg sm:py-2 py-1 sm:px-3 px-2 flex flex-row justify-start items-center sm:gap-x-3 gap-2">
              <Image
                src="/images/png/apple.png"
                className="sm:w-[35px] w-[23px]"
                width={35}
                height={39}
                alt="apple"
              />
              <div className="flex flex-col">
                <p className="text-white text-[11px] leading-[16px] font-normal">
                  Download on the
                </p>
                <p className="capitalize text-white sm:text-lg text-base sm:leading-[25px] font-medium sm:tracking-wide tracking-normal">
                  app store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:pt-28 pt-16 pb-28 relative sm:h-[700px] w-full overflow-x-hidden">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
        >
          {links.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="sm:w-[192px] sm:h-[420px] w-[135px] h-[299px] mx-auto">
                <Image
                  src={item.link}
                  className="rounded-2xl sm:w-[192px] sm:h-[420px] w-[135px] h-[299px]"
                  width={190}
                  height={425}
                  alt={item.ladel}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          src="/images/png/mobileHand.png"
          className="pointer-events-none absolute left-[50%] bottom-0 -translate-x-[33%] z-10 max-w-[318px] sm:max-w-[453px]"
          width={453}
          height={460}
          alt="mobileHand"
        />
      </div>
    </section>
  );
};

export default OrioExpressCarousel;
