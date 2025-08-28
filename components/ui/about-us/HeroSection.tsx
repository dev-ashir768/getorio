"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  return (
    <section className="aboutBG bg-no-repeat bg-cover lg:h-full sm:h-auto">
      <div className="container w-full h-full flex lg:flex-row flex-col justify-center lg:items-center lg:gap-y-0 gap-y-16 lg:pt-[68px] pt-[125px] pb-[78px] lg:pb-[0px]">
        <div className="lg:w-1/2 w-full md:space-y-4 space-y-2 overflow-x-hidden">
          <div className="lg:max-w-[600px] md:max-w-[440px] sm:max-w-[385px] max-w-[385px]">
            <motion.h1
              className="text-midnight font-bold xl:text-[55px] lg:text-[50px] xl:leading-[60px] lg:leading-[55px] sm:text-4xl text-3xl leading-[40px] tracking-wide"
              variants={animationVariantsOne}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              About Orio
            </motion.h1>
          </div>
          <div className="xl:max-w-[450px] sm:max-w-[380px] max-w-[306px]">
            <motion.p
              className="text-charcoal font-medium sm:text-base text-[13px] leading-[20px]"
              variants={animationVariantsOne}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Orio is a center of excellence. A designated R&D space and talent
              pool that innovates relentlessly and ventures into the unknown.
            </motion.p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mx-auto flex justify-end">
          <Image
            src="/images/png/manTab.png"
            width={664}
            height={561}
            alt="manTab"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
