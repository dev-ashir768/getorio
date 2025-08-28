"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { pushToLogin } from "@/lib/PushToLogin";

const ShippingWithOrio = () => {
  return (
    <section className="container w-full space-y-10">
      <div className="mx-auto text-center space-y-4 flex flex-col items-center">
        <div className="md:max-w-[640px] sm:max-w-[428px] max-w-[290px]">
          <h6 className="text-midnight font-bold sm:text-[48px] sm:leading-[55px] text-3xl sm:tracking-wide">
            Start Shipping with Orio
          </h6>
        </div>
        <div className="sm:max-w-[600px] max-w-[345px]">
          <p className="text-charcoal font-normal sm:text-lg text-base">
            Simple and easy to get you started
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center lg:gap-8 gap-6">
        <div className="bg-[#E6F1FF] w-full xl:w-[480px] lg:px-8 sm:px-6 px-5 py-12 rounded-3xl">
          <div className="lg:space-y-6 space-y-4">
            <div>
              <h6 className="lg:text-3xl text-2xl font-semibold text-midnight">
                Shipping within city
              </h6>
            </div>
            <div>
              <h6 className="text-xl font-semibold text-charcoal">
                Starting from
              </h6>
            </div>
          </div>
          <Separator
            orientation="horizontal"
            className="mt-6 mb-8 bg-black bg-opacity-20"
          />
          <div className="lg:space-y-8 space-y-6">
            <p className="lg:text-xl text-lg text-charcoal font-normal">
              Rs
              <span className="lg:text-6xl text-5xl font-semibold text-azure-100 lg:px-2 px-1">
                122
              </span>
              for 1st kg
            </p>
            <p className="lg:ext-xl text-lg text-charcoal font-normal">
              Rs
              <span className="lg:text-6xl text-5xl font-semibold text-azure-100 lg:px-2 px-1">
                49
              </span>
              for each additional kg
            </p>
          </div>
        </div>
        <div className="bg-[#E6F1FF] w-full xl:w-[480px] lg:px-8 sm:px-6 px-5 py-12 rounded-3xl">
          <div className="lg:space-y-6 space-y-4">
            <div>
              <h6 className="lg:text-3xl text-2xl font-semibold text-midnight">
                Shipping - city to city
              </h6>
            </div>
            <div>
              <h6 className="text-xl font-semibold text-charcoal">
                Starting from
              </h6>
            </div>
          </div>
          <Separator
            orientation="horizontal"
            className="mt-6 mb-8 bg-black bg-opacity-20"
          />
          <div className="space-y-8">
            <p className="lg:ext-xl text-lg text-charcoal font-normal">
              Rs
              <span className="lg:text-6xl text-5xl font-semibold text-azure-100 lg:px-2 px-1">
                172
              </span>
              for 1st kg
            </p>
            <p className="lg:ext-xl text-lg text-charcoal font-normal">
              Rs
              <span className="lg:text-6xl text-5xl font-semibold text-azure-100 lg:px-2 px-1">
                60
              </span>
              for each additional kg
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <div className="md:max-w-[600px] max-w-[390px]">
          <p className="text-center text-lg text-charcoal font-normal">
            Or use your own shipping account with Orio{" "}
            <a
              href="https://oms.getorio.com"
              target="_blank"
              className="text-azure-100 underline underline-offset-2"
            >
              OMS
            </a>{" "}
            Rs 20 per order
          </p>
        </div>
        <div className="sm:w-max w-full">
          <Button
            variant="default"
            onClick={pushToLogin}
            size="lg"
            className="relative signup-btn"
          >
            Login
            <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShippingWithOrio;
