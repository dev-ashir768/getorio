"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export type LinksType = {
  id: number;
  label: string;
  link: string;
};
const links: LinksType[] = [
  {
    id: 1,
    label: "kcci",
    link: "/images/png/kcci-bnw.png",
  },
  {
    id: 2,
    label: "fbr",
    link: "/images/png/fbr-bnw.png",
  },
  {
    id: 3,
    label: "pseb",
    link: "/images/png/pseb-bnw.png",
  },
  {
    id: 4,
    label: "secp",
    link: "/images/png/secp-bnw.png",
  },
];

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

const ShippingFeatures = () => {
  return (
    <section className="relative">
      <div className="container md:py-28 py-20 space-y-10">
        <div className="mx-auto text-center space-y-4 flex flex-col items-center">
          <div className="sm:max-w-[640px] max-w-[328px]">
            <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
              Advanced Shipping Features
            </h6>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-3xl">
          <div className="xl:px-24 sm:px-12 px-5 lg:py-24 py-16 sm:space-y-20 space-y-14">
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    01
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Load sheet Management
                    </motion.h6>
                  </div>
                  <div className="max-w-[540px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Enhance your shipping operations with our advanced load
                      sheet management feature. Automate tracking and loadsheet
                      for all shipments, ensuring precise and efficient
                      logistics. Say goodbye to manual tracking and get seamless
                      automation, allowing you to focus on strategic business
                      growth. Our system simplifies the entire process, making
                      logistics management more efficient and hassle-free.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full order-first lg:order-last z-10">
                <div className="absolute right-0 lg:top-[11%] top-[14%] -z-10">
                  <Image
                    src="/images/png/elementEighteen.png"
                    className="w-[350px]"
                    width={350}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full ">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/loadSheetPostEx.png"
                      width={530}
                      height={685}
                      alt="postex_loadSheet"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    02
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-5xl xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      CN Generation
                    </motion.h6>
                  </div>
                  <div className="max-w-[555px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Simplify consignment note generation with our automated
                      system. Easily create accurate CNs, reduce manual errors,
                      and save time. Focus on core business activities with our
                      user-friendly shipping platform. Experience convenient,
                      efficient shipping operations and drive business success.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[25%] top-[29%] -z-10">
                  <Image
                    src="/images/png/elementNineteen.png"
                    className="w-[350px]"
                    width={350}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full ">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/CNgenaration.png"
                      width={530}
                      height={685}
                      alt="generate_cn"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    03
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Multi-Tracking
                    </motion.h6>
                  </div>
                  <div className="max-w-[540px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Effortlessly track multiple shipments across all couriers
                      with our user-friendly system. Stay informed about
                      real-time order statuses and provide timely updates to
                      your customers. Monitor all your shipments from one
                      convenient portal, simplifying your shipping process and
                      empowering you to deliver exceptional service.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full order-first lg:order-last left z-10">
                <div className="absolute right-0 lg:top-[39%] top-[43%] -z-10">
                  <Image
                    src="/images/png/elementTwenty.png"
                    className="w-[350px]"
                    width={350}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#000C19] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full  flex">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex"
                  >
                    <Image
                      src="/images/png/multipleTracking.png"
                      width={530}
                      height={685}
                      alt="blue-ex_multiple-tracking"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    04
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Comprehensive Statements
                    </motion.h6>
                  </div>
                  <div className="max-w-[555px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Get detailed and comprehensive shipment statements with
                      ease. Our platform provides clear financial summaries for
                      accurate record-keeping and efficient account management.
                      Access all outstanding shipment details in one place,
                      empowering informed decisions and business success. Stay
                      organized and in control of your shipping finances with
                      our user-friendly platform.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[55%] top-[59%] -z-10">
                  <Image
                    src="/images/png/elementTwentyOne.png"
                    className="w-[350px]"
                    width={350}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#CFF8E7] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full  flex">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                    className="flex"
                  >
                    <Image
                      src="/images/png/statementMobile.png"
                      width={530}
                      height={685}
                      alt="statementMobile"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    05
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Return Advices
                    </motion.h6>
                  </div>
                  <div className="max-w-[540px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Efficiently manage returns with our automated feature.
                      Streamline handling for quick resolution and high service
                      standards. Simplify return management to promptly address
                      customer returns effectively. Empower exceptional customer
                      service and operational optimization with hassle-free
                      returns advice.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full order-first lg:order-last z-10">
                <div className="absolute right-0 lg:top-[66%] md:top-[72%] top-[73%] -z-10">
                  <Image
                    src="/images/png/elementTwentyFour.png"
                    className="w-[420px]"
                    width={420}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-[#e4e4e4] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full flex">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex"
                  >
                    <Image
                      src="/images/png/returnAdvice.png"
                      width={530}
                      height={685}
                      alt="returnAdvice"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] sm:top-[23px] top-[10px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    06
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[564px] max-w-[430px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      WhatsApp Integration
                    </motion.h6>
                  </div>
                  <div className="max-w-[555px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Book orders via WhatsApp with our Chrome extension. Manage
                      order bookings and customer communication directly from
                      your browser, enhancing workflow and service. get seamless
                      integration, simplifying order management without platform
                      switching. Streamline operations and elevate customer
                      service effortlessly with our WhatsApp Chrome extension.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[83%] top-[90%] -z-10">
                  <Image
                    src="/images/png/elementTwentyThree.png"
                    className="w-[300px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-[#e4e4e4] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full ">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/whatsappIntegration.png"
                      width={530}
                      height={685}
                      alt="orio whatsapp integration"
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

export default ShippingFeatures;
