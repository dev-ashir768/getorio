"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { PerformanceSectionLinksType } from "@/app/(main)/page";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface PerformanceSectionProps {
  links: PerformanceSectionLinksType[];
  title: string;
  subtitle: string;
  className: string;
  cardHeight: string;
  end: number | "";
}

const animationVariantsOne = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const PerformanceSection: React.FC<PerformanceSectionProps> = ({
  links,
  title,
  subtitle,
  className,
  cardHeight,
}) => {
  return (
    <section
      className={cn("container w-full space-y-14 overflow-x-hidden", className)}
    >
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <motion.h6
            className="text-midnight font-bold sm:text-[45px] sm:leading-none text-3xl sm:tracking-wide"
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h6>
        </div>
        <div className="sm:max-w-[860px] max-w-[315px]">
          <motion.p
            className="text-charcoal font-normal sm:text-base text-sm"
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      <div className="flex flex-row flex-wrap sm:justify-center gap-8 w-full">
        {links.map((item, index) => (
          <figure
            key={index}
            className={`md:max-w-[320px] w-full ${cardHeight} flex flex-col justify-between items-center bg-[#F6F6F6] rounded-2xl sm:px-5 px-4 pt-10 pb-[48px] text-center`}
          >
            <Image
              src={item.link}
              className="mt-5"
              width={60}
              height={60}
              alt={item.label}
            />
            <div className="md:max-w-[290px] space-y-4">
              <CountUp
                end={item.digit as unknown as number}
                suffix={item.suffix}
                className="text-midnight font-bold text-5xl"
                enableScrollSpy
              />
              <p className="text-[#000C19] sm:text-lg text-base font-normal capitalize">
                {item.label}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
