"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReloadIcon } from "@radix-ui/react-icons";

interface TrackingDetailsProps {
  TrackingDetails: any;
}

const TrackingDetailsTable: React.FC<TrackingDetailsProps> = ({ TrackingDetails }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (TrackingDetails && containerRef.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [TrackingDetails]);


  if (!TrackingDetails) return null;

  const courierName =
    TrackingDetails.courier ||
    TrackingDetails.courier_name;

  const consignmentNumber =
    TrackingDetails.consignment_number || TrackingDetails.consigment_no || "N/A";

  const trackingDetails = TrackingDetails.tracking_details || TrackingDetails.detail || [];

  return (
    <section
      className="container w-full flex flex-col justify-center items-center"
      ref={containerRef}
    >
      <div className="lg:w-[65%] md:w-[80%] w-[100%] md:py-28 py-20 space-y-8">
        <div className="space-y-4">
          <h6 className="font-semibold text-4xl text-midnight">Tracking Detail</h6>
          <p className="font-normal sm:text-lg text-sm text-charcoal">
            Please see your tracking information below
          </p>

          <div className="flex items-center justify-start gap-x-4">
            <div className="w-[100px] h-[45px] flex justify-start items-center">
              <Image
                src={`/images/png/tracking_logistics_logos/${courierName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.png`}
                width={100}
                height={80}
                alt={`/images/png/tracking_logistics_logos/${courierName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.png`}
              />
            </div>
            <p className="font-semibold tracking-wide text-2xl text-midnight mt-1">
              {consignmentNumber}
            </p>
          </div>
        </div>

        <Table>
          <TableHeader className="border-black border-opacity-25 border-b-[2px]">
            <TableRow>
              <TableHead className="font-bold sm:text-lg text-base text-midnight px-0 pb-3 md:!w-[320px] sm:!w-[270px] !w-[133px]">
                Date
              </TableHead>
              <TableHead className="font-bold sm:text-lg text-base text-midnight px-0 pb-3">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trackingDetails ? (
              <>
                {trackingDetails.length > 0 ? (
                  trackingDetails.map((item: any, index: number) => (
                    <TableRow key={index} className="border-0">
                      <TableCell className="pt-6 pb-0 px-0 text-midnight text-normal sm:text-base text-xs">
                        {item.dateTime || item.date || "N/A"}
                      </TableCell>
                      <TableCell className="pt-6 pb-0 px-0 text-midnight text-normal sm:text-base text-xs">
                        <div className="flex sm:gap-x-3 gap-x-2">
                          {/* <Image
                        src="/images/svg/Vector.svg"
                        width={16}
                        height={16}
                        className="mt-[2px] h-max"
                        alt="icon"
                      /> */}
                          {item.status || item.description || "N/A"}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} className="text-center py-4 text-gray-500">
                      No tracking details available
                    </TableCell>
                  </TableRow>
                )}
              </>
            )
              :
              (
                <div className="text-midnight text-normal sm:text-base text-xs flex items-center">
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> loading .....
                </div>
              )
            }
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default TrackingDetailsTable;
