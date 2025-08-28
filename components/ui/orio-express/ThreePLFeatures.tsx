"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

export type LinksType = {
  id: number;
  delay: number;
  rule: string;
};

const links: LinksType[] = [
  {
    id: 1,
    delay: 1,
    rule: "Integrate with major courier services for hassle-free shipping.",
  },
  {
    id: 2,
    delay: 1.2,
    rule: "Automate rules for assigning  couriers for faster deliveries.",
  },
  {
    id: 3,
    delay: 1.4,
    rule: "Monitor shipments in real-time for improved tracking",
  },
  {
    id: 4,
    delay: 1.6,
    rule: "Ensure compliance with delivery regulations.",
  },
  {
    id: 5,
    delay: 0.6,
    rule: "Manage supplier relationships and track deliveries.",
  },
  {
    id: 6,
    delay: 0.8,
    rule: "Coordinate multi-platform operations for better efficiency.",
  },
  {
    id: 7,
    delay: 1,
    rule: "Access comprehensive analytics for strategic decision-making.",
  },
];

const ThreePLFeatures = () => {
  return (
    <section className="relative bg-no-repeat">
      <div className="container">
        <div className="flex lg:flex-row flex-col items-center w-full md:py-28 py-20 gap-8">
          <div className="lg:basis-1/2 basis-[100%] space-y-6 lg:order-first order-last">
            <div className="flex items-center lg:justify-start justify-center gap-5">
              <div className="absolute left-0 lg:top-[13%] sm:top-[31%] top-[35%] -z-10">
                <Image
                  src="/images/svg/elementThirtySix.svg"
                  className="sm:w-[190px] w-[150px]"
                  width={190}
                  height={190}
                  alt="elementThirtySix"
                />
              </div>
              <div className="bg-gradient-to-br from-[#004596] to-[#0074FC] sm:rounded-3xl rounded-xl overflow-hidden sm:p-8 p-3 flex justify-center items-center sm:h-[372px] h-[250px] sm:w-[264px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/png/3pl_operations_laptop.png"
                    width={200}
                    height={250}
                    alt="3pl_operations_laptop"
                  />
                </motion.div>
              </div>
              <div className="bg-[#E6F1FF] sm:rounded-3xl rounded-xl overflow-hidden sm:p-4 p-3 sm:h-[272px] h-[210px] flex justify-center items-center sm:w-[202px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src="/images/png/3pl_operations.png"
                    width={170}
                    height={170}
                    alt="3pl_operations"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2 basis-[100%] space-y-5 order-first lg:order-last">
            <div className="xl:max-w-[580px] max-w-[400px] space-y-6">
              <motion.h6
                initial="hidden"
                whileInView="visible"
                
                variants={animationVariantsOne}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-midnight font-bold lg:text-5xl lg:leading-[55px] text-4xl"
              >
                Simplify Your 3PL Operations with Orio Express
              </motion.h6>
              <motion.p
                initial="hidden"
                whileInView="visible"
                
                variants={animationVariantsOne}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-midnight font-medium text-base"
              >
                Achieve seamless third-party logistics management with Orio
                Express
              </motion.p>
            </div>
            <div className="xxl:max-w-[540px] xl:max-w-[500px] w-full">
              <ul className="space-y-3">
                {links.slice(0, 4).map((item, index) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsOne}
                    transition={{ duration: 0.6, delay: item.delay }}
                    key={index}
                    className="flex text-[15px] leading-[20px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    {item.rule}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center w-full gap-8">
          <div className="lg:basis-1/2 basis-[100%] space-y-6 order-last">
            <div className="flex items-center lg:justify-end justify-center gap-5">
              <div className="bg-[#E6F1FF] sm:rounded-3xl rounded-xl overflow-hidden sm:p-4 p-3 sm:h-[272px] h-[210px] flex justify-center items-center sm:w-[202px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Image
                    src="/images/png/3pl_strength.png"
                    width={150}
                    height={150}
                    alt="3pl_strength"
                  />
                </motion.div>
              </div>
              <div className="bg-gradient-to-br from-[#9ea7ed] to-[#6975e6] sm:rounded-3xl rounded-xl overflow-hidden sm:p-4 p-3 flex justify-center items-center sm:h-[372px] h-[250px] sm:w-[264px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsTwo}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <Image
                    src="/images/png/3pl_strength_service.png"
                    width={250}
                    height={250}
                    alt="3pl_strength_service"
                  />
                </motion.div>
              </div>
              <div className="absolute right-0 lg:top-[68%] top-[82%] -z-10">
                <Image
                  src="/images/svg/elementThirtySeven.svg"
                  className="w-[190px]"
                  width={190}
                  height={190}
                  alt="elementThirtySix"
                />
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2 basis-[100%] space-y-5 lg:order-first">
            <div className="xl:max-w-[580px] max-w-[400px] space-y-6">
              <motion.h6
                initial="hidden"
                whileInView="visible"
                
                variants={animationVariantsOne}
                transition={{ duration: 0.6 }}
                className="text-midnight font-bold lg:text-5xl lg:leading-[55px] text-4xl"
              >
                Strengthen Your 3PL Services with Orio Express
              </motion.h6>
              <motion.p
                initial="hidden"
                whileInView="visible"
                
                variants={animationVariantsOne}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-midnight font-medium text-base"
              >
                Orio Express is your partner in optimizing third-party logistics
                management.
              </motion.p>
            </div>
            <div className="xxl:max-w-[540px] xl:max-w-[500px] w-full">
              <ul className="space-y-3">
                {links.slice(4, 7).map((item, index) => (
                  <motion.li
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsOne}
                    transition={{ duration: 0.6, delay: item.delay }}
                    key={index}
                    className="flex text-[15px] leading-[20px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    {item.rule}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePLFeatures;
