"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type LinksType = {
  id: number;
  label: string;
  link: string;
  about: string;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "Ecommerce Manager",
    link: "/images/png/ecommerceMannager.png",
    about:
      "Streamline order processing and improve customer satisfaction with real-time inventory and order updates.",
  },
  {
    id: 2,
    label: "Operations Manager",
    link: "/images/png/operationsManager.png",
    about:
      "Automate and synchronize inventory management, reducing manual tasks and errors.",
  },
  {
    id: 3,
    label: "Finance Head",
    link: "/images/png/financeHead.png",
    about:
      "Track costs and revenues accurately with integrated financial reporting tools.",
  },
  {
    id: 4,
    label: "Warehouse Administrator",
    link: "/images/png/warehouseAdministrator.png",
    about:
      "Maintain precise stock levels and ensure timely order fulfillment with advanced tracking systems.",
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const WholeTeam = () => {
  return (
    <section className="container md:space-y-12 space-y-10 overflow-x-hidden">
      <div className="max-w-[520px] mx-auto text-center">
        <motion.h6
          className="text-midnight font-bold tracking-wide sm:text-[45px] sm:leading-none text-3xl sm:tracking-wide"
          initial="hidden"
          whileInView="visible"
          
          variants={animationVariantsTwo}
          transition={{ duration: 0.8 }}
        >
          Designed With the Whole Team in Mind
        </motion.h6>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-x-6 gap-x-4 gap-y-12">
        {links.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="bg-azure-100 rounded-2xl w-full h-[405px] flex flex-col justify-between overflow-hidden">
              <div className="pt-6 xxl:px-6 px-5">
                <motion.h6
                  className="text-white font-bold xxl:text-lg lg:text-base md:text-lg sm:text-[14px] tracking-wide"
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {item.label}
                </motion.h6>
                <motion.span
                  className="h-[5px] rounded-full bg-white w-[70px] inline-block"
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.8 }}
                ></motion.span>
              </div>
              <motion.div
                className="flex justify-end"
                initial="hidden"
                whileInView="visible"
                
                variants={animationVariantsThree}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Image
                  src={item.link}
                  className="max-w-[275px]"
                  width={275}
                  height={429}
                  alt={item.label}
                />
              </motion.div>
            </div>
            <div className="mx-auto max-w-[303px]">
              <p className="text-charcoal font-medium text-sm text-center tracking-wide">
                {item.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WholeTeam;
