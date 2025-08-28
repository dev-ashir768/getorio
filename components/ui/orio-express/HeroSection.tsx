"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pushToLogin } from "@/lib/PushToLogin";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section className="orioExpressBG bg-no-repeat bg-cover w-full lg:h-full sm:h-auto">
      <div className="lg:h-full sm:h-auto">
        <div className="container w-full h-full flex lg:flex-row flex-col justify-center lg:items-center lg:gap-y-0 gap-y-16 lg:pt-[68px] pt-[125px] pb-[78px] lg:pb-[0px] overflow-hidden">
          <div className="lg:w-1/2 w-full sm:space-y-6 space-y-5 overflow-hidden">
            <div className="lg:max-w-[600px] md:max-w-[440px] sm:max-w-[385px] max-w-[385px]">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5 }}
                className="text-midnight font-bold xl:text-[55px] lg:text-[50px] xl:leading-[60px] lg:leading-[55px] sm:text-4xl text-3xl leading-[40px] tracking-wide"
              >
                Your Premier 3PL Logistics Software
              </motion.h1>
            </div>
            <div className="xxl:max-w-[520px] xl:max-w-[450px] sm:max-w-[380px] max-w-[320px]">
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-charcoal font-medium sm:text-base text-[13px] leading-[20px]"
              >
                Orio Express provides all the tools you need to manage your
                logistics and courier business effectively.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="sm:w-max"
            >
              <Button
                onClick={pushToLogin}
                variant="default"
                size="lg"
                className="relative signup-btn"
              >
                Login
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Image
                src="/images/png/orioExpressLaptop.png"
                className="sm:ml-auto sm:mx-0 mx-auto"
                width={580}
                height={478}
                alt="orioExpressLaptop"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
