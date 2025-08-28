"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type LinksType = {
  id: number;
  delay: number;
  label: string;
  link: string;
  width: number;
  height: number;
};

const links: LinksType[] = [
  {
    id: 1,
    delay: 0.8,
    label: "shopify",
    link: "/images/png/shopify.png",
    width: 44,
    height: 44,
  },
  {
    id: 2,
    delay: 1,
    label: "prestaShop",
    link: "/images/png/prestaShop.png",
    width: 42,
    height: 44,
  },
  {
    id: 3,
    delay: 1.2,
    label: "woocommerce",
    link: "/images/png/woocommerce.png",
    width: 65,
    height: 48,
  },
  {
    id: 4,
    delay: 1.4,
    label: "whatsapp",
    link: "/images/png/whatsapp.png",
    width: 49,
    height: 44,
  },
  {
    id: 5,
    delay: 1.6,
    label: "custom",
    link: "/images/png/custom.png",
    width: 40,
    height: 44,
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsThree = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1 },
};

const StreamlineNBenefits = () => {
  return (
    <section className="relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-4 gap-y-12 lg:gap-y-0 overflow-x-hidden">
          <div className="bg-[#FF731C] rounded-2xl flex flex-col justify-between overflow-hidden h-[650px] -z-10">
            <div className="absolute left-0 xxl:top-[54%] lg:top-[57%] md:top-[27%] top-[30%]">
              <Image
                src="/images/png/elementTwo.png"
                className="xxl:w-[300px] lg:w-[280px] md:w-[300px] sm:w-[250px] w-[140px]"
                width={300}
                height={500}
                alt="elementTwo"
              />
            </div>
            <div className="lg:px-8 md:px-16 sm:px-[40px] px-5 pt-10 pb-6 space-y-4">
              <div className="max-w-[340px]">
                <motion.h6
                  className="text-white font-bold sm:text-[35px] text-[30px] leading-[40px]"
                  initial="hidden"
                  whileInView="visible"

                  variants={animationVariantsOne}
                  transition={{ duration: 0.8 }}
                >
                  Streamline your <br /> E-commerce Store with Orio
                </motion.h6>
              </div>
              <div className="max-w-[540px]">
                <motion.p
                  className="text-white font-normal text-base leading-[23px]"
                  initial="hidden"
                  whileInView="visible"

                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Orio easily connects with your website. It offers advanced plugins and extensions for more than 30 top e-commerce platforms.
                </motion.p>
              </div>
              <div className="bg-white bg-opacity-50 rounded-2xl py-4 sm:px-6 px-4 flex flex-row justify-center lg:gap-x-6 sm:gap-x-10 gap-x-4 xl:w-max lg:w-full md:w-max">
                {links.map((item, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsThree}
                    transition={{ duration: 0.5, delay: item.delay }}
                    className="w-max h-auto xxl:px-2 sm:px-1 flex justify-center items-center"
                  >
                    <Image
                      src={item.link}
                      width={item.width}
                      height={item.height}
                      alt={item.label}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              className="ml-auto xxl:px-20 xl:px-14 sm:px-12 px-6"
              initial="hidden"
              whileInView="visible"

              variants={animationVariantsTwo}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Image
                src="/images/png/phoneMockup-1.png"
                width={250}
                height={250}
                className="xxl:w-[250px] lg:w-[220px] sm:w-[250px] w-[180px]"
                alt="e-commerce platforms phone mockup 1"
              />
            </motion.div>
          </div>
          <div className="bg-[#CFF8E7] rounded-2xl space-y-6 flex flex-col justify-between overflow-hidden h-[650px] z-10">
            <div className="lg:px-8 md:px-16 sm:px-[40px] px-5 py-10 space-y-4">
              <div className="max-w-[340px]">
                <motion.h6
                  className="text-midnight font-semibold text-[22px] leading-[28px]"
                  initial="hidden"
                  whileInView="visible"

                  variants={animationVariantsOne}
                  transition={{ duration: 0.8 }}
                >
                  Our Key Features & Benefits:
                </motion.h6>
              </div>
              <div className="max-w-[530px]">
                <ul className="space-y-3">
                  <motion.li
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex text-[16px] leading-[24px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    Efficient API Integration saves time and reduce costs with
                    API integrations
                  </motion.li>
                  <motion.li
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex text-[16px] leading-[24px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    Empower Business Intelligence leverage data to drive
                    smarter, data-driven business decisions.
                  </motion.li>
                  <motion.li
                    initial="hidden"
                    whileInView="visible"

                    variants={animationVariantsOne}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex text-[16px] leading-[24px] text-charcoal"
                  >
                    <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                    Manage product catalogs, inventory, and orders from multiple
                    e-commerce platforms.
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="ml-auto relative">
              <motion.div
                initial="hidden"
                whileInView="visible"

                variants={animationVariantsTwo}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Image
                  src="/images/png/phoneMockup-2.png"
                  width={550}
                  height={550}
                  className="z-10 xxl:w-[550px] xl:w-[480px] lg:w-[430px] sm:w-[480px] w-[340px]"
                  alt="e-commerce platforms phone mockup 2"
                />
              </motion.div>
              <Image
                src="/images/gif/signals.gif"
                width={120}
                height={120}
                className="rounded-2xl absolute right-[20%] top-0 -z-10 sm:w-[120px] w-[80px]"
                alt="signals-1"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreamlineNBenefits;
