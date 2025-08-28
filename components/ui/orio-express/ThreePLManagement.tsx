"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const ThreePLManagement = () => {
  return (
    <section className="bg-black">
      <div className="container space-y-8 py-20">
        <div className="space-y-6 flex flex-col">
          <div className="sm:max-w-[905px] max-w-[428px]">
            <h6 className="text-white font-bold sm:text-5xl text-3xl sm:tracking-wide">
              Maximize Logistics Efficiency with Orio Express 3PL Management
            </h6>
          </div>
          <div className="sm:max-w-[830px] max-w-[315px]">
            <p className="text-white font-normal sm:text-base text-sm">
              Orio Express 3PL Management Portal provides a comprehensive
              solution to streamline and enhance your third-party logistics
              operations.
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col items-center sm:gap-8 gap-10">
          <div className="lg:w-1/2 w-full sm:space-y-8 space-y-7 overflow-hidden">
            <div className="flex flex-col items-start">
              <div className="space-y-3 max-w-[570px]">
                <h6 className="text-white sm:text-xl text-lg font-semibold">
                  Manage Shipments in Real-Time
                </h6>
                <p className="text-[#DFE1EA] sm:text-base text-sm font-light">
                  Orio Express provides real-time shipment tracking, offering
                  unparalleled visibility into every stage of the delivery
                  process.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="space-y-3 max-w-[570px]">
                <h6 className="text-white sm:text-xl text-lg font-semibold">
                  Automate Logistics Workflows to Improve Efficiency
                </h6>
                <p className="text-[#DFE1EA] sm:text-base text-sm font-light">
                  Orio Express automates key logistics workflows, transforming
                  how your operations are managed.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="space-y-3 max-w-[570px]">
                <h6 className="text-white sm:text-xl text-lg font-semibold">
                  Minimize Errors and Reduce Operational Costs
                </h6>
                <p className="text-[#DFE1EA] sm:text-base text-sm font-light">
                  Orio Express is designed to minimize errors throughout your
                  logistics operations, ensuring accuracy in every process. By
                  automating error-prone tasks and integrating comprehensive
                  checks, the software reduces costly mistakes and unnecessary
                  expenditures.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              variants={animationVariantsOne}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/png/3pl_management.png"
                className="mx-auto"
                width={400}
                height={478}
                alt="3pl_management"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreePLManagement;
