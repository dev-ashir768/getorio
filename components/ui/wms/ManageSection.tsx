"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
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

const ManageSection = () => {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-12 lg:gap-y-0">
        <div className="bg-gradient-to-br from-[#97cff0] via-[#97cff0] to-[#61bbef] rounded-2xl flex flex-col justify-between overflow-hidden h-[650px] ">
          <div className="lg:p-10 md:p-16 sm:p-[40px] p-7 space-y-4">
            <div className="max-w-[470px]">
              <motion.h6
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5 }}
                className="text-midnight font-bold sm:text-[40px] text-[25px] leading-[32px] sm:leading-[42px]"
              >
                Control your Logistics with Orio WMS
              </motion.h6>
            </div>
            <div className="max-w-[575px]">
              <motion.p
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-midnight font-normal text-[15px] leading-[24px]"
              >
                Gain complete control of your logistics with Orio WMS (Warehouse Management System). This robust tool lets you efficiently manage all warehouse activities, from inventory tracking to order fulfillment, with accuracy and ease.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto"
          >
            <Image
              src="/images/png/wmsPlane.png"
              className="w-[450px]"
              width={450}
              height={450}
              alt="wmsPlane"
            />
          </motion.div>
        </div>

        <div className="bg-midnight rounded-2xl flex flex-col justify-between orioPattern bg-no-repeat bg-contain bg-bottom overflow-hidden sm:h-[650px] h-[550px]">
          <div className="lg:p-10 md:p-16 sm:p-[40px] p-7 space-y-4">
            <div className="max-w-[565px]">
              <motion.h6
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-white font-bold sm:text-[40px] text-[25px] leading-[32px] sm:leading-[42px]"
              >
                Manage Your Supply Chain with Orio WMS
              </motion.h6>
            </div>
            <div className="max-w-[575px]">
              <motion.p
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-white font-light text-opacity-85 text-[15px] leading-[24px]"
              >
                Orio WMS offers powerful tools to manage your entire supply chain efficiently. From procurement to distribution, the system provides complete visibility and control over all supply chain operations.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"

            variants={animationVariantsThree}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mx-auto"
          >
            <Image
              src="/images/png/wmsSupplyChain.png"
              width={550}
              height={550}
              alt="wmsSupplyChain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManageSection;
