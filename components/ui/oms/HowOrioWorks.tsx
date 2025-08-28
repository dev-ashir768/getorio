"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },

};

const animationVariantsTwo = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HowOrioWorks = () => {
  return (
    <section className="container md:py-28 py-20 space-y-8">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            How Does it Work?
          </h6>
        </div>
        <div className="sm:max-w-[600px] max-w-[345px]">
          <p className="text-charcoal font-normal sm:text-base text-sm">
            Orio allows you to connect your sales channels to multiple shipping
            and Fulfillment options.
          </p>
        </div>
      </div>
      <div className="bg-[#E6F1FF] rounded-3xl">
        <div className="xl:px-24 sm:px-12 px-5 lg:py-20 py-16 sm:space-y-16 space-y-14">
          <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
            <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
              <div className="space-y-4">
                <div className="lg:max-w-[470px] max-w-[400px]">
                  <motion.h6
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.8 }}
                    className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                  >
                    Channels
                  </motion.h6>
                </div>
                <div className="max-w-[470px]">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-charcoal font-normal text-[16px] leading-[26px]"
                  >
                    Orio enables you to link your sales channels with various shipping and fulfillment solutions. Orio provides the capability to connect your sales channels to a range of shipping and fulfillment options.
                  </motion.p>
                </div>
                <div>
                  <ul className="xl:space-y-3 space-y-2 max-w-[332px]">
                    <motion.li
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                    >
                      <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                      Online Order Form
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                    >
                      <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                      Contact Center
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                    >
                      <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                      Campaign Microstore
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                    >
                      <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                      WhatsApp Chatbot
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="lg:basis-1/2 basis-full order-last lg:order-first"
            >
              <Image
                src="/images/png/channels.png"
                className="lg:ml-auto lg:mx-0 mx-auto"
                width={380}
                height={547}
                alt="channels"
              />
            </motion.div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
            <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
              <div className="space-y-6">
                <div className="lg:max-w-[560px] max-w-[420px]">
                  <motion.h6
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                  >
                    Shipping Options
                  </motion.h6>
                </div>
                <div className="max-w-[490px]">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-charcoal font-normal text-[16px] leading-[26px]"
                  >
                    This integration helps you manage your logistics operations from one platform. By connecting different couriers, you can improve your shipping processes. This will reduce delivery times and boost overall efficiency. Orio&apos;s flexible shipping solutions meet various business needs. They offer real-time visibility and control over your shipments.
                  </motion.p>
                </div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsTwo}
              transition={{ duration: 0.8 }}
              className="lg:basis-1/2 basis-full order-last lg:order-first"
            >
              <Image
                src="/images/png/shippingOptions.png"
                className="lg:mr-auto lg:mx-0 mx-auto"
                width={400}
                height={547}
                alt="mobile_illustration-1"
              />
            </motion.div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
            <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
              <div className="space-y-4">
                <div className="lg:max-w-[470px] max-w-[400px]">
                  <motion.h6
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.8 }}
                    className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                  >
                    Fulfillment Option
                  </motion.h6>
                </div>
                <div className="max-w-[500px]">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-charcoal font-normal text-[16px] leading-[26px]"
                  >
                   Orio lets you connect your sales channels to different fulfillment options, like various warehouses. By using multiple fulfillment channels, Orio makes sure your inventory is well-placed and ready to ship.
                  </motion.p>
                </div>
                <ul className="xl:space-y-3 space-y-2 max-w-[332px]">
                  <motion.li
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    Warehouse
                  </motion.li>
                  <motion.li
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex xl:text-[16px] text-sm xl:leading-[22px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    Retail Store
                  </motion.li>
                </ul>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1 }}
              className="lg:basis-1/2 basis-full order-last lg:order-first"
            >
              <Image
                src="/images/png/fulfillmentOptions.png"
                className="lg:ml-auto lg:mx-0 mx-auto"
                width={380}
                height={547}
                alt="fulfillmentOptions"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowOrioWorks;
