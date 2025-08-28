"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export type LinksType = {
  id: number;
  delay: number;
  rule: string;
};

const links: LinksType[] = [
  {
    id: 1,
    delay: 0.6,
    rule: "Plug Orio into your store in minutes.",
  },
  {
    id: 2,
    delay: 0.8,
    rule: "Sell on Shopify, Magento, WooCommerce, WhatsApp on in-store.",
  },
  {
    id: 3,
    delay: 1,
    rule: "Process E-Commerce orders with more than 20 couriers companies.",
  },
  {
    id: 4,
    delay: 1.2,
    rule: "Manage inventory levels for E-commerce and in store stock.",
  },
  {
    id: 5,
    delay: 1.4,
    rule: "Create customize invoices, shipping labels, pickup list, loadsheets and more.",
  },
  {
    id: 6,
    delay: 1.6,
    rule: "Comes with built-in managed shipping.",
  },
];

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const OneWindow = () => {
  return (
    <section className="container flex lg:flex-row flex-col items-center w-full md:py-28 py-20 gap-10 overflow-x-hidden">
      <div className="xxl:basis-1/2 lg:basis-[45%] basis-[100%] space-y-6">
        <div className="xl:max-w-[500px] md:max-w-[400px] max-w-[314px] space-y-6">
          <motion.h6
            className="text-midnight font-bold md:text-[45px] xl:leading-none text-4xl"
            initial="hidden"
            whileInView="visible"
            
            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
          >
            One Window to Rule them All!
          </motion.h6>
          <motion.p
            className="text-midnight font-medium text-base"
            initial="hidden"
            whileInView="visible"
            
            variants={animationVariantsOne}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Orio is the Fastest Way to Grow your E-Commerce Business
          </motion.p>
        </div>
        <div className="xxl:max-w-[540px] xl:max-w-[500px] w-full">
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
      <div className="xxl:basis-1/2 lg:basis-[55%] basis-[100%] space-y-6">
        <div className="grid grid-rows-1 grid-flow-col justify-items-end sm:gap-6 gap-2">
          <div className="md:w-max w-full flex flex-col items-end sm:gap-5 gap-2">
            <div className="sm:rounded-2xl rounded-xl xxl:max-w-[250px] md:max-w-[230px] max-w-[260px]">
              <Image
                src="/images/gif/cude.gif"
                className="rounded-2xl w-full sm:w-[250px]"
                width={250}
                height={250}
                alt="cube"
                unoptimized
              />
            </div>
            <div className="sm:rounded-2xl rounded-xl xxl:max-w-[250px] md:max-w-[230px] max-w-[260px] w-full bg-midnight sm:px-2 px-[6px] sm:py-3 py-2 flex justify-center sm:h-full">
              <Image
                src="/images/gif/robo.gif"
                className="sm:rounded-xl rounded-lg xl:w-[215px] w-full sm:w-[200px]"
                width={215}
                height={200}
                alt="cude"
                unoptimized
              />
            </div>
          </div>
          <div className="sm:w-full flex flex-col sm:gap-5 gap-2">
            <div className="md:max-w-[440px] max-w-[380px]">
              <Image
                src="/images/jpg/laptopGirl.jpg"
                className="rounded-2xl sm:w-full sm:max-w-full xs:max-w-[190px] max-w-[180px]"
                width={320}
                height={405}
                alt="laptopGirl"
              />
            </div>
            <div className="bg-[#E6F1FF] rounded-2xl sm:px-5 px-4 sm:py-7 py-5 h-full flex items-center sm:max-w-full xs:max-w-[190px] max-w-[180px]">
              <div className="sm:space-y-4 space-y-2 max-w-[286px] flex flex-col justify-start">
                <motion.h6
                  className="text-azure-100 font-bold xl:text-6xl sm:text-5xl text-3xl"
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsOne}
                  transition={{ duration: 0.8 }}
                >
                  120+
                </motion.h6>
                <motion.p
                  className="text-[#000C19] sm:text-base text-[12px] leading-[20px] font-normal"
                  initial="hidden"
                  whileInView="visible"
                  
                  variants={animationVariantsOne}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Online Ecommerce Businesses Trust Orio
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneWindow;
