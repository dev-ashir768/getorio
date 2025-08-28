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
    question: "What is Orio Express 3PL Management Portal?",
    answer:
      "Orio Express 3PL Management Portal is a comprehensive platform designed to streamline and optimize third-party logistics operations, offering tools for shipment tracking, workflow automation, cost reduction, and detailed analytics to enhance overall efficiency.",
  },
  {
    id: 2,
    question: "How does Orio Express benefit 3PL providers?",
    answer:
      "Orio Express benefits 3PL providers by providing a centralized platform to manage multiple clients, streamline operations, optimize route planning, and reduce costs. It enhances service quality and operational efficiency, leading to better client satisfaction and retention.",
  },
  {
    id: 3,
    question: "Can Orio Express integrate with existing logistics software?",
    answer:
      "Yes, Orio Express is designed to integrate seamlessly with existing logistics software and systems, ensuring smooth transitions and compatibility with current operations.",
  },
  {
    id: 4,
    question: "How does Orio Express improve shipment visibility?",
    answer:
      "Orio Express improves shipment visibility by offering real-time tracking and updates on the status of shipments. This ensures that both 3PL providers and their clients are always informed about the location and status of their goods.",
  },
  {
    id: 5,
    question: "What are the key features of Orio Express for 3PL management?",
    answer:
      "Key features of Orio Express include real-time shipment tracking, automated workflows, route optimization, competitive pricing options, multi-warehouse management, demand forecasting, and comprehensive analytics.",
  },
  {
    id: 6,
    question: "How does Orio Express handle multi-client operations?",
    answer:
      "Orio Express is designed to manage multiple clients efficiently by providing tools to handle separate accounts, customized workflows, and detailed reporting for each client. This ensures that the unique needs of each client are met.",
  },
  {
    id: 7,
    question: "Can Orio Express help reduce shipping costs for 3PL providers?",
    answer:
      "Yes, Orio Express helps reduce shipping costs through competitive pricing options, optimized route planning, and integration with major courier services, leading to more cost-effective shipping solutions.",
  },
  {
    id: 8,
    question:
      "How does Orio Express ensure compliance with logistics regulations?",
    answer:
      "Orio Express ensures compliance with logistics regulations by providing up-to-date information on shipping laws and regulations, automating compliance checks, and offering tools to manage and document regulatory requirements.",
  },
  {
    id: 9,
    question: "What kind of support does Orio Express offer for 3PL providers?",
    answer:
      "Orio Express offers comprehensive support, including technical assistance, training, and resources to help 3PL providers maximize the platform's capabilities and improve their logistics operations.",
  },
  {
    id: 10,
    question:
      "How can Orio Express enhance inventory management for 3PL providers?",
    answer:
      "Orio Express enhances inventory management by offering real-time inventory tracking, automated reordering, demand forecasting, and detailed reporting. This ensures optimal inventory levels and efficient stock management across multiple warehouses.",
  },
];

const FAQs = () => {
  return (
    <section className="container w-full md:py-28 py-20 space-y-8">
      <div className="space-y-6">
        <div className="text-center">
          <h6 className="text-midnight font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl">
            Questions About Orio Express?
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
