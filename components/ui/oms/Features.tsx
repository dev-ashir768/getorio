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
    <section className="relative md:pb-28 pb-20">
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
                      Plugs into your Store in Minutes
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
                      Orio OMS efficiently integrates with your store in
                      minutes, streamlining order management with ease and
                      efficiency. Experience a hassle-free order management
                      system that enhances your online orders processing
                      workflow, allowing you to just focus on marketing while
                      Orio handles the rest.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10 overflow-x-hidden">
                <div className="absolute right-0 lg:top-[3%] top-[4%] -z-10">
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

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/multipleStores.png"
                      width={530}
                      height={685}
                      alt="mobile_illustration-1"
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
                      Unlock a Complete View of your Business
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
                      Experience unparalleled insights and reporting that drive
                      your business forward. With comprehensive data at your
                      fingertips, you can make informed decisions quickly and
                      efficiently. ORIO offers detailed logistics performance
                      reports, customer ratings, and identifies best-performing
                      couriers and cities. Manage costs by city, province, and
                      area with ease. Let our insights empower your strategy and
                      elevate your business to new heights.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[13%] top-[14%] -z-10">
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
                      src="/images/png/statsGirl.png"
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
                  <div className="lg:max-w-[560px] max-w-[420px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Auto Tracking Number Generation
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
                      Allows you to book each order automatically to courier as
                      soon as its processed. This ensures that every shipment is
                      easily booked, providing both you and your customers with
                      real visibility into the delivery status. Furthermore,
                      this feature seamlessly integrates with your order
                      processing eliminating the need for manual intervention
                      and reducing the risk of human error in the booking
                      process. By booking of shipments, you can expedite the
                      fulfillment process, leading to faster order dispatchment
                      and satisfaction.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[23%] md:top-[24%] top-[23%] -z-10">
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
                      src="/images/png/autoTracking.png"
                      width={530}
                      height={685}
                      alt="mobile_illustration-1"
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
                      Courier Outstanding Amount
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
                      Stay on top of your financial obligations to courier services with this useful tool. Easily monitor outstanding payments owed to couriers, helping you maintain positive relationships and prevent disruptions in your shipping. By keeping track of pending payments, you can manage your budget and cash flow efficiently, ensuring timely settlements. This proactive approach strengthens trust with courier partners, establishing a solid foundation for smooth, long-term logistics operations.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[33%] md:top-[34%] sm:top-[33%] top-[34%] -z-10 overflow-x-hidden">
                  <Image
                    src="/images/png/elementSix.png"
                    className="sm:w-[420px] w-[380px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
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
                      src="/images/png/outstandingAmount.png"
                      width={532}
                      height={693}
                      alt="outstandingAmount"
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
                      Generate Loadsheet for Any Courier
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
                      Book shipments efficiently by generating load sheets
                      tailored to the requirements of different courier
                      services. This feature optimizes the packing and
                      organization of orders, making it easier to manage large
                      volumes of shipments and minimize errors during dispatch.
                    </motion.p>
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      This feature not only enhances the efficiency of your
                      packing process but also ensures that each shipment is
                      compliant with the specific packaging guidelines of
                      different courier services. By providing detailed
                      instructions and requirements for each shipment, it helps
                      to streamline your logistics operations and maintain high
                      standards of service quality.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[40%] sm:top-[42%] top-[44%] -z-10">
                  <Image
                    src="/images/png/elementSeven.png"
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

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <Image
                      src="/images/png/loadsheet.png"
                      className=""
                      width={530}
                      height={685}
                      alt="mobile_illustration-1"
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
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Print Shipping Labels for Any Courier
                    </motion.h6>
                  </div>
                  <div className="max-w-[585px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 1 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Make your shipping process easier by printing labels for all courier services. This removes the need for manual booking, ensuring each order is correctly booked and sent to your warehouse team. By printing standardized labels for all couriers, you reduce errors and confusion during dispatch. This simple approach saves time, improves efficiency, and helps keep your logistics running smoothly.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[52%] sm:top-[53%] top-[55%] -z-10">
                  <Image
                    src="/images/png/elementEight.png"
                    className="sm:w-[350px] w-[340px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row xxl:gap-12 xl:gap-8 lg:gap-6 gap-10 pb-8">
                      <motion.div
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsTwo}
                        transition={{ duration: 0.8 }}
                        className="sm:max-w-[135px] max-w-[100px]"
                      >
                        <Image
                          src="/images/png/labelTCS.png"
                          width={150}
                          height={150}
                          alt="labelTCS"
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        whileInView="visible"

                        variants={animationVariantsTwo}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="sm:max-w-[135px] max-w-[100px]"
                      >
                        <Image
                          src="/images/png/labelBlueEx.png"
                          width={150}
                          height={150}
                          alt="labelBlueEx"
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsTwo}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="sm:max-w-[135px] max-w-[100px]"
                    >
                      <Image
                        src="/images/png/labelLeopards.png"
                        width={150}
                        height={150}
                        alt="labelLeopards"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 order-last lg:order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[530px] max-w-[400px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.8 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Print Invoices for your Store
                    </motion.h6>
                  </div>
                  <div className="max-w-[539px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Create professional-looking invoices for all orders processed through your store. These invoices provide customers with a detailed breakdown of their purchases, including itemized lists, pricing information, and payment details, helping to build trust and transparency in your brand. Moreover, customizable invoice templates allow you to brand your invoices with your logo and company details, enhancing brand visibility and professionalism. By providing comprehensive purchase summaries, you empower customers with the information they need for easy reference and reconciliation, fostering positive customer experiences and repeat business.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 xl:top-[60%] sm:top-[63%] top-[65%] -z-10">
                  <Image
                    src="/images/png/elementNine.png"
                    className="w-[420px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-[#FF731C] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/invoice.png"
                      width={530}
                      height={685}
                      alt="invoice"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-center lg:items-center lg:space-y-0 space-y-10 overflow-x-hidden">
              <div className="lg:basis-1/2 basis-full space-y-8 lg:order-last order-first">
                <div className="space-y-6">
                  <div className="lg:max-w-[500px] max-w-[560px]">
                    <motion.h6
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-midnight font-bold xl:text-[45px] xl:leading-[52px] sm:text-4xl text-3xl"
                    >
                      Bulk Print Multiple CNs and Invoices on a Single Page
                    </motion.h6>
                  </div>
                  <div className="max-w-[546px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Save time and resources by printing multiple consignment notes (CNs) and invoices on one page. This feature simplifies your printing process, making it easy to generate invoice and tracking numbers for shipments and orders all at once. It also helps reduce paper waste and cuts down on manual work, improving efficiency. By putting CNs and invoices on a single page, you make your shipping and booking processes more organized and accurate.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute left-[-60px] lg:top-[73%] sm:top-[74%] top-[76%] -z-10">
                  <Image
                    src="/images/png/elementTen.png"
                    className="w-[300px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:mr-auto lg:mx-0 mx-auto bg-gradient-to-br from-[#004596] to-[#0074FC] rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden flex flex-col justify-end">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src="/images/png/bulkPrint.png"
                      width={532}
                      height={693}
                      alt="bulkPrint"
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
                      Address Keywords Detection
                    </motion.h6>
                  </div>
                  <div className="max-w-[525px]">
                    <motion.p
                      initial="hidden"
                      whileInView="visible"

                      variants={animationVariantsOne}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-charcoal font-normal text-[16px] leading-[26px]"
                    >
                      Our Address Keywordsfeature helps identify invalid words in addresses, reducing return rates. By automatically spotting incorrect or incomplete address details in orders, this feature ensures timely and accurate deliveries, cutting down on the need for manual address checks. Improving the accuracy of delivery addresses boosts your delivery success rate and lowers the costs of returned shipments.
                    </motion.p>
                  </div>
                </div>
              </div>
              <div className="lg:basis-1/2 basis-full order-last lg:order-first z-10">
                <div className="absolute right-0 lg:top-[83%] sm:top-[84%] top-[86%] -z-10">
                  <Image
                    src="/images/png/elementEleven.png"
                    className="lg:w-[420px] w-[310px]"
                    width={300}
                    height={500}
                    alt="elementTwo"
                  />
                </div>
                <div className="lg:ml-auto lg:mx-0 mx-auto bg-midnight rounded-3xl xxl:max-w-[420px] max-w-[380px] xxl:min-h-[538px] sm:min-h-[491px] min-h-[392px] w-full overflow-hidden overflow-x-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Image
                      src="/images/png/addressKeywords.png"
                      width={530}
                      height={685}
                      alt="addressKeywords"
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
                    Empower your E-Commerce with ORIO
                  </h6>
                </div>
                <div className="text-center">
                  <p className="text-charcoal font-normal text-[16px] leading-[26px]">
                    Efficiently manage orders with our advanced OMS solution
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
                  <div className="absolute left-[50%] translate-x-[-50%] bottom-0 roundedDots bg-no-repeat bg-contain bg-left-top bg-[#FF731C] z-0 xxl:w-[450px] xl:w-[400px] lg:w-[250px] sm:w-[350px] w-[250px] xl:h-[330px] lg:h-[202px] sm:h-[272px] h-[220px] rounded-t-2xl"></div>
                  <Image
                    src="/images/png/sitWithLaptop.png"
                    className="mx-auto relative z-10 xl:w-[450px] w-[410px]"
                    width={450}
                    height={467}
                    alt="sitWithLaptop"
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
