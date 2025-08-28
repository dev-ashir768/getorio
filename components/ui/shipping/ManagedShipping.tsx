"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export type LinksType = {
  id: number;
  label: string;
  delay: number;
  link: string;
};
const links: LinksType[] = [
  {
    id: 1,
    label: "kcci",
    delay: 0.8,
    link: "/images/png/kcci-bnw.png",
  },
  {
    id: 2,
    label: "fbr",
    delay: 1,
    link: "/images/png/fbr-bnw.png",
  },
  {
    id: 3,
    label: "pseb",
    delay: 1.2,
    link: "/images/png/pseb-bnw.png",
  },
  {
    id: 4,
    label: "secp",
    delay: 1.4,
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

const ManagedShipping = () => {
  return (
    <section className="relative">
      <div className="container md:py-28 py-20 space-y-10">
        <div className="mx-auto text-center space-y-4 flex flex-col items-center">
          <div className="sm:max-w-[650px] max-w-[328px]">
            <h6 className="text-midnight font-bold sm:text-[45px] sm:leading-[54px] text-3xl sm:tracking-wide">
              Why Choose Orio Managed Shipping?
            </h6>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-3xl">
          <div className="xl:px-24 sm:px-12 px-5 lg:py-24 py-16 sm:space-y-20 space-y-14">
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] top-[23px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    01
                  </h6>
                </div>
                <div className="space-y-3 relative z-10 overflow-x-hidden">
                  <div className="sm:max-w-[390px] max-w-[260px]">
                    <motion.h6
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Best Rates for All Couriers
                    </motion.h6>
                  </div>
                  <div className="max-w-[470px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-black font-medium text-[16px] leading-[26px]"
                    >
                      Get the best solution for your shipping needs with Managed
                      Shipping Services.
                    </motion.p>
                  </div>
                  <div className="xxl:max-w-[540px] xl:max-w-[500px] w-full">
                    <ul className="space-y-3">
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Access the best rates from all major couriers with Orio.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Ensure competitive pricing for every order.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Get efficient, budget-friendly deliveries.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Experience seamless logistics with our tailored
                        solutions.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Optimize your shipping process with our customized
                        services.
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[12%] top-[15%] -z-10">
                  <Image
                    src="/images/png/elementThirteen.png"
                    className="w-[390px]"
                    width={721}
                    height={552}
                    alt="elementTwo"
                  />
                </div>
                <div className="overflow-x-hidden lg:mr-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/bestRates.png"
                      width={530}
                      height={685}
                      alt="best_rates_for_all_couriers"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12 ">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] top-[23px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    02
                  </h6>
                </div>
                <div className="space-y-3 relative z-10 overflow-x-hidden">
                  <div className="max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Daily Payments
                    </motion.h6>
                  </div>
                  <div className="max-w-[530px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Experience the ease of daily payments through our efficient system, guaranteeing a consistent cash flow to support your business expansion. Enjoy rapid payment processing, with funds quickly deposited into your account. Say goodbye to the delays of weekly or monthly payouts and welcome the flexibility of daily transactions. With Orio, achieving financial stability is merely a daily transaction away.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full order-first lg:order-last z-10">
                <div className="absolute right-0 lg:top-[28%] top-[32%] -z-10">
                  <Image
                    src="/images/png/elementFourteen.png"
                    className="w-[330px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex"
                  >
                    <Image
                      src="/images/png/transactionMobile.png"
                      width={530}
                      height={685}
                      alt="daily_payments"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] top-[23px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    03
                  </h6>
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="sm:max-w-[420px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Verified Company
                    </motion.h6>
                  </div>
                  <div className="max-w-[565px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Work with a trusted and verified company registered with
                      SECP, KCCI, FBR, and PSEB. Our industry accreditation
                      ensures reliable and professional shipping operations.
                      Choose a partner you can trust for seamless shipping
                      solutions and exceptional service quality.
                    </motion.p>
                  </div>
                  <div className="grid xs:grid-cols-4 grid-cols-3 gap-2 sm:w-max w-full">
                    {links.slice(0, 4).map((item, index) => (
                      <motion.figure
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsTwo}
                        transition={{ duration: 0.5, delay: item.delay }}
                        key={index}
                        className="flex justify-center items-center rounded-2xl bg-white max-w-[100px] max-h-[100px] p-[10px]"
                      >
                        <Image
                          className="w-[82px]"
                          src={item.link}
                          width={82}
                          height={82}
                          alt={item.label}
                        />
                      </motion.figure>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[46%] top-[50%] -z-10">
                  <Image
                    src="/images/png/elementFifteen.png"
                    className="w-[390px]"
                    width={380}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#000C19] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/verified.png"
                      width={530}
                      height={685}
                      alt="verified"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] top-[23px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    04
                  </h6>
                </div>
                <div className="space-y-3 relative z-10">
                  <div className="lg:max-w-[460px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Unified Customer Service
                    </motion.h6>
                  </div>
                  <div className="max-w-[470px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-black font-medium text-[16px] leading-[26px]"
                    >
                      Enhance your support experience with Orio&apos;s integrated customer service team for smooth and efficient shipping solutions.
                    </motion.p>
                  </div>
                  <div className="xxl:max-w-[514px] xl:max-w-[500px] w-full">
                    <ul className="space-y-3">
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Enhance your support experience with Orio&apos;s unified
                        customer service team managing all your couriers.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Benefit from dedicated assistance, ensuring swift,
                        effective solutions and a seamless shipping process.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        No more juggling in multiple courier support channels.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Get simplified, tailored service that lets you focus on
                        growing your business.
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full order-first lg:order-last z-10">
                <div className="absolute right-0 lg:top-[63%] top-[70%] -z-10">
                  <Image
                    src="/images/png/elementSixteen.png"
                    className="w-[485px]"
                    width={485}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#CFF8E7] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <Image
                      src="/images/png/unifiedCustomers.png"
                      width={530}
                      height={685}
                      alt="unifiedCustomers"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-12">
              <div className="lg:basis-[50%] basis-full lg:order-last order-first sm:pt-24 pt-[68px] lg:pb-24 relative">
                <div className="absolute xxl:left-[-93px] xl:left-[-63px] lg:left-0 xxl:top-[11px] lg:top-[36px] top-[23px]">
                  <h6 className="xxl:h-[134px] h-[110px] xxl:leading-[144px] leading-[115px] xxl:text-[165px] sm:text-[135px] text-[110px] font-bold bg-gradient-to-br from-[#FC466B] to-azure-100 text-transparent bg-clip-text">
                    05
                  </h6>
                </div>
                <div className="space-y-4 relative z-10 overflow-x-hidden">
                  <div className="lg:max-w-[510px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Single Portal Access
                    </motion.h6>
                  </div>
                  <div className="max-w-[470px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-black font-medium text-[16px] leading-[26px]"
                    >
                      Manage all your shipping activities and logistics in one
                      place with our single portal.
                    </motion.p>
                  </div>
                  <div className="xxl:max-w-[530px] xl:max-w-[500px] w-full">
                    <ul className="space-y-3">
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Access all your shipping activities through our single
                        portal.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Seamlessly manage logistics with pre-integrated managed
                        couriers.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Get centralized control for efficient, hassle-free
                        shipping.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Monitor and manage shipments of all managed couriers in
                        one place, saving time and effort.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Automate your order booking process with our
                        user-friendly portal.
                      </motion.li>
                      <motion.li
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsOne}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="flex text-charcoal font-normal text-[15px] leading-[20px]"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        Enhance productivity and streamline workflow.
                      </motion.li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:basis-[50%] basis-full lg:order-first order-last z-10">
                <div className="absolute left-0 lg:top-[80%] top-[90%] -z-10">
                  <Image
                    src="/images/png/elementSeventeen.png"
                    className="lg:w-[300px] w-[280px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/portalAccess.png"
                      width={530}
                      height={685}
                      alt="portalAccess"
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

export default ManagedShipping;
