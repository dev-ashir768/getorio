import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DemoFormSchema } from "@/schema";
import axios from "axios";
import { ITimezone } from "react-timezone-select";

interface GetDemoFormProps {
  setFormShow: Dispatch<SetStateAction<boolean>>;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  date: Date | undefined;
  time: string | null;
  selectedTimezone: ITimezone | null | any;
}

const GetDemoForm: React.FC<GetDemoFormProps> = ({
  setFormShow,
  setDate,
  date,
  time,
  selectedTimezone,
}) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const form = useForm<z.infer<typeof DemoFormSchema>>({
    resolver: zodResolver(DemoFormSchema),
    defaultValues: {
      name: "",
      email: "",
      url: "",
      referral: "",
    },
  });

  const onsubmit = async (formData: z.infer<typeof DemoFormSchema>) => {
    setIsLoading(true);
    const data = {
      dataOne: formData,
      dataTwo: {
        date: date?.toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        time: time,
        timezone: selectedTimezone,
      },
    };
    try {
      const response = await axios.post("/api/email/demonstration-form", data);
      toast.success("Form Submitted!");
      form.reset();
    } catch (error) {
      toast.error("Form doesnot Submit!");
    } finally {
      setIsLoading(false);
      setFormShow(false);
      setDate(undefined);
    }
  };
  return (
    <div className="space-y-3 pt-6">
      <h1 className="font-semibold tracking-wide text-xl text-midnight">
        Enter Details
      </h1>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onsubmit)}>
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-charcoal text-sm font-normal">
                    Name *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 rounded-lg border-[#dddddd] bg-transparent text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                      {...field}
                      autoComplete="off"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-charcoal text-sm font-normal">
                    Email *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 rounded-lg border-[#dddddd] bg-transparent text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                      {...field}
                      autoComplete="off"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-charcoal text-sm font-normal">
                    URL
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 rounded-lg border-[#dddddd] bg-transparent text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                      {...field}
                      autoComplete="off"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referral"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-charcoal text-sm font-normal">
                    How did you hear about us? *
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 rounded-lg border-[#dddddd] bg-transparent text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                      {...field}
                      autoComplete="off"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:w-max w-full">
            {isLoading ? (
              <Button size="lg" disabled className="cursor-wait">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button size="lg" type="submit" className="relative">
                Join Demo
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100"></span>
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default GetDemoForm;
