"use client";
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
    <section className="bg-[#000C19] w-full lg:h-full h-auto">
      <div className="lg:h-full h-auto">
        <div className="container w-full h-full flex lg:flex-row flex-col justify-center lg:items-center lg:gap-y-0 gap-y-16 lg:pt-[68px] pt-[125px]">
          <div className="lg:w-1/2 w-full space-y-6 overflow-x-hidden">
            <div className="lg:max-w-[600px] md:max-w-[440px] sm:max-w-[385px] max-w-[385px]">
              <motion.h1
                initial="hidden"
                animate="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.8 }}
                className="text-white font-bold xl:text-[55px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] sm:text-4xl text-3xl leading-[40px] tracking-wide"
              >
                Get Hassle-Free Shipping with Orio
              </motion.h1>
            </div>
            <div className="xxl:max-w-[594px] xl:max-w-[450px] sm:max-w-[380px] max-w-[300px]">
              <motion.p
                initial="hidden"
                animate="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white text-opacity-85 font-normal sm:text-base text-[13px] leading-[20px]"
              >
                Sign up today and enjoy managed shipping services with courier partners like Blue Ex, TCS, Leopards, and Trax. Get started now and make your logistics a ease!
              </motion.p>
            </div>
            <motion.div
              className="sm:w-max"
              initial="hidden"
              animate="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.8 }}
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
          <div className="lg:w-1/2 w-full flex sm:justify-end justify-center items-end h-full">
            <motion.div
              initial="hidden"
              animate="visible"

              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Image
                src="/images/png/createBooking.png"
                className="xxl:max-w-[560px] sm:max-w-[430px] max-w-[252px]"
                width={560}
                height={500}
                alt="managed-shipping"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
