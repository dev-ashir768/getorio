"use client";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { pushToLogin } from "@/lib/PushToLogin";
import { motion } from "framer-motion";
import Link from "next/link";

const animationVariantsOne = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const OptimizationSection = () => {
  return (
    <section className="container w-full overflow-x-hidden">
      <div className="bg-[#000C19] elementOne bg-no-repeat lg:bg-left bg-left-bottom xl:bg-[length:44%_auto] lg:bg-[length:48%_auto] sm:bg-[length:80%_auto] bg-[length:100%_auto] rounded-3xl w-full flex lg:flex-row flex-col items-center xl:gap-8 gap-12 py-16 xl:px-20 md:px-16 sm:px-[40px] px-5">
        <div className="lg:w-[45%] w-full lg:order-first order-last">
          <div className="radialWavesBG bg-no-repeat bg-cover rounded-3xl xxl:max-w-[420px] max-w-[380px] w-full mx-auto py-14">
            <motion.div
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsThree}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/png/mobile_illustration-1.png"
                className="mx-auto sm:w-[320px] w-[280px]"
                width={320}
                height={320}
                alt="mobile_illustration-1"
              />
            </motion.div>
          </div>
        </div>
        <div className="lg:w-[55%] w-full space-y-8 lg:order-last order-first">
          <div className="max-w-[550px] space-y-6">
            <motion.h6
              className="text-white font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Optimize your Orders, Inventory, and Costs
            </motion.h6>
            <motion.p
              className="text-white font-light text-[15px] leading-[26px]"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Easily manage your sales channels, products, and inventory with our order management system. Be ready for demand and improve your business operations. Schedule your demo today to see what Orio OMS can do for you.
            </motion.p>
          </div>
          <div className="sm:w-max w-full flex sm:flex-row flex-col items-center sm:space-x-6 space-y-6 sm:space-y-0">
            <motion.span
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full"
            >
              <Link href="/get-demo">
                <Button variant="default" size="lg" className="relative">
                  Get a Demo
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                </Button>
              </Link>
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="w-full"
            >
              <Button variant="outline" size="lg" className="signup-btn" onClick={pushToLogin}>
                Login              
              </Button>
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;
