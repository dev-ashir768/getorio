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
    <section className="bg-[#E6F1FF] w-full lg:h-full sm:h-auto">
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
                Turning Storage Challenges into Opportunities
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
                Sign up with Orio to reduce E-Commerce stress.
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
          <div className="lg:w-1/2 w-full relative">
            <div className="w-max absolute xxl:left-[6%] lg:-left-[3%] md:left-[13%] sm:left-[5%] lg:top-[20%] md:top-[18%] sm:top-[20%] top-[50%] sm:translate-y-0 translate-y-[-50%]">
              <Image
                src="/images/gif/wmsTour.gif"
                className="sm:rounded-2xl rounded-xl xl:max-w-[170px] sm:max-w-[135px] max-w-[103px] xl:max-h-[225px] sm:max-h-[190px] max-h-[130px]"
                width={270}
                height={270}
                alt="wmsTour"
                unoptimized
              />
            </div>
            <div className="bg-[#FF731C] sm:rounded-3xl rounded-xl w-max lg:ml-auto sm:mx-auto ml-auto lg:mx-0 pt-24 overflow-hidden xl:max-w-[522px] sm:max-w-[422px] max-w-[275px] elementTwentyEight bg-no-repeat bg-right-top bg-[length:80%_70%] ">
              <motion.div
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsTwo}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Image
                  src="/images/png/wmsLaptop.png"
                  className="mx-auto "
                  width={522}
                  height={478}
                  alt="wmsLaptop"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
