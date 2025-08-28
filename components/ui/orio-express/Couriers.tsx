"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";

type TabsType = {
  id: number;
  label: string;
  value: string;
};

type LogosType = {
  id: number;
  label: string;
  link: string;
  category: string;
};

const tabs: TabsType[] = [
  {
    id: 1,
    label: "all",
    value: "all",
  },
  {
    id: 2,
    label: "domestic",
    value: "domestic",
  },
  {
    id: 3,
    label: "international",
    value: "international",
  },
];

const logos: LogosType[] = [
  {
    id: 1,
    label: "tcs",
    link: "/images/svg/couriers/tcs.svg",
    category: "international",
  },
  {
    id: 2,
    label: "blue_ex",
    link: "/images/svg/couriers/blue_ex.svg",
    category: "domestic",
  },
  {
    id: 3,
    label: "bykea",
    link: "/images/svg/couriers/bykea.svg",
    category: "domestic",
  },
  {
    id: 4,
    label: "call_courier",
    link: "/images/svg/couriers/call_courier.svg",
    category: "domestic",
  },
  {
    id: 5,
    label: "camel",
    link: "/images/svg/couriers/camel.svg",
    category: "international",
  },
  {
    id: 6,
    label: "courix",
    link: "/images/svg/couriers/courix.svg",
    category: "international",
  },
  {
    id: 7,
    label: "dhl",
    link: "/images/svg/couriers/dhl.svg",
    category: "international",
  },
  {
    id: 8,
    label: "e_shipper",
    link: "/images/svg/couriers/e_shipper.svg",
    category: "international",
  },
  {
    id: 9,
    label: "fed_ex",
    link: "/images/svg/couriers/fed_ex.svg",
    category: "international",
  },
  {
    id: 10,
    label: "fly_courier",
    link: "/images/svg/couriers/fly_courier.svg",
    category: "domestic",
  },
  {
    id: 11,
    label: "imile",
    link: "/images/svg/couriers/imile.svg",
    category: "international",
  },
  {
    id: 12,
    label: "leopard",
    link: "/images/svg/couriers/leopard.svg",
    category: "domestic",
  },
  {
    id: 13,
    label: "mnp",
    link: "/images/svg/couriers/mnp.svg",
    category: "domestic",
  },
  {
    id: 14,
    label: "naqel_express",
    link: "/images/svg/couriers/naqel_express.svg",
    category: "international",
  },
  {
    id: 15,
    label: "post_ex",
    link: "/images/svg/couriers/post_ex.svg",
    category: "domestic",
  },
  {
    id: 16,
    label: "rider",
    link: "/images/svg/couriers/rider.svg",
    category: "domestic",
  },
  {
    id: 17,
    label: "shipa",
    link: "/images/svg/couriers/shipa.svg",
    category: "international",
  },
  {
    id: 18,
    label: "sky_net",
    link: "/images/svg/couriers/sky_net.svg",
    category: "international",
  },
  {
    id: 19,
    label: "aramax",
    link: "/images/svg/couriers/aramax.svg",
    category: "domestic",
  },
  {
    id: 20,
    label: "trax",
    link: "/images/svg/couriers/trax.svg",
    category: "frontend",
  },
  {
    id: 21,
    label: "ups",
    link: "/images/svg/couriers/ups.svg",
    category: "frontend",
  },
];

const Couriers = () => {
  return (
    <section className="container w-full sm:py-28 py-20 sm:space-y-7 space-y-6">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            Efficient Integration with 3PL Shipping Providers
          </h6>
        </div>
        <div className="sm:max-w-[1080px] max-w-[450px]">
          <p className="text-charcoal font-normal text-[16px] leading-[26px]">
            Orio Express links you to a vast array of shipping options, featuring a comprehensive network of both domestic and international carriers. With Orio Express, you can easily oversee your logistics operations via a single platform that enables one-click shipping.
          </p>
        </div>
      </div>
      <Tabs defaultValue="all">
        <TabsList className="flex flex-row flex-wrap bg-transparent p-0 xs:gap-3 mb-7">
          {tabs.map((item) => (
            <TabsTrigger
              key={item.id}
              className="font-medium px-4 py-1 capitalize text-midnight sm:text-lg text-base data-[state=active]:bg-azure-100 data-[state=active]:text-white data-[state=active]:rounded-full"
              value={item.value}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.value}>
            <div className="flex flex-wrap justify-center mx-auto max-w-[900px] lg:gap-x-8 sm:gap-x-12 gap-x-3 lg:gap-y-5 sm:gap-y-8 gap-y-8">
              {logos
                .filter(
                  (logo) => tab.value === "all" || logo.category === tab.value
                )
                .map((logo) => (
                  <motion.div
                    key={logo.id}
                    className="lg:w-[120px] lg:h-[80px] flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={logo.link}
                      className="sm:max-w-full max-w-[80%]"
                      width={100}
                      height={71}
                      alt={logo.label}
                    />
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Couriers;
