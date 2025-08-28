"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WhoWeAre = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="bg-[#000C19] rounded-3xl">
          <div className="xl:px-24 sm:px-12 px-5 lg:py-24 py-16 sm:space-y-20 space-y-14">
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[560px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-white font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Who We Are
                    </motion.h6>
                  </div>
                  <div className="max-w-[547px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-white text-opacity-85 font-normal text-[16px] leading-[26px]"
                    >
                      At Orio we specialize in creating innovative software
                      solutions help Ecommerce businesses streamline their
                      operations and improve their bottom line. Our flagship
                      product is an advanced OMS, WMS, and shipping portal that
                      comes equipped with auto-mated features to simplify order
                      management, inventory control, and logistics. We
                      understand the challenges that businesses face in
                      today&apos;s fast-paced market, which is why we&apos;ve
                      developed a comprehensive system that can be customized to
                      meet the unique needs of each client. Our team of
                      experienced developers and support staff, management are
                      dedicated to providing exceptional service and support to
                      help our clients succeed.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[13%] sm:top-[26%] top-[31%] -z-10">
                  <Image
                    src="/images/png/elementFive.png"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/svg/weAre.svg"
                      className=""
                      width={532}
                      height={693}
                      alt="mobile_illustration-1"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[470px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-white font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      What We Do
                    </motion.h6>
                  </div>
                  <div className="max-w-[578px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-white text-opacity-85 font-normal text-[16px] leading-[26px]"
                    >
                      We specialize in creating cutting-edge software solutions
                      to help businesses optimize their operations and achieve
                      their goals. Our flagship products are our advanced order
                      management system (OMS) and warehouse management system
                      (WMS), which are designed to work together seamlessly to
                      provide end-to-end visibility and control over entire
                      order fulfillment process. Our OMS comes equipped with
                      powerful automation features to streamline order
                      processing and shipping ,our WMS offers real-time
                      inventory tracking, optimized picking and packing, and
                      more. Both systems are highly customizable and can be
                      tailored to meet the unique needs of your business, while
                      integrating seamlessly with your existing systems and
                      workflows.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[56%] sm:top-[70%] top-[81%] -z-10">
                  <Image
                    src="/images/png/elementTwelve.png"
                    className="sm:w-[420px] w-[330px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex justify-center">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariantsTwo}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex justify-center"
                  >
                    <Image
                      src="/images/png/360Laptop.png"
                      className="my-auto"
                      width={750}
                      height={685}
                      alt="360Laptop"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
