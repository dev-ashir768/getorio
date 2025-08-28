"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const pulseAnimation = {
  animate: {
    y: [0, -15, 0], // Moves up and down
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const MultiPlatforms = () => {
  return (
    <section className="container md:py-28 py-20 space-y-8">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[344px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            Multi-Platform Ready
          </h6>
        </div>
        <div className="sm:max-w-[790px] max-w-[345px]">
          <p className="text-charcoal font-normal sm:text-base text-sm">
            Orio Plugs into any webstore. You can use it with your Magento,
            Shopify or WooCommerce Store. You can also integrate the API into
            your custom website or store front.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 sm:gap-6 gap-3">
        <div className="flex lg:justify-end justify-center">
          <div className="flex flex-col justify-center items-center space-y-4 lg:pt-20 pt-10 lg:pr-6">
            <div className="bg-[#dadcdf] size-28 rounded-full flex justify-center items-center">
              <Image
                src="/images/svg/custom.svg"
                width={50}
                height={50}
                alt="custom"
              />
            </div>
            <div>
              <Image
                src="/images/png/customText.png"
                width={95}
                height={95}
                alt="custom"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="bg-[#e0ecc8] size-[135px] rounded-full flex justify-center items-center">
              <Image
                src="/images/svg/shopify.svg"
                width={60}
                height={60}
                alt="shopify"
              />
            </div>
            <div>
              <Image
                src="/images/png/shopifyText.png"
                width={95}
                height={95}
                alt="shopify"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center space-y-4 pt-16">
            <div className="bg-[#fcd1bd] size-36 rounded-full flex justify-center items-center">
              <Image
                src="/images/svg/magento.svg"
                width={75}
                height={75}
                alt="magento"
              />
            </div>
            <div>
              <Image
                src="/images/png/magentoText.png"
                width={95}
                height={95}
                alt="magentoText"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="bg-[#e2cfde] size-[118px] rounded-full flex justify-center items-center">
              <Image
                src="/images/svg/wooCommerce.svg"
                width={65}
                height={65}
                alt="wooCommerce"
              />
            </div>
            <div>
              <Image
                src="/images/png/commerceText.png"
                width={105}
                height={105}
                alt="commerceText"
              />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start sm:justify-center justify-end md:col-span-1 col-span-2">
          <div className="flex flex-col justify-center items-center space-y-4 lg:pt-20 md:pt-5 sm:pt-10 lg:pl-6 sm:pr-0 pr-6">
            <div className="bg-[#e3f5f9] size-36 rounded-full flex justify-center items-center">
              <Image
                src="/images/svg/prestaShop.svg"
                width={65}
                height={65}
                alt="prestaShop"
              />
            </div>
            <div>
              <Image
                src="/images/png/prestaShopText.png"
                width={115}
                height={115}
                alt="prestaShopText"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiPlatforms;
