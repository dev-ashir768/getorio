"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const HeroSection = () => {
  return (
    <section className="careersBG bg-no-repeat lg:bg-top lg:h-full">
      <div className="container w-full h-full flex lg:flex-row flex-col justify-center lg:items-center lg:gap-y-0 gap-y-20 lg:pt-[68px] pt-[125px] sm:pb-[78px] lg:pb-0">
        <div className="lg:basis-1/2 basis-full lg:space-y-4 space-y-2 overflow-x-hidden">
          <div className="lg:max-w-[480px] sm:max-w-[340px]">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.8 }}
              className="text-midnight font-bold lg:text-6xl lg:leading-[66px] text-4xl leading-[40px] tracking-wide"
            >
              Enhance your career with us
            </motion.h1>
          </div>
          <div className="xxl:max-w-[520px] xl:max-w-[450px] sm:max-w-[380px] max-w-[320px]">
            <motion.p
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-charcoal font-medium sm:text-base text-[13px] leading-[20px]"
            >
              To grow a business, you need the right people on your team. Now is the time to do your best work.
            </motion.p>
          </div>
        </div>
        <div className="lg:basis-1/2 basis-full sm:w-max mx-auto">
          <div className="grid grid-rows-3 grid-flow-col sm:gap-4 gap-2 lg:ml-auto sm:w-max">
            <div className="row-span-2 max-w-[280px] xl:max-w-[315px]">
              <Image
                src="/images/jpg/laptopGirlTwo.jpg"
                className="sm:rounded-2xl rounded-lg object-cover h-full"
                width={395}
                height={402}
                alt="girl with orio laptop"
              />
            </div>
            <div className="col-span-2 flex flex-row sm:gap-4 gap-2">
              <div className="sm:max-w-[195px] xl:max-w-[220px]">
                <Image
                  src="/images/jpg/frameTwo.jpg"
                  className="sm:rounded-2xl rounded-lg object-cover sm:h-full w-full sm:w-[287px]"
                  width={287}
                  height={192}
                  alt="orio's tech team"
                />
              </div>
              <div className="sm:max-w-[280px] max-w-[194px] xl:max-w-[315px] sm:h-full w-full">
                <div className="sm:rounded-2xl rounded-lg orioMidFrame bg-no-repeat bg-contain bg-right bg-midnight w-full h-full"></div>
              </div>
            </div>
            <div className="max-w-[195px] xl:max-w-[220px]">
              <Image
                src="/images/jpg/frameOne.jpg"
                className="sm:rounded-2xl rounded-lg object-cover sm:h-full w-full sm:w-[287px]"
                width={287}
                height={192}
                alt="orio's tech team"
              />
            </div>
            <div className="max-w-[195px] xl:max-w-[220px]">
              <Image
                src="/images/jpg/hijabGirl.jpg"
                className="sm:rounded-2xl rounded-lg object-cover sm:h-full w-full sm:w-[287px]"
                width={287}
                height={192}
                alt="hijabGirl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
