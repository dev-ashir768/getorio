import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const links = [
  {
    id: 1,
    question: "How can Orio WMS benefit my business?",
    answer:
      "Orio WMS can help improve inventory accuracy, increase warehouse efficiency, reduce operational costs, and enhance customer satisfaction by ensuring timely and accurate order fulfillment.",
  },
  {
    id: 2,
    question: "Is Orio WMS suitable for my business size?",
    answer:
      "Orio WMS is scalable and can be customized to suit businesses of various sizes, from small warehouses to large distribution centers.",
  },
  {
    id: 3,
    question:
      "Can Orio WMS integrate with my existing ERP or e-commerce platform?",
    answer:
      "Yes, Orio WMS is designed to integrate seamlessly with a wide range of ERP systems, e-commerce platforms, and other business applications.",
  },
  {
    id: 4,
    question: "What inventory management features does Orio WMS offer?",
    answer:
      "Orio WMS provides features such as real-time inventory tracking, stock level alerts, batch and serial number tracking, and automated replenishment.",
  },
  {
    id: 5,
    question: "How does Orio WMS handle order processing?",
    answer:
      "Orio WMS streamlines order processing with features like order picking, packing, shipping, and real-time order status updates.",
  },
  {
    id: 6,
    question: "Can Orio WMS support multiple warehouses?",
    answer:
      "Yes, Orio WMS supports multi-warehouse operations, allowing you to manage and coordinate inventory and orders across multiple locations.",
  },
];

const FAQs = () => {
  return (
    <section className="container w-full md:py-28 py-20 space-y-8">
      <div className="space-y-6">
        <div className="text-center">
          <h6 className="text-midnight font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl">
            Questions About WMS?
          </h6>
        </div>
        <div className="text-center">
          <p className="text-charcoal font-normal text-[16px] leading-[26px]">
            Please see our FAQ section below for help
          </p>
        </div>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full space-y-5">
          {links.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${item.id}`}
              className="bg-[#F6F6F6] rounded-xl"
            >
              <AccordionTrigger className="text-midnight sm:text-lg text-sm font-semibold sm:px-5 px-3 py-5 text-start">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-charcoal sm:text-base text-sm font-normal sm:px-5 px-3">
                <div className="max-w-5xl">{item.answer}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
