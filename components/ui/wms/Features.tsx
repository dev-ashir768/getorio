"use client";
import Image from "next/image";
import AnimatedLine from "@/components/ui/oms/AnimatedLine";
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

const Features = () => {
  return (
    <section className="relative md:py-28 py-20">
      <div className="container">
        <div className="bg-[#F6F6F6] rounded-3xl">
          <div className="xl:px-24 sm:px-12 px-5 lg:py-24 py-16 sm:space-y-20 space-y-14">
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first overflow-x-hidden">
                <div className="space-y-6">
                  <div className="lg:max-w-[470px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Real-Time Inventory Management
                    </motion.h6>
                  </div>
                  <div className="max-w-[470px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      ORIO&apos;s WMS helps you avoid stockouts and overstock issues by offering real-time visibility into inventory levels. With this feature, tracking stock movements becomes easy, allowing you to stay on top of inventory turnover and optimize replenishment. Say goodbye to the headaches of manual inventory management and enjoy the efficiency of ORIO&apos;s WMS.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10 overflow-x-hidden">
                <div className="absolute right-0 lg:top-[6%] sm:top-[8%] top-[10%] -z-10">
                  <Image
                    src="/images/png/elementThree.png"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/wmsInventoryManagment.png"
                      width={530}
                      height={685}
                      alt="wmsInventoryManagment"
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
                      Order Fulfillment Optimization
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
                      Experience a significant improvement in order processing speed and accuracy with ORIO advanced order fulfillment features. Our WMS optimizes picking routes, assigns tasks efficiently, and ensures orders are picked, packed, and dispatched accurately and on time. Enhance customer satisfaction by ensuring each order is fulfilled smoothly, from start to finish.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[20%] top-[24%] sm:top-[21%] -z-10">
                  <Image
                    src="/images/png/elementThree.png"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/wmsOrderFullfilment.png"
                      width={532}
                      height={693}
                      alt="wmsOrderFullfilment"
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
                      Warehouse Layout Optimization
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
                      Unlock the full potential of your warehouse space with
                      ORIO&apos;s warehouse layout optimization tools. Our WMS
                      empowers you to design and fine-tune your warehouse layout
                      for maximum efficiency, minimizing order dispatchment time
                      and slashing operational costs. get a more streamlined
                      workflow and get ahead of wasted space and resources.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[33%] top-[37%] sm:top-[34%] -z-10">
                  <Image
                    src="/images/png/elementFive.png"
                    className="sm:w-[420px] w-[390px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/wmsWarehouseLayoutOptimization.png"
                      width={530}
                      height={685}
                      alt="wmsWarehouseLayoutOptimization"
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
                      Barcode and RFID Integration
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
                      Simplify inventory tracking and minimize errors with
                      ORIO&apos;s seamless barcode and RFID integration. From
                      receiving to shipping, effortlessly scan and track
                      inventory items, ensuring accurate inventory records at
                      every stage of the process. Bid farewell to manual data
                      entry errors and hello to streamlined inventory
                      management.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[45%] sm:top-[46%] top-[49%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/png/elementTwentyFive.png"
                    className="sm:w-[390px] w-[330px]"
                    width={300}
                    height={500}
                    alt="elementTwentyFive"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#CFF8E7] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end overflow-x-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/wmsBarcode.png"
                      width={532}
                      height={693}
                      alt="wmsBarcode"
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
                      Reporting and Analytics
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
                      Harness the power of data with ORIO&apos;s robust
                      reporting and analytics tools. Gain valuable insights into
                      your warehouse operations, monitor key performance
                      metrics, and identify bottlenecks with ease. With
                      actionable insights at your fingertips, make data-driven
                      decisions to continuously enhance warehouse efficiency and
                      productivity.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[60%] sm:top-[61%] top-[62%] -z-10">
                  <Image
                    src="/images/png/elementTwentySix.png"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwentySix"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Image
                      src="/images/png/wmsReporting.png"
                      className=""
                      width={530}
                      height={685}
                      alt="wmsReporting"
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
                      Scalability and Customization
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
                      ORIO&apos;s WMS is built to grow with your business,
                      whether you&apos;re a small warehouse or a large
                      distribution center. Our WMS can be tailored to meet your
                      unique requirements, ensuring a perfect fit for your
                      operation. Get no more one size fits solutions and get a
                      WMS that adapts to your evolving needs.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[72%] sm:top-[73%] top-[74%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/png/elementTwentySeven.png"
                    className="w-[340px]"
                    width={300}
                    height={500}
                    alt="elementTwentySeven"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end overflow-x-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsTwo}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/wmsScability.png"
                      width={532}
                      height={693}
                      alt="wmsScability"
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
                    Empower your Warehousing with WMS
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
                    <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-2">
                      <Image
                        src="/images/png/freeTrail.png"
                        className="sm:w-[55px] w-[50px]"
                        width={55}
                        height={55}
                        alt="shopify"
                      />
                      <div className="max-w-[95px] text-center">
                        <p className="text-midnight font-normal text-sm">
                          7 Days Free Trail
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row xxl:gap-12 xl:gap-8 lg:gap-6 gap-10">
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/plugNplay.png"
                          className="sm:w-[50px] w-[45px]"
                          width={50}
                          height={50}
                          alt="shopify"
                        />
                        <div className="max-w-[95px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Plug & Play
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/notifications.png"
                          className="sm:w-[40px] w-[35px]"
                          width={40}
                          height={40}
                          alt="shopify"
                        />
                        <div className="max-w-[95px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Notifications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatedLine className="xxl:left-[172px] xl:left-[145px] left-[140px] xl:bottom-[44px] bottom-[16px] -scale-x-100" />

                <div className="relative flex flex-col justify-end items-end lg:order-2 order-3 mt-5 sm:mt-0">
                  <div className="absolute left-[50%] translate-x-[-50%] bottom-0 roundedDotsMidnight bg-no-repeat bg-contain bg-left-top bg-midnight z-0 xxl:w-[450px] xl:w-[400px] lg:w-[250px] sm:w-[350px] w-[250px] xl:h-[330px] lg:h-[202px] sm:h-[272px] h-[220px] rounded-t-2xl"></div>
                  <Image
                    src="/images/svg/wmsEmpowerGirl.svg"
                    className="mx-auto relative z-10 xl:w-[450px] w-[410px]"
                    width={566}
                    height={554}
                    alt="wmsEmpowerGirl"
                  />
                </div>

                <AnimatedLine className="xxl:right-[172px] xl:right-[145px] right-[140px] xl:bottom-[44px] bottom-[16px]" />

                <div className="flex flex-col justify-center items-center lg:pb-10 lg:order-3 order-2">
                  <div className="flex flex-col justify-center items-center space-y-4 sm:pb-8 pb-6 lg:pb-0 lg:relative lg:z-10">
                    <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-2">
                      <Image
                        src="/images/png/userFriendly.png"
                        className="sm:w-[55px] w-[50px]"
                        width={55}
                        height={55}
                        alt="userFriendly"
                      />
                      <div className="max-w-[95px] text-center">
                        <p className="text-midnight font-normal text-sm">
                          User Friendly
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row xxl:gap-12 xl:gap-8 lg:gap-6 gap-10">
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/support.png"
                          className="sm:w-[50px] w-[45px]"
                          width={50}
                          height={50}
                          alt="support"
                        />
                        <div className="max-w-[95px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Fast Support
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                      <div className="bg-[#fff] shadow-xl xxl:size-[150px] lg:size-[130px] sm:size-[150px] size-[130px] rounded-full flex flex-col justify-center items-center space-y-3">
                        <Image
                          src="/images/png/update.png"
                          className="sm:w-[40px] w-[35px]"
                          width={40}
                          height={40}
                          alt="update"
                        />
                        <div className="max-w-[101px] text-center">
                          <p className="text-midnight font-normal text-sm">
                            Auto Updated
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
