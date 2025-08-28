"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrackingSchema } from "@/schema";
import { toast } from "sonner";
import { useSearchParams, useRouter } from "next/navigation";

interface HeroSectionProps {
  setTrackingDetails: any;
}

const links = [
  {
    id: 1,
    label: "tcs",
    link: "/images/png/tcsMidnight.png",
    width: 110,
    height: 110,
  },
  {
    id: 2,
    label: "mnp",
    link: "/images/png/mnpMidnight.png",
    width: 95,
    height: 95,
  },
  {
    id: 3,
    label: "blueEx",
    link: "/images/png/blueexMidnight.png",
    width: 110,
    height: 110,
  },
  {
    id: 4,
    label: "leopards",
    link: "/images/png/leopardsMidnight.png",
    width: 110,
    height: 110,
  },
  {
    id: 5,
    label: "trax",
    link: "/images/png/traxMidnight.png",
    width: 120,
    height: 120,
  },
  {
    id: 6,
    label: "postex",
    link: "/images/png/postexMidnight.png",
    width: 110,
    height: 110,
  },
  {
    id: 7,
    label: "tqsMidnight",
    link: "/images/png/tqsMidnight.png",
    width: 95,
    height: 95,
  },
  {
    id: 8,
    label: "rider",
    link: "/images/png/riderMidnight.png",
    width: 100,
    height: 100,
  },
  {
    id: 9,
    label: "flyCourier",
    link: "/images/png/flyCourierMidnight.png",
    width: 120,
    height: 120,
  },
  {
    id: 10,
    label: "doDeliverMidnight",
    link: "/images/png/doDeliverMidnight.png",
    width: 160,
    height: 63,
  },
  {
    id: 11,
    label: "callCourier",
    link: "/images/png/callCourierMidnight.png",
    width: 160,
    height: 120,
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({ setTrackingDetails }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const hasFetched = useRef(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const acno = searchParams.get("acno");
  const odid = searchParams.get("odid");

  const form = useForm<z.infer<typeof TrackingSchema>>({
    resolver: zodResolver(TrackingSchema),
    defaultValues: {
      consignment_number: "",
    },
  });

  // shopify tracking
  useEffect(() => {
    if (acno && odid && !hasFetched.current) {
      hasFetched.current = true;
      const order_id = parseInt(odid, 10)
      const fetchData = async () => {
        const data = {
          acno: acno,
          order_id: order_id,
        }

        toast.success('Please wait .....',
          {
            icon: <ReloadIcon className="animate-spin" />,
          }
        );
        try {
          const response = await axios.post("/api/shopify_tracking", data);
          if (response.status === 200) {
            if (response.data.status == "1") {
              toast.success("Tracking Successfully");
              setTrackingDetails(response.data.payload);
            }
            else {
              toast.error(response.data.message);
            }
          }
        } catch (error) {
          toast.error("Error fetching tracking data");
          console.error("Error fetching tracking data:", error);
        }

      };
      fetchData();
    }
  }, [acno, odid, setTrackingDetails, hasFetched]);

  // universal tracking
  const onsubmit = async (data: z.infer<typeof TrackingSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/universal_tracking", data);
      if (response.status == 200) {
        if (response.data.status == "1") {
          toast.success("Tracking Successfully");
        } else {
          toast.error(response.data.message);
        }
      } else {
        toast.error("Internal Server Error");
      }
      setTrackingDetails(response.data.payload);
      form.reset();
      setIsLoading(false);
      router.replace(window.location.pathname);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#000C19] w-full lg:h-full h-auto">
      <div className="lg:h-full h-auto">
        <div className="container w-full h-full flex flex-col justify-center items-center lg:pt-[68px] pt-[125px] pb-[78px] lg:pb-[0px] space-y-20">
          <div className="sm:space-y-12 space-y-7 flex flex-col justify-center items-center">
            <div className="sm:space-y-6 space-y-3 flex flex-col justify-center items-center">
              <div className="lg:max-w-[600px] md:max-w-[440px] sm:max-w-[385px] max-w-[385px]">
                <h1 className="text-white font-bold xl:text-[55px] lg:text-[50px] xl:leading-[60px] lg:leading-[55px] sm:text-4xl text-3xl leading-[40px]">
                  Track Any Shipment
                </h1>
              </div>
              <div className="xxl:max-w-[594px] xl:max-w-[450px] sm:max-w-[380px] max-w-[320px]">
                <p className="text-white text-center text-opacity-85 font-normal text-base leading-[20px]">
                  Enter your tracking number from any Courier Company
                </p>
              </div>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onsubmit)}
                className="w-full flex sm:flex-row flex-col sm:items-start items-center sm:gap-x-3 gap-y-6"
              >
                <FormField
                  control={form.control}
                  name="consignment_number"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          autoComplete="off"
                          className="h-[52px] py-3 w-full rounded-lg border-midnight bg-midnight text-sm text-white font-medium placeholder:text-sm placeholder:text-white placeholder:font-normal focus-visible:ring-midnight"
                          placeholder="Enter Your Tracking Number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-max">
                  {isLoading ? (
                    <Button
                      variant="default"
                      className="cursor-wait"
                      size="md"
                      disabled
                    >
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="md"
                      className="relative"
                      type="submit"
                    >
                      Track
                      <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100 "></span>
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </div>
          <div className="flex flex-wrap sm:justify-center justify-between sm:gap-x-16 sm:gap-y-12 gap-y-6 sm:max-w-5xl">
            {links.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center xs:w-[110px] xs:h-[48px]"
              >
                <Image
                  src={item.link}
                  width={item.width}
                  height={item.height}
                  alt={item.label}
                  className={`sm:w-[${item.width}px] w-[90px]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
