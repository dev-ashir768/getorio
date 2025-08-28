"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

const animationVariantsOne = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

type LinksType = {
  id: number;
  delayOne: number;
  delayTwo: number;
  delayThree: number;
  label: string;
  subLabel: string;
  link: string;
};

const links: LinksType[] = [
  {
    id: 1,
    delayOne: 0,
    delayTwo: 0.2,
    delayThree: 0.4,
    label: "PHP Developer",
    subLabel:
      "We are seeking passionate, driven, and energetic PHP Developers with 1-3 years of experience, capable of effortlessly building applications and writing optimized code.",
    link: "/images/svg/medical.svg",
  },
  {
    id: 2,
    delayOne: 0,
    delayTwo: 0.2,
    delayThree: 0.4,
    label: "Full Stack Developer",
    subLabel:
      "We are looking for a dynamic, motivated, and adaptable Fullstack Developer with 1-3 years of experience, who can seamlessly create applications and produce efficient code.",
    link: "/images/svg/flexibility.svg",
  },
  {
    id: 3,
    delayOne: 0,
    delayTwo: 0.2,
    delayThree: 0.4,
    label: "Project Manager",
    subLabel:
      "We are seeking a passionate and driven Project Manager with 5-7 years of experience, adept at overseeing cross-functional teams, schedules, and financial plans.",
    link: "/images/svg/growing.svg",
  },
];

const Positions = () => {
  return (
    <section className="container w-full md:py-28 py-20 sm:space-y-14 space-y-10">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            Explore the Opportunities
          </h6>
        </div>
        <div className="sm:max-w-[880px] max-w-[315px]">
          <p className="text-charcoal font-normal sm:text-base text-sm">
            Create a better future with us!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-8">
        {links.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-x-6 bg-[#F6F6F6] sm:rounded-3xl rounded-xl md:py-20 sm:py-16 py-9 md:px-20 sm:px-16 px-5 sm::gap-y-16 gap-y-8"
          >
            <div className="space-y-4 max-w-[930px]">
              <motion.h6
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: item.delayOne }}
                className="text-midnight sm:text-3xl text-2xl font-semibold"
              >
                {item.label}
              </motion.h6>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={animationVariantsOne}
                transition={{ duration: 0.5, delay: item.delayTwo }}
                className="text-charcoal sm:text-base text-sm font-normal"
              >
                {item.subLabel}
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: item.delayThree }}
              className="sm:w-max w-full"
            >
              <Button variant="default" size="lg" className="relative" onClick={() => {
                toast.info("Position currently unavailable");
              }}>
                Apply now
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Positions;
