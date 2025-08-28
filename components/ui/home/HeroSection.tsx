"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { pushToLogin } from "@/lib/PushToLogin";
import { motion } from "framer-motion";

export type LinksType = {
  id: number;
  label: string;
  delay: number;
  link: string;
};
const links: LinksType[] = [
  {
    id: 1,
    label: "Kcci",
    delay: 0.8,
    link: "/images/png/kcci-bnw.png",
  },
  {
    id: 2,
    label: "fbr",
    delay: 1,
    link: "/images/png/fbr-bnw.png",
  },
  {
    id: 3,
    label: "pseb",
    delay: 1.2,
    link: "/images/png/pseb-bnw.png",
  },
  {
    id: 4,
    label: "secp",
    delay: 1.4,
    link: "/images/png/secp-bnw.png",
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b xxl:h-[865px] xl:h-[865px] lg:h-[865px] h-full from-[#e5f1ff] via-[#e5f1ff] to-transparent -z-[1]">
        <div
          className="absolute top-0 right-0 w-full xxl:h-[865px] xl:h-[865px] lg:h-[865px] h-full bg-no-repeat xxl:bg-[length:50%_auto]
                xl:bg-[length:55%_auto] lg:bg-[length:57%_auto] md:bg-[length:50%_auto] sm:bg-[length:68%_auto] bg-[length:86%_auto] bg-right-top z-0 heroBanner"
        ></div>
      </div>
      <section className="lg:pt-[68px] pt-[78px] h-full overflow-x-hidden">
        <div className="container h-full">
          <div className="lg:w-[50%] w-full h-full flex flex-col md:justify-center justify-end sm:gap-10 gap-6 ">
            <div className="lg:space-y-4 space-y-2">
              <div className="lg:max-w-sm ">
                <motion.h1
                  className="text-midnight font-bold lg:text-6xl sm:text-4xl text-[26px] tracking-wide lg:leading-[66px] sm:leading-[40px] leading-[32px]"
                  initial="hidden"
                  animate="visible"
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5 }}
                >
                  Plug & Play Fulfillment
                </motion.h1>
              </div>
              <div className="lg:max-w-sm">
                <motion.p
                  className="text-midnight font-semibold lg:text-[22px] sm:text-2xl text-xl lg:leading-7"
                  initial="hidden"
                  animate="visible"
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  For your E-Commerce Store
                </motion.p>
              </div>
              <div className="xl:max-w-[609px] sm:max-w-[380px] max-w-[320px] ">
                <motion.p
                  className="text-charcoal font-medium sm:text-base text-[13px] leading-[20px]"
                  initial="hidden"
                  animate="visible"
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Enhance your delivery ratio, minimize return shipments, manage several Shopify stores, implement an omnichannel model, lower inventory holding costs, establish a microstore, and ship using multiple couriers.
                </motion.p>
              </div>
            </div>
            <motion.div
              className="sm:w-max w-full"
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={pushToLogin}
                size="lg"
                className="relative signup-btn"
              >
                Login
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
              </Button>
            </motion.div>
            <div className="grid grid-cols-4 gap-2 sm:w-max w-full">
              {links.slice(0, 4).map((item, index) => (
                <motion.figure
                  key={index}
                  className="flex justify-center items-center rounded-2xl bg-[#f2f8ff] max-w-[100px] max-h-[100px] p-[10px]"
                  initial="hidden"
                  whileInView="visible"
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.5, delay: item.delay }}
                >
                  <Image
                    className="w-[82px]"
                    src={item.link}
                    width={82}
                    height={82}
                    alt={item.label}
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
