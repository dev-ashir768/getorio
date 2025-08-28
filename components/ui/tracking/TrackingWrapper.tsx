"use client";
import TrackingDetailsTable from "@/components/ui/tracking/TrackingDetailsTable";
import HeroSection from "@/components/ui/tracking/HeroSection";
import React, { useState } from "react";


export type TrackingDetailsType = {
  courier_id: number;
  consigment_no?: string;
  courier_name?: string;
  courier?: string;
  consignment_number?: string;
  details?: {
    dateTime: string;
    status: string;
  }[];
  tracking_details?: {
    dateTime: string;
    status: string;
  }[];
} | null;


const TrackingWrapper = () => {
  const [TrackingDetails, setTrackingDetails] = useState<TrackingDetailsType>(null);


  return (
    <>
      <HeroSection setTrackingDetails={setTrackingDetails} />
      <TrackingDetailsTable TrackingDetails={TrackingDetails} />
    </>
  );
};

export default TrackingWrapper;
