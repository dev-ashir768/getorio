"use client";
import { Calendar } from "@/components/ui/calendar";
import { SelectSingleEventHandler } from "react-day-picker";

interface GetDemoDateProps {
  setDate: SelectSingleEventHandler | undefined;
  date: Date | undefined;
  className: string;
}

const GetDemoDate: React.FC<GetDemoDateProps> = ({
  date,
  setDate,
  className,
}) => {
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className={className}
      disabled={(date) => date < new Date() || date.getDay() === 0}
    />
  );
};

export default GetDemoDate;
