"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const MultiPlatform = () => {
  return (
    <section className="container w-full flex lg:flex-row flex-col lg:gap-x-4 gap-y-12 lg:gap-y-0 overflow-x-hidden">
      <div className="xl:w-[44%] lg:w-[40%] w-full lg:h-[650px]">
        <div className="bg-azure-100 rounded-2xl space-y-6 h-full flex flex-col justify-between overflow-hidden">
          <div className="lg:px-8 md:px-16 sm:px-[40px] px-5 py-10 space-y-4">
            <div className="max-w-[260px]">
              <motion.h6
                className="text-white font-bold text-4xl"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.8 }}
              >
                Order Management System
              </motion.h6>
            </div>
            <div className="max-w-lg">
              <motion.p
                className="text-white font-medium text-sm leading-[23px]"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Easily manage your online store with simple fulfillment and one-click setup for all popular platforms.
              </motion.p>
            </div>
            <motion.div
              className="sm:w-max w-full"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="/order-management-system">
                <Button variant="secondary" size="lg" className="relative hover:bg-[#013657]">
                  Read more
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsThree}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/images/png/laptopMockup-1.png"
              className="sm:w-[480px] w-[288px]"
              width={480}
              height={480}
              alt="order management system laptop mockup"
            />
          </motion.div>
        </div>
      </div>
      <div className="xl:w-[28%] lg:w-[30%] w-full lg:h-[650px]">
        <div className="bg-[#D7DCFA] rounded-2xl space-y-6 h-full flex flex-col lg:px-8 md:px-16 sm:px-[40px] px-5 py-10 bg-no-repeat lg:bg-center bg-right radialDotsBG overflow-hidden">
          <motion.div
            className="mx-auto"
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsTwo}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/jpg/screenMockup-2.jpg"
              className="rounded-2xl"
              width={300}
              height={280}
              alt="warehouse management system screen mockup"
            />
          </motion.div>
          <div className="space-y-4 h-full flex flex-col justify-center">
            <div className="max-w-[270px]">
              <motion.h6
                className="text-midnight font-bold text-2xl"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Warehouse Management System
              </motion.h6>
            </div>
            <div className="max-w-[305px]">
              <motion.p
                className="text-charcoal font-medium text-sm leading-[23px]"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Improve your inventory and fulfillment processes with integration designed for efficient e-commerce operations.
              </motion.p>
            </div>
            <motion.div
              className="sm:w-max w-full"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="/warehouse-management-system">
                <Button variant="default" size="lg" className="relative">
                  Read more
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="xl:w-[28%] lg:w-[30%] w-full lg:h-[650px]">
        <div className="bg-[#F6F6F6] rounded-2xl space-y-6 lg:px-8 md:px-16 sm:px-[40px] px-5 h-full flex flex-col justify-between bg-no-repeat bg-right-top lg:bg-[length:80%_45%] bg-[length:40%_40%] dobutBG overflow-hidden">
          <div className="space-y-4 py-10">
            <div className="max-w-[270px]">
              <motion.h6
                className="text-midnight font-bold text-2xl"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.8 }}
              >
                Orio Express
              </motion.h6>
            </div>
            <div className="max-w-[290px]">
              <motion.p
                className="text-charcoal font-medium text-sm leading-[23px]"
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Optimize your delivery services with Orio Express. Achieve smooth courier integration and improved efficiency for all your delivery operation requirements.
              </motion.p>
            </div>
            <motion.div
              className="sm:w-max w-full"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="/orio-express">
                <Button variant="default" size="lg" className="relative">
                  Read more
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="mx-auto"
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsThree}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/images/png/laptopMockup-2.png"
              width={328}
              height={328}
              alt="orio express laptop mockup"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiPlatform;
