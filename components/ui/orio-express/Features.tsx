"use client";
import Image from "next/image";
import AnimatedLine from "@/components/ui/oms/AnimatedLine";
import { motion } from "framer-motion";

export type LinksType = {
  id: number;
  delay: number;
  rule: string;
};

const links: LinksType[] = [
  {
    id: 1,
    delay: 0.6,
    rule: "Automate routine tasks and streamline operations to improve productivity.",
  },
  {
    id: 2,
    delay: 0.8,
    rule: "Optimize routes and reduce fuel consumption, leading to significant cost savings.",
  },
  {
    id: 3,
    delay: 1,
    rule: "Provide customers with accurate tracking information and timely deliveries.",
  },
  {
    id: 4,
    delay: 1.2,
    rule: "Our software grows with your business, accommodating increased volume and complexity",
  },
  {
    id: 5,
    delay: 1.4,
    rule: "Gain full visibility into your logistics operations with real-time data and insights.",
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

const Features = () => {
  return (
    <section className="relative md:py-28 py-20">
      <div className="container space-y-8">
        <div className="space-y-6">
          <div className="text-center">
            <h6 className="text-midnight font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl">
              Why Choose Orio Express?
            </h6>
          </div>
        </div>
        <div className="bg-[#F6F6F6] rounded-3xl">
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
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Comprehensive Logistics Management
                    </motion.h6>
                  </div>
                  <div className="max-w-[530px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Orio Express offers an all-in-one platform that covers
                      every aspect of your logistics operations. From order
                      booking to route optimization and real-time tracking, our
                      software ensures you have complete control over your
                      logistics network.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[5%] top-[9%] sm:top-[8%] -z-10">
                  <Image
                    src="/images/svg/elementTwentyNine.svg"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwentyNine"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-center p-5">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/orioExpressComprehensiveLogisticsManagement.png"
                      width={350}
                      height={350}
                      alt="orioExpressComprehensiveLogisticsManagement"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[560px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Seamless Integration
                    </motion.h6>
                  </div>
                  <div className="max-w-[550px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Our software easily integrates with your existing systems,
                      providing a seamless transition and minimizing disruption
                      to your operations. Orio Express supports integration with
                      popular e-commerce platforms, ERP systems, and more,
                      ensuring all your data flows smoothly between systems.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 top-[19%] sm:top-[17%] -z-10">
                  <Image
                    src="/images/svg/elementThirty.svg"
                    className="sm:w-[420px] w-[350px]"
                    width={422}
                    height={394}
                    alt="elementThirty"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-center p-5">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/orioExpressIntegration.png"
                      width={322}
                      height={322}
                      alt="orioExpressIntegration"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[530px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Real-Time Tracking and Reporting
                    </motion.h6>
                  </div>
                  <div className="max-w-[530px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Stay updated with real-time tracking of your shipments.
                      Our advanced GPS integration allows you to monitor the
                      exact location of your deliveries, providing you and your
                      customers with accurate ETA updates. Additionally, our
                      robust reporting tools help you analyze performance
                      metrics and make data-driven decisions.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] sm:top-[29%] top-[31%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/svg/elementThirtyOne.svg"
                    className="sm:w-[390px] w-[330px]"
                    width={300}
                    height={500}
                    alt="elementThirtyOne"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-center overflow-x-hidden p-5">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/orioExpressReporting.png"
                      width={270}
                      height={270}
                      alt="orioExpressReporting"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[540px] sm:max-w-[420px] max-w-[275px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Optimized Route Planning
                    </motion.h6>
                  </div>
                  <div className="max-w-[500px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Reduce delivery times and fuel costs with our intelligent
                      route planning feature. Orio Express uses advanced
                      algorithms to determine the most efficient routes for your
                      deliveries, taking into account factors like traffic,
                      distance, anddelivery time windows.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 sm:top-[39%] top-[41%] -z-10">
                  <Image
                    src="/images/svg/elementThirtyTwo.svg"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementThirtyTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#CFF8E7] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full flex items-end overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Image
                      src="/images/png/OptimizedRoute.png"
                      width={530}
                      height={685}
                      alt="OptimizedRoute"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[560px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Customer Portal
                    </motion.h6>
                  </div>
                  <div className="max-w-[530px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Offering convenience and transparency, our customer portal
                      allows your clients to book shipments effortlessly and
                      track their orders in real-time. With a user-friendly
                      interface, customers can access shipment details, view
                      delivery status updates, and receive notifications,
                      ensuring they stay informed every step of the way.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[52%] sm:top-[51%] top-[52%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/svg/elementThirtyThree.svg"
                    className="lg:w-[290px] w-[250px]"
                    width={300}
                    height={500}
                    alt="elementThirtyThree"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-center overflow-x-hidden p-5">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/orioExpressCustomerPortal.png"
                      width={350}
                      height={350}
                      alt="orioExpressCustomerPortal"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[540px] sm:max-w-[420px] max-w-[275px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Customer Statement Invoices Generation
                    </motion.h6>
                  </div>
                  <div className="max-w-[500px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Simplify your statement generation process with Orio
                      Express. Generate detailed customer statement invoices
                      directly from the operations portal, summarizing all
                      transactions and outstanding balances. Whether it&apos;s
                      invoicing for freight charges, storage fees, or additional
                      services, our software automates the invoicing process,
                      improving accuracy and efficiency.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 sm:top-[64%] top-[65%] -z-10">
                  <Image
                    src="/images/svg/elementThirtyFour.svg"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementThirtyFour"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] flex justify-center items-center w-full overflow-hidden p-8">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    
                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Image
                      src="/images/png/orioExpressInvoice.png"
                      width={250}
                      height={250}
                      alt="orioExpressInvoice"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[490px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"
                      
                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Benefits of Using Orio Express
                    </motion.h6>
                  </div>
                  <div className="max-w-[530px]">
                    <ul className="space-y-3">
                      {links.slice(0, 6).map((item, index) => (
                        <motion.li
                          initial="hidden"
                          whileInView="visible"
                          
                          variants={animationVariantsOne}
                          transition={{ duration: 0.5, delay: item.delay }}
                          key={index}
                          className="flex text-[15px] leading-[20px] text-charcoal"
                        >
                          <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                          {item.rule}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] sm:top-[76%] top-[77%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/svg/elementThirtyFive.svg"
                    className="w-[340px]"
                    width={300}
                    height={500}
                    alt="elementThirtyFive"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-start overflow-x-hidden pr-5">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariantsOne}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/benefitsOrioExpress.png"
                      width={370}
                      height={370}
                      alt="benefitsOrioExpress"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center sm:px-10 px-5">
            <div className="basis-full space-y-8 order-last lg:order-first">
              <div className="space-y-6 flex flex-col items-center">
                <div className="text-center md:max-w-[100%] sm:max-w-[600px] max-w-[260px]">
                  <h6 className="text-midnight font-bold xl:text-5xl xl:leading-[52px] lg:text-4xl text-3xl">
                    Key Features of Orio Express
                  </h6>
                </div>
                <div className="text-center max-w-[715px]">
                  <p className="text-charcoal font-normal text-[16px] leading-[26px]">
                    Transform your warehouse operations with our WMS, optimizing
                    inventory, orders, and workflows for maximum productivity
                    and accuracy.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col lg:justify-between lg:gap-0 sm:gap-8 gap-6 relative">
                <div className="flex flex-col justify-center items-center lg:pb-10 order-1">
                  <div className="flex flex-col justify-center items-center space-y-4 sm:pb-8 pb-6 lg:pb-0 lg:relative lg:z-10">
                    <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-2">
                      <Image
                        src="/images/png/orderManagement.png"
                        className="sm:w-[35px] w-[35px]"
                        width={35}
                        height={35}
                        alt="orderManagement"
                      />
                      <div className="max-w-[95px] text-center">
                        <p className="text-midnight font-normal text-sm">
                          Order Management 
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row xxl:gap-12 xl:gap-8 lg:gap-6 gap-10">
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/dataHandling.png"
                          className="sm:w-[35px] w-[35px]"
                          width={50}
                          height={50}
                          alt="dataHandling"
                        />
                        <div className="max-w-[95px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Secure Data Handling
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/notifications.png"
                          className="sm:w-[40px] w-[35px]"
                          width={40}
                          height={40}
                          alt="shopify"
                        />
                        <div className="max-w-[95px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Automated Notifications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatedLine className="xxl:left-[172px] xl:left-[145px] left-[140px] xl:bottom-[44px] bottom-[16px] -scale-x-100" />

                <div className="relative flex flex-col justify-end items-end lg:order-2 order-3 mt-5 sm:mt-0">
                  <div className="absolute left-[50%] translate-x-[-50%] bottom-0 azureRadialDots bg-no-repeat bg-contain bg-left-top bg-azure-100 z-0 xxl:w-[450px] xl:w-[400px] lg:w-[250px] sm:w-[350px] w-[250px] xl:h-[330px] lg:h-[202px] sm:h-[272px] h-[220px] rounded-t-2xl"></div>
                  <Image
                    src="/images/png/boyWithMobile.png"
                    className="mx-auto relative z-10 xl:w-[450px] w-[410px]"
                    width={566}
                    height={554}
                    alt="boyWithMobile"
                  />
                </div>

                <AnimatedLine className="xxl:right-[172px] xl:right-[145px] right-[140px] xl:bottom-[44px] bottom-[16px]" />

                <div className="flex flex-col justify-center items-center lg:pb-10 lg:order-3 order-2">
                  <div className="flex flex-col justify-center items-center space-y-4 sm:pb-8 pb-6 lg:pb-0 lg:relative lg:z-10">
                    <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-2">
                      <Image
                        src="/images/png/mobileAccess.png"
                        className="sm:w-[35px] w-[35px]"
                        width={55}
                        height={55}
                        alt="mobileAccess"
                      />
                      <div className="max-w-[95px] text-center">
                        <p className="text-midnight font-normal text-sm">
                          Mobile Access
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row xxl:gap-12 xl:gap-8 lg:gap-6 gap-10">
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/comprehensiveReporting.png"
                          className="sm:w-[35px] w-[35px]"
                          width={50}
                          height={50}
                          alt="comprehensiveReporting"
                        />
                        <div className="max-w-[112px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Comprehensive Reporting
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[136px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/multiChannels.png"
                          className="sm:w-[40px] w-[35px]"
                          width={40}
                          height={40}
                          alt="multiChannels"
                        />
                        <div className="max-w-[104px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Multi-Channel Integration
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
