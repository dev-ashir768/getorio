import React, { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";

const timingBtn = [
  { id: 1, time: "10:30 am" },
  { id: 2, time: "11:00 am" },
  { id: 3, time: "11:30 am" },
  { id: 4, time: "12:00 pm" },
  { id: 5, time: "12:30 pm" },
  { id: 6, time: "01:00 pm" },
  { id: 7, time: "01:30 pm" },
];

interface GetDemoTimeProps {
  className: string;
  date: Date;
  setFormShow: Dispatch<SetStateAction<boolean>>;
  setTime: Dispatch<SetStateAction<string | null>>;
}

const GetDemoTime: React.FC<GetDemoTimeProps> = ({
  className,
  setFormShow,
  setTime,
  date,
}) => {
  const [activeId, setActiveId] = useState<number | null>(null);
  return (
    <div className={className}>
      <h1 className="lg:text-lg text-base text-midnight font-normal">
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        })}
      </h1>
      <div className="md:space-y-2 space-y-3">
        {timingBtn.map((item) => (
          <div
            key={item.id}
            className="flex lg:flex-row md:flex-col flex-row md:gap-2 gap-3"
          >
            {activeId !== item.id ? (
              <Button
                variant="outlineTwo"
                className="transition-all duration-300"
                onClick={() => {
                  setActiveId(item.id);
                }}
              >
                {item.time}
              </Button>
            ) : (
              <>
                <Button className="bg-[#666666] hover:bg-[#5e5e5e] cursor-not-allowed min-w-max">
                  {item.time}
                </Button>
                <Button
                  className="min-w-max"
                  onClick={() => {
                    setFormShow(true);
                    setTime(item.time);
                  }}
                >
                  Confirm
                </Button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetDemoTime;
