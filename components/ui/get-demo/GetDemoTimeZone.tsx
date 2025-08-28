"use client";
import React from "react";
import TimezoneSelect, { ITimezoneOption } from "react-timezone-select";
import Image from "next/image";
import { poppins } from "@/app/fonts";

interface GetDemoTimeZoneProps {
  selectedTimezone: string | ITimezoneOption | any;
  setSelectedTimezone: (timezone: ITimezoneOption) => void;
}

const GetDemoTimeZone: React.FC<GetDemoTimeZoneProps> = ({
  selectedTimezone,
  setSelectedTimezone,
}) => {
  return (
    <>
      <div className="space-y-2">
        <p className="text-lg text-midnight font-medium">Time zone</p>
        <div className="flex flex-row">
          <Image
            src="/images/svg/glode.svg"
            width={18}
            height={18}
            className=""
            alt="glode"
          />
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
            className={`w-full ${poppins.className} text-sm font-normal text-charcoal`}
          />
        </div>
      </div>
    </>
  );
};

export default GetDemoTimeZone;
