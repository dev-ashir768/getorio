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
    label: "back-end",
    value: "backend",
  },
  {
    id: 3,
    label: "front-end",
    value: "frontend",
  },
  {
    id: 4,
    label: "mobile",
    value: "mobile",
  },
  {
    id: 5,
    label: "database",
    value: "database",
  },
  {
    id: 6,
    label: "infra",
    value: "infra",
  },
];

const logos: LogosType[] = [
  {
    id: 1,
    label: "php",
    link: "/images/png/php.png",
    category: "backend",
  },
  {
    id: 2,
    label: "nodeJS",
    link: "/images/png/nodeJS.png",
    category: "backend",
  },
  {
    id: 3,
    label: "dotNet",
    link: "/images/png/dotNet.png",
    category: "backend",
  },
  {
    id: 4,
    label: "magento",
    link: "/images/png/magento.png",
    category: "backend",
  },
  {
    id: 5,
    label: "laravel",
    link: "/images/png/laravel.png",
    category: "backend",
  },
  {
    id: 6,
    label: "firebase",
    link: "/images/png/firebase.png",
    category: "backend",
  },
  {
    id: 7,
    label: "java",
    link: "/images/png/java.png",
    category: "backend",
  },
  {
    id: 8,
    label: "wordpress",
    link: "/images/png/wordpress.png",
    category: "backend",
  },
  {
    id: 9,
    label: "codeIgniter",
    link: "/images/png/codeIgniter.png",
    category: "backend",
  },
  {
    id: 10,
    label: "shopifyLogo",
    link: "/images/png/shopifyLogo.png",
    category: "backend",
  },
  {
    id: 11,
    label: "html",
    link: "/images/png/html.png",
    category: "frontend",
  },
  {
    id: 12,
    label: "css",
    link: "/images/png/css.png",
    category: "frontend",
  },
  {
    id: 13,
    label: "tailwindCSS",
    link: "/images/png/tailwindCSS.png",
    category: "frontend",
  },
  {
    id: 14,
    label: "bootstrap",
    link: "/images/png/bootstrap.png",
    category: "frontend",
  },
  {
    id: 15,
    label: "expressJS",
    link: "/images/png/expressJS.png",
    category: "frontend",
  },
  {
    id: 16,
    label: "nextJS",
    link: "/images/png/nextJS.png",
    category: "frontend",
  },
  {
    id: 17,
    label: "js",
    link: "/images/png/js.png",
    category: "frontend",
  },
  {
    id: 18,
    label: "jquery",
    link: "/images/png/jquery.png",
    category: "frontend",
  },
  {
    id: 19,
    label: "angular",
    link: "/images/png/angular.png",
    category: "frontend",
  },
  {
    id: 20,
    label: "nuxt",
    link: "/images/png/nuxt.png",
    category: "frontend",
  },
  {
    id: 21,
    label: "react",
    link: "/images/png/react.png",
    category: "frontend",
  },
  {
    id: 22,
    label: "reactNative",
    link: "/images/png/reactNative.png",
    category: "mobile",
  },
  {
    id: 23,
    label: "flutter",
    link: "/images/png/flutter.png",
    category: "mobile",
  },
  {
    id: 24,
    label: "dart",
    link: "/images/png/dart.png",
    category: "mobile",
  },
  {
    id: 25,
    label: "mangoDB",
    link: "/images/png/mangoDB.png",
    category: "database",
  },
  {
    id: 26,
    label: "mysql",
    link: "/images/png/mysql.png",
    category: "database",
  },
  {
    id: 27,
    label: "oracel",
    link: "/images/png/oracel.png",
    category: "database",
  },
  {
    id: 28,
    label: "known",
    link: "/images/png/known.png",
    category: "infra",
  },
  {
    id: 29,
    label: "azure",
    link: "/images/png/azure.png",
    category: "infra",
  },
  {
    id: 30,
    label: "aws",
    link: "/images/png/aws.png",
    category: "infra",
  },
];

const WorkingTechnologies = () => {
  return (
    <section className="container w-full sm:py-28 py-20 md:space-y-14 sm:space-y-9 space-y-7">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            Technologies We Work On
          </h6>
        </div>
      </div>
      <Tabs defaultValue="all">
        <TabsList className="flex flex-row flex-wrap bg-transparent p-0 xs:gap-3 md:mb-14 sm:mb-16 mb-20">
          {tabs.map((item) => (
            <TabsTrigger
              key={item.id}
              className="font-medium px-4 py-1 capitalize text-midnight text-lg data-[state=active]:bg-azure-100 data-[state=active]:text-white data-[state=active]:rounded-full"
              value={item.value}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.value}>
            <div className="flex flex-wrap justify-center mx-auto max-w-7xl xs:gap-10 gap-6">
              {logos
                .filter(
                  (logo) => tab.value === "all" || logo.category === tab.value
                )
                .map((logo) => (
                  <motion.div
                    key={logo.id}
                    className="lg:w-[100px] lg:h-[100px] flex justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={logo.link}
                      className="sm:w-[70px] w-[50px]"
                      width={70}
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

export default WorkingTechnologies;
