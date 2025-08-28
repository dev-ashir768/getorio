"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";

type LinksType = {
  id: number;
  name: string;
  comment: string;
  designation: string;
  rating: number;
  link: string;
};

const links: LinksType[] = [
  {
    id: 1,
    name: "Mahnoor",
    comment:
      "Switching to Orio has been a game-changer for our ecommerce business. The software has made it incredibly easy to manage our online store from order processing to inventory management and shipping.",
    designation: "Head of customer support",
    rating: 4,
    link: "/images/png/avatar-1.png",
  },
  {
    id: 2,
    name: "Shahzaib Khan",
    comment:
      "As the owner of Shah Chemicals, I have always prioritized efficiency and reliability in our operations. Since we started using Orio OMS for our online order processing and booking automation, our workflow has significantly improved.",
    designation: "Cheif Executive Officer",
    rating: 5,
    link: "/images/png/avatar-2.png",
  },
  {
    id: 3,
    name: "Ali Okasha",
    comment:
      "Orio has made it incredibly easy to handle bookings with multiple couriers, ensuring that our deliveries are timely and efficient.",
    designation: "Chief Financial Officer",
    rating: 4,
    link: "/images/png/avatar-3.png",
  },
  {
    id: 4,
    name: "Mursaleen Ahmed",
    comment:
      "ORIO has consistently delivered exceptional software solutions that have significantly improved our business processes. Specializing in order management and return ratio reduction systems, ORIOs offerings have streamlined our operations and enhanced efficiency.",
    designation: "Chief Financial Officer",
    rating: 4,
    link: "/images/png/avatar-4.png",
  },
  {
    id: 5,
    name: "Mafooq Ahmed",
    comment:
      "Using Orio Order Management System has greatly improved our operations. Its user-friendly, speeds up order processing, and reduces errors. Inventory management and return rates have improved significantly. The Customer support team is excellent. Highly recommended!",
    designation: "Co-Founder",
    rating: 5,
    link: "/images/png/avatar-5.png",
  },
  {
    id: 5,
    name: "Salah Paracha",
    comment:
      "We’ve been using Orio Technologies for a few months now, and I must say their service is top-notch. A special thanks to Syed Ayyan Ali for his consistent support and clear communication. Whether it’s handling bulk shipments or urgent deliveries, Syed makes sure everything is handled professionally. Orio is definitely a courier service we trust.",
    designation: "Cheif Executive Officer",
    rating: 5,
    link: "/images/png/avatar-6.png",
  },
  {
    id: 6,
    name: "Shahrukh",
    comment:
      "We’ve had a great experience with Orio. The service is reliable, and our account manager Ayyan is incredibly cooperative and quick to resolve any issues. A dependable partner for our brand!",
    designation: "Chief Executive Officer",
    rating: 5,
    link: "/images/png/avatar-7.png",
  },
  {
    id: 7,
    name: "Faheera",
    comment:
      "Whether you have a single parcel or more, Orio offers same day pickups without any hassle. My manager Ayan Ali replies promptly to all my queries and I find him always available to help me. Moreover, for a new startup, I don't face payment delays, which keep my work going in flow. Highly recommended.",
    designation: "Cheif Executive Officer",
    rating: 5,
    link: "/images/png/avatar-8.png",
  },
  {
    id: 8,
    name: "Wajhi Abbass",
    comment:
      "I had a great experience with this delivery company. Their service is fast, reliable, and professional—everything was delivered on time and in perfect condition. A big thank you to Ayan, the salesperson who handled our account. He was extremely helpful, always available for questions, and made sure everything went smoothly from start to finish. His customer service was outstanding and really made a difference. Highly recommend this company, and if you get a chance to work with Ayan, you’re in good hands!",
    designation: "Operations Director",
    rating: 5,
    link: "/images/png/avatar-9.png",
  },
  {
    id: 9,
    name: "Umer Ahmed",
    comment:
      "I recently had the pleasure of working with orio technology, and I must say, the experience was smooth and efficient from start to finish. A special mention goes to Ayan, the salesperson who handled our account with great professionalism and attention to detail. Ayan was not only prompt in his responses but also took the time to understand our business needs and recommend the best courier solutions accordingly. Whether it was local deliveries or nationwide shipments, everything was managed seamlessly. The pickup and delivery times were accurate, packages were handled with care, and tracking updates were consistently reliable.What stood out the most was Ayan’s customer service — he was always available to address our queries and ensured everything went as planned. His support has definitely made our logistics process much easier and stress-free.Highly recommend Orio companies for anyone looking for dependable courier services, and if you get to work with Ayan, consider yourself in good hands!",
    designation: "Cheif Executive Officer",
    rating: 5,
    link: "/images/png/avatar-10.png",
  },
  {
    id: 10,
    name: "Omer Faooq",
    comment:
      "We have been using ORIO from past several months now. Never been happier as their system has the best automation, very streamlined plus shipping rates are also very competitive. Timely support is provided. Elsa Rahim is a super star in their team, very responsive and is always there to help and assist on all day to day matters. If you're thinking about choosing ORIO, ask for Elsa, she is a CHAMP !!!",
    designation: "Cheif Executive Officer",
    rating: 5,
    link: "/images/png/avatar-11.png",
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

const Feedback = () => {
  return (
    <section className="container space-y-9 lg:py-28 py-20 overflow-x-hidden">
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-8">
        <div className="space-y-4">
          <div className="sm:max-w-[470px] max-w-[280px] mr-auto">
            <motion.h6
              className="text-midnight font-bold sm:text-[45px] sm:leading-none text-3xl sm:tracking-wide"
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.8 }}
            >
              Feedback From Our Clients
            </motion.h6>
          </div>
          <div className="lg:max-w-[545px] max-w-[350px] mr-auto">
            <motion.p
              className="text-midnight font-normal text-base"
              initial="hidden"
              whileInView="visible"
              variants={animationVariantsOne}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Why customers love working with us some of our customers words
            </motion.p>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col md:gap-8 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link target="_blank" className="flex flex-row items-center gap-x-3" href="https://www.google.com/search?q=orio+technologies&oq=orio+technologies&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPTIGCAQQLhhA0gEIMjk2NmowajGoAgiwAgE&sourceid=chrome&ie=UTF-8#lrd=0x3eb339de5304a9b1:0xf83a3c2aa3b034a4,3,,,,">
              <div>
                <Image
                  src="/images/svg/google.svg"
                  width={40}
                  height={40}
                  alt="google"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-row gap-x-2">
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Image
                        key={index}
                        src="/images/svg/start.svg"
                        width={15}
                        height={15}
                        alt="orio rating on google"
                      />
                    ))}
                </div>
                <div>
                  <p className="font-medium text-[11px] text-midnight">
                    4.7 rating on google
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animationVariantsTwo}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link target="_blank" className="flex flex-row items-center gap-x-3" href="https://www.facebook.com/profile.php?id=100083173600026&sk=reviews">
              <div>
                <Image
                  src="/images/svg/facebook.svg"
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-row gap-x-2">
                  {Array(4)
                    .fill(0)
                    .map((_, index) => (
                      <Image
                        key={index}
                        src="/images/svg/start.svg"
                        width={15}
                        height={15}
                        alt="orio rating on facebook"
                      />
                    ))}
                </div>
                <div>
                  <p className="font-medium text-[11px] text-midnight">
                    4.3 rating on facebook
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="space-y-5">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            el: ".swiper-custom-pagination",
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {links.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="xxl:h-[383px] h-[405px]">
                <div className="bg-[#F6F6F6] xxl:px-4 px-6 py-8 rounded-2xl flex flex-col items-center xxl:h-[342px] h-[360px]">
                  <div className="flex flex-col space-y-8">
                    <div className="max-w-[403px] xxl:h-[148px] h-[170px] xxl:space-y-4 space-y-3">
                      <h6 className="font-bold text-xl text-midnight text-center">
                        {item.name}
                      </h6>
                      <p className="text-charcoal font-normal text-[13px] text-center leading-[26px] xxl:line-clamp-4 line-clamp-5">
                        {item.comment}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h6 className="font-semibold text-sm text-midnight text-center">
                        {item.designation}
                      </h6>
                      <div className="flex flex-row gap-x-2 justify-center">
                        {Array(item.rating)
                          .fill(0)
                          .map((_, index) => (
                            <Image
                              key={index}
                              src="/images/svg/start.svg"
                              width={15}
                              height={15}
                              alt="google"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <Avatar className="mt-[30px] size-[95px]">
                    <AvatarImage src={item.link} alt={item.name} />
                    <AvatarFallback>OR</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative text-center">
          <div className="swiper-custom-pagination" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
