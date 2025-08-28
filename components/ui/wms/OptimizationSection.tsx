"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { motion } from "framer-motion";

export type LinksType = {
  id: number;
  delay: number;
  rule: string;
};

const links: LinksType[] = [
  {
    id: 1,
    delay: 0.6,
    rule: "Track inventory in real-time for accurate stock management.",
  },
  {
    id: 2,
    delay: 0.8,
    rule: "Automate order fulfillment to improve efficiency.",
  },
  {
    id: 3,
    delay: 1,
    rule: "Minimize errors and reduce operational costs.",
  },
  {
    id: 4,
    delay: 1.2,
    rule: "Enhance customer satisfaction with faster and more reliable deliveries.",
  },
  {
    id: 5,
    delay: 1.4,
    rule: "Gain valuable insights with detailed reporting and analytics.",
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const OptimizationSection = () => {
  return (
    <section className="container md:pt-28 md:pb-14 pt-20 pb-10 space-y-8">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[1000px] max-w-[328px]">
          <motion.h6
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.5 }}
            className="text-midnight font-bold sm:text-5xl text-2xl sm:tracking-wide"
          >
            Improve Your Warehouse Efficiency with Orio WMS Solutions
          </motion.h6>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#CDD1EE] to-[#E8EAFF] rounded-3xl w-full flex lg:flex-row flex-col xl:gap-8 gap-12 py-16 xl:px-20 md:px-16 sm:px-[40px] px-5">
        <div className="xl:w-[67%] lg:w-[60%] w-full space-y-8">
          <div className="space-y-6">
            <motion.h6
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-midnight font-semibold sm:text-[22px] text-[20px] sm:leading-[32px] leading-[25px]"
            >
              Orio Warehouse Management System (WMS) offers a comprehensive
              solution to streamline and enhance your warehouse operations.
            </motion.h6>
            <ul className="space-y-3">
              {links.slice(0, 6).map((item, index) => (
                <motion.li
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="flex text-[15px] leading-[20px] text-charcoal"
                >
                  <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                  {item.rule}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="sm:w-max w-full"
            >
              <Link href="https://oms.getorio.com/register" target="_blank">
                <Button variant="default" size="lg" className="relative">
                  Sign up
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariantsThree}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="xl:w-[33%] lg:w-[40%] w-full"
        >
          <Image
            src="/images/png/optimizeWMS.png"
            className="mx-auto"
            width={528}
            height={547}
            alt="optimizeWMS"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizationSection;
