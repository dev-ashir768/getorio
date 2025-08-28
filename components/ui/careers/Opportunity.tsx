"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const animationVariantsOne = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const animationVariantsTwo = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Opportunity = () => {
  return (
    <section className="container sm:space-y-14 space-y-10 md:py-28 sm:py-28 py-16">
      <div className="mx-auto text-center space-y-5 flex flex-col items-center overflow-x-hidden">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <motion.h6
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsOne}
            transition={{ duration: 0.8 }}
            className="text-midnight font-bold sm:text-[45px] sm:leading-[54px] text-3xl sm:tracking-wide"
          >
            Are you seeking an opportunity?
          </motion.h6>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariantsTwo}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="sm:max-w-[880px] max-w-[345px]"
        >
          <motion.p className="text-charcoal font-normal sm:text-base text-sm">
            At Orio Technologies, our passionate team is devoted to assisting you throughout your journey. Whether you are a new graduate or a seasoned expert looking for fresh challenges, we provide a diverse array of opportunities designed to align with your goals. Begin your path to fulfilling your career ambitions by submitting your application {" "}
            <a
              href="mailto:hr@getorio.com"
              className="text-azure-100 underline underline-offset-2"
            >
              hr@getorio.com
            </a>.
            Discover your potential and uncover thrilling opportunities with us. Together, we can identify the ideal match for your talents and aspirations. Don’t hesitate—your ideal job is just around the corner!
          </motion.p>
        </motion.div>
      </div>
      <div className="grid grid-rows-2 grid-cols-5 sm:gap-4 gap-2">
        <div className="row-span-2 col-span-3 flex flex-col sm:gap-4 gap-2">
          <div>
            <Image
              src="/images/jpg/frameThree.jpg"
              className="sm:rounded-2xl rounded-lg object-cover"
              width={993}
              height={780}
              alt="frameThree"
            />
          </div>
          <div className="flex flex-row sm:gap-4 gap-2">
            <div>
              <Image
                src="/images/jpg/frameFive.jpg"
                className="sm:rounded-2xl rounded-lg object-cover"
                width={486}
                height={392}
                alt="frameFive"
              />
            </div>
            <div>
              <Image
                src="/images/jpg/frameSix.jpg"
                className="sm:rounded-2xl rounded-lg object-cover"
                width={486}
                height={392}
                alt="frameSix"
              />
            </div>
          </div>
        </div>

        <div className="row-span-2 col-span-2 flex flex-col sm:gap-4 gap-2">
          <div className="h-full">
            <Image
              src="/images/jpg/frameFour.jpg"
              className="sm:rounded-2xl rounded-lg object-cover h-full"
              width={703}
              height={584}
              alt="frameFour"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/jpg/frameSeven.jpg"
              className="sm:rounded-2xl rounded-lg object-cover h-full"
              width={703}
              height={584}
              alt="frameSeven"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
