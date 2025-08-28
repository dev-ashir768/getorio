"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { ContactFormSchema } from "@/schema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onsubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/email/contact-form", data);
      toast.success("Form Submitted!");
      form.reset();
    } catch (error) {
      toast.error("Form doesnot Submit!");
      console.log("Data not sent", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container md:py-28 py-20">
      <div className="mx-auto text-center space-y-5 flex flex-col items-center">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold md:text-5xl md:leading-[54px] sm:text-4xl text-[28px] md:tracking-wide">
            Looking for Support?
          </h6>
        </div>
        <div className="sm:max-w-[420px] max-w-[315px]">
          <p className="text-charcoal font-normal sm:text-base text-sm">
            Have a question? We&apos;re eager to hear from you. Drop us a message, and we will get back to you as quickly as we can
          </p>
        </div>
      </div>
      <div className="lg:max-w-[70%] md:max-w-[80%] max-w-[100%] mx-auto mt-12">
        <Form {...form}>
          <form className="space-y-10" onSubmit={form.handleSubmit(onsubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex sm:flex-row flex-col gap-6 w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input
                        autoComplete="off"
                        className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                        {...field}
                        placeholder="Your name *"
                        type="text"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <Input
                        autoComplete="off"
                        className="h-12 rounded-[10px] border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                        {...field}
                        placeholder="Email address*"
                        type="email"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        className="h-12 rounded-[10px] border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
                        {...field}
                        placeholder="This question is about....."
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        autoComplete="off"
                        className="rounded-[10px] border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1] resize-none"
                        {...field}
                        placeholder="Your message"
                        rows={8}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:w-max w-full mx-auto">
              {isLoading ? (
                <Button className="cursor-wait" size="lg" disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button size="lg" type="submit" className="relative">
                  Send your message
                  <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100"></span>
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
