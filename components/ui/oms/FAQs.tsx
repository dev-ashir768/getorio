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
    question: "How does Orio OMS integrate with other e-commerce platforms?",
    answer:
      "Orio OMS integrates seamlessly with various e-commerce platforms such as Shopify, WooCommerce, Magento, and BigCommerce. This allows you to manage orders, inventory, and customer information from multiple platforms in one centralized system.",
  },
  {
    id: 2,
    question: "Is Orio OMS suitable for small businesses?",
    answer:
      "Yes, Orio OMS is designed to scale according to the size of your business. Whether youre a small business or a large enterprise, Orio OMS offers flexible solutions that can grow with your needs.",
  },
  {
    id: 3,
    question: "What kind of customer support does Orio offer?",
    answer:
      "Orio provides comprehensive customer support including , email support, and a detailed knowledge base. Our support team is available 24/7 to assist you with any questions or issues you may encounter.",
  },
  {
    id: 4,
    question: "Can Orio OMS handle international orders?",
    answer:
      "Yes, Orio OMS is equipped to manage international orders. It supports multiple currencies and languages, and integrates with international shipping carriers to ensure smooth global operations.",
  },
  {
    id: 5,
    question: "Does Orio OMS offer reporting and analytics?",
    answer:
      "Yes, Orio OMS includes robust reporting and analytics features. You can generate real-time reports on sales, inventory levels, order status, and more, providing valuable insights to help you make informed business decisions.",
  },
  {
    id: 6,
    question: "Can I customize Orio OMS to fit my business needs?",
    answer:
      "Orio OMS is highly customizable. You can tailor the system to match your specific business processes and requirements, including custom workflows, integrations, and automated tasks.",
  },
  {
    id: 7,
    question: "Can I manage multiple warehouses with Orio OMS?",
    answer:
      "Yes, Orio also offers a WMS which supports multi-warehouse management. You can track inventory levels, manage stock transfers, and fulfill orders from multiple warehouse locations within the system.",
  },
  {
    id: 8,
    question: "What kind of automation features does Orio OMS offer?",
    answer:
      "Orio OMS includes a variety of automation features such as automated order processing, inventory updates, courier wise automations, and more. These automation tools help streamline your operations and reduce manual tasks.",
  },
  {
    id: 9,
    question: "Can Orio OMS manage multiple couriers?",
    answer:
      "Yes, Orio OMS is designed to manage multiple couriers. You can integrate various shipping carriers, compare rates, and choose the best option for each shipment. This feature allows you to optimize shipping costs and ensure timely delivery to your customers.",
  },
];

const FAQs = () => {
  return (
    <section className="container w-full md:py-28 py-20 space-y-8">
      <div className="space-y-6">
        <div className="text-center">
          <h6 className="text-midnight font-bold xl:text-[45px] xl:leading-none sm:text-4xl text-3xl">
            Questions About OMS?
          </h6>
        </div>
        <div className="text-center">
          <p className="text-charcoal font-normal text-[16px] leading-[26px]">
            Please see our FAQ section below for help
          </p>
        </div>
      </div>
      <div>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-5"
        >
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
