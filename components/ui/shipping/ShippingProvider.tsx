import Image from "next/image";

const ShippingProvider = () => {
  return (
    <section className="bg-[#000C19] w-full py-16">
      <div className="container h-full">
        <div className="mx-auto text-center flex flex-col items-center">
          <div className="space-y-4 flex flex-col justify-center items-center">
            <div className="max-w-full space-y-4">
              <h6 className="text-white font-bold sm:text-5xl sm:leading-tight text-3xl sm:tracking-wide">
                Connected with All Shipping Providers
              </h6>
              <p className="text-white font-bold sm:text-2xl text-lg">
                Domestic & International
              </p>
            </div>
            <div className="lg:max-w-[660px] md:max-w-[525px] sm:max-w-[345px] max-w-[325px]">
              <p className="text-white text-opacity-85 font-normal sm:text-lg text-base">
                Orio features an integrated one-click shipping option, allowing you to select from various domestic and international carriers.
              </p>
            </div>
          </div>
        </div>
        <div className="my-16 mx-auto max-w-[1200px] relative">
          <div
            className="
                animate-circuit-pulse
                [--circuit-pulse-size:2em]
                lg:[--circuit-pulse-size:5em]
                rounded-full
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-16 h-16 md:w-32 md:h-32 p-4
            "
          ></div>
          <div
            className="
                animation-delay-4s
                animate-circuit-pulse
                [--circuit-pulse-size:2em]
                lg:[--circuit-pulse-size:5em]
                rounded-full
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-16 h-16 md:w-32 md:h-32 p-4
            "
          ></div>
          <div
            className="
                animation-delay-2s
                animate-circuit-pulse
                bg-[#000C19] rounded-full
                flex items-center justify-center
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-16 h-16 md:w-32 md:h-32 p-4
            "
          >
            <Image
              src="/images/png/logoInitial.png"
              width={50}
              height={50}
              alt="orio"
            />
          </div>
          <Image
            className="block w-full max-w-[1200px]"
            width={1152}
            height={495}
            src="/images/svg/shippingProvider.svg"
            alt="elo"
          />
        </div>
      </div>
    </section>
  );
};

export default ShippingProvider;
