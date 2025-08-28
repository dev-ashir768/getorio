"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "md:space-y-8 space-y-5 w-full",
        caption: "flex justify-between items-center",
        caption_label: "lg:text-xl text-lg text-midnight font-normal",
        nav: "space-x-1 flex items-center",
        nav_button: cn("h-6 w-6"),
        // nav_button_previous: "",
        // nav_button_next: "",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between items-center",
        head_cell:
          "flex justify-center items-center text-charcoal font-normal w-[32px] h-[32px] text-sm",
        row: "flex justify-between w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-full"
        ),
        day: cn(
          "w-[32px] h-[32px] rounded-full p-0 text-charcoal font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-azure-100 text-white hover:bg-azure-100 hover:text-white focus:bg-azure-100 focus:text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside rounded-full text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50 cursor-not-allowed",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-6 w-6" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
