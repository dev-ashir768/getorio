"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { pushToLogin } from "@/lib/PushToLogin";

const ShippingCTA = () => {
  return (
    <section className="container w-full md:py-28 py-20">
      <div className="bg-[#000C19] rounded-3xl orioHalfMidFrame bg-no-repeat bg-contain bg-bottom py-36 lg:px-0 md:px-20 sm:px-16 px-8 flex flex-col justify-center items-center">
        <div className="mx-auto text-center flex flex-col items-center space-y-12">
          <div className="space-y-8 flex flex-col justify-center items-center">
            <div className="lg:max-w-[705px] md:max-w-[495px] max-w-[360px]">
              <h6 className="text-white font-bold md:text-5xl md:leading-tight sm:text-[36px] text-[30px] sm:leading-[50px] leading-[40px] md:tracking-wide">
                Sign up and Start shipping Today with Orio!
              </h6>
            </div>
            <div className="lg:max-w-[660px] md:max-w-[462px] max-w-[355px]">
              <p className="text-white text-opacity-85 font-normal sm:text-lg text-base">
                Sign up now and start shipping with Orio managed shipping your
                reliable partner for seamless, efficient shipping solutions
              </p>
            </div>
          </div>
          <div className="sm:w-max w-full">
            <Button onClick={pushToLogin} variant="default" size="lg" className="relative signup-btn">
              Login
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCTA;
