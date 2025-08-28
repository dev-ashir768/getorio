"use client";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  return (
    <section className="contactBG bg-no-repeat bg-center md:bg-[length:70%_auto] sm:bg-[length:80%_auto] bg-[length:90%_auto] w-full h-full bg-[#000C19]">
      <div className="container lg:space-y-4 space-y-2 flex flex-col justify-center items-center w-full h-full overflow-x-hidden">
        <div className="lg:max-w-3xl sm:max-w-xl max-w-[280px] text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
            className="text-white font-bold lg:text-6xl sm:text-4xl text-[32px] tracking-wide lg:leading-[66px] sm:leading-[40px] leading-[37px]"
          >
            Engage with the Product Creators
          </motion.h1>
        </div>
        <div className="lg:max-w-[620px] sm:max-w-[380px] max-w-[245px] text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white font-normal sm:text-base text-[13px] leading-[20px]"
          >
            Get in touch with us today and let&apos;s start a conversation!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
