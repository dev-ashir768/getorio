"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const DemoBooking = () => {
  return (
    <section className="lg:py-28 py-20 container overflow-x-hidden">
      <div className="flex lg:flex-row flex-col lg:items-center w-full lg:py-28 lg:relative gap-8">
        <div className="lg:w-[50%] w-full lg:order-first order-last relative lg:static py-28 lg:py-0">
          <div className="bg-cover sm:rounded-3xl rounded-2xl xl:max-w-[440px] lg:max-w-[340px] h-full lg:w-full md:w-[80%] w-[90%] bg-no-repeat waterWavesBG absolute top-[50%] -translate-y-[50%] lg:left-0 left-[50%] -translate-x-[50%] lg:-translate-x-[0] -z-10"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsTwo}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/png/laptopMockup-3.png"
              className="mx-auto xl:w-[525px]"
              width={525}
              height={525}
              alt="laptopMockup-3"
              unoptimized
            />
          </motion.div>
        </div>

        <div className="lg:w-[50%] lg:order-last order-first space-y-8 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="max-w-[568px]">
              <motion.h6
                className="text-midnight font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl"
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Book your Demo Today to Experience Orio
              </motion.h6>
            </div>
            <div className="sm:max-w-[520px] max-w-[320px]">
              <motion.p
                className="text-charcoal font-medium sm:text-[15px] text-sm sm:leading-[26px]"
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Orio is a great order management system that really helps streamline your operations. You’ll notice how it enhances your workflows and supports your business growth.
              </motion.p>
            </div>
          </div>
          <motion.div
            className="sm:w-max w-full"
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="/get-demo">
              <Button variant="default" size="lg" className="relative">
                Get a Demo
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoBooking;
