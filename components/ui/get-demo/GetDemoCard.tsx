"use client";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { poppins } from "@/app/fonts";
import GetDemoDate from "@/components/ui/get-demo/GetDemoDate";
import { useState } from "react";
import GetDemoForm from "@/components/ui/get-demo/GetDemoForm";
import GetDemoTime from "@/components/ui/get-demo/GetDemoTime";
import GetDemoTimeZone from "@/components/ui/get-demo/GetDemoTimeZone";
import {
  ITimezoneOption,
  useTimezoneSelect,
  allTimezones,
} from "react-timezone-select";

const GetDemoCard = () => {
  const labelStyle = "original";
  const { options, parseTimezone } = useTimezoneSelect({
    labelStyle,
    timezones: allTimezones,
  });
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezoneOption>(
    parseTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  );

  const [date, setDate] = useState<Date | undefined>();
  const [formShow, setFormShow] = useState<boolean>(false);
  const [time, setTime] = useState<string | null>(null);

  return (
    <div className="py-20">
      <div
        className={`w-full flex justify-center items-center ${poppins.className}`}
      >
        <div
          className={`flex md:flex-row flex-col bg-white border border-black border-opacity-20 shadow rounded-2xl 
            ${date
              ? formShow
                ? "lg:w-[750px] w-full"
                : "xl:w-[1000px] w-full"
              : "lg:w-[750px] w-full"
            }`}
        >
          <div
            className={`${date
                ? formShow
                  ? "md:w-[45%]"
                  : "md:w-[35%]"
                : "md:w-[50%] w-full"
              }`}
          >
            <div className="flex items-center px-6 py-12 relative">
              <div
                className={`absolute border border-[#989898] rounded-full p-2 cursor-pointer 
                  ${date ? "flex" : "hidden"}
                  `}
                onClick={() => {
                  setDate(undefined);
                  setFormShow(false);
                }}
              >
                <Image
                  src="/images/svg/arrorLeft.svg"
                  width={18}
                  height={18}
                  alt="arrorLeft"
                />
              </div>
              <div className="w-full">
                <Image
                  src="/images/svg/logo.svg"
                  className="mx-auto"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </div>
            </div>
            <Separator className="bg-[#CCCCCC]" orientation="horizontal" />
            <div className="space-y-8 py-6 px-6">
              <div className="max-w-[327px]">
                <h1 className="font-semibold text-[22px] leading-[28px]">
                  30 Minute Zoom Call with Orio Sales Team
                </h1>
              </div>
              <div className="space-y-4 max-w-[300px]">
                <div className="flex items-start gap-x-3">
                  <Image
                    src="/images/svg/clock.svg"
                    width={20}
                    height={20}
                    alt="clock"
                  />
                  <p className="text-sm text-[#737373]">
                    <span className="font-semibold">30</span>{" "}
                    <span className="font-normal">min</span>
                  </p>
                </div>
                <div className="flex items-start gap-x-3">
                  <Image
                    src="/images/svg/webConference.svg"
                    width={20}
                    height={20}
                    className="mt-1"
                    alt="webConference"
                  />
                  <p className="text-sm text-[#737373] font-normal">
                    Web conferencing details provided upon confirmation.
                  </p>
                </div>
              </div>
              <div className="space-y-6 max-w-[310px]">
                <p className="text-sm text-[#101010] font-medium">
                  This will be a meeting to discuss Orio product, how the
                  service works and answer any questions you may have.
                </p>
                <p className="text-sm text-[#101010] font-medium">
                  All other inquiries can be sent to sales@getorio.com
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex md:flex-row flex-col ${date
                ? formShow
                  ? "md:w-[55%]"
                  : "md:w-[65%]"
                : "md:w-[50%] w-full"
              }`}
          >
            <Separator
              className="bg-[#CCCCCC] sm:flex hidden"
              orientation="vertical"
            />
            <Separator
              className="bg-[#CCCCCC] md:hidden flex"
              orientation="horizontal"
            />
            <div className="w-full md:py-6 pb-12 px-6">
              {!formShow && (
                <div>
                  <div className="flex justify-start items-center md:pt-3 pt-6 md:pb-8 pb-5">
                    <h6 className="font-semibold tracking-wide text-xl text-midnight">
                      Select a Date & Time
                    </h6>
                  </div>
                  <div className="flex md:flex-row flex-col w-full md:gap-y-0 gap-y-6">
                    <div
                      className={`xl:space-y-16 md:space-y-12 space-y-5 ${date ? "md:w-[56%] md:pr-6" : "w-full"
                        }`}
                    >
                      <GetDemoDate
                        date={date}
                        setDate={setDate}
                        className={`w-full`}
                      />

                      <GetDemoTimeZone
                        selectedTimezone={selectedTimezone}
                        setSelectedTimezone={setSelectedTimezone}
                      />
                    </div>
                    {date && (
                      <GetDemoTime
                        className={`${date ? "md:w-[44%] md:pl-5" : "w-full"
                          } sm:space-y-8 space-y-5`}
                        date={date}
                        setFormShow={setFormShow}
                        setTime={setTime}
                      />
                    )}
                  </div>
                </div>
              )}
              {formShow && (
                <GetDemoForm
                  setFormShow={setFormShow}
                  date={date}
                  setDate={setDate}
                  time={time}
                  selectedTimezone={selectedTimezone}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDemoCard;
