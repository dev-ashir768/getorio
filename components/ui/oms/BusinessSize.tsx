import React from "react";

type FacilityType = {
  point?: string;
};

type LinksType = {
  id: number;
  businessSize: string;
  subTitle: string;
  facility: FacilityType[];
};

const links: LinksType[] = [
  {
    id: 1,
    businessSize: "Small",
    subTitle: "Small Businesses use Orio to:",
    facility: [
      {
        point: "Generate Shipping Labels",
      },
      {
        point: "Customize Shipping options",
      },
      {
        point: "Automate shipping tasks",
      },
    ],
  },
  {
    id: 2,
    businessSize: "medium",
    subTitle: "Medium Businesses use Orio to:",
    facility: [
      {
        point: "Optimize multiple shipping partners, tariffs and services",
      },
      {
        point:
          "Automate processes such as customer notifications, inventory management, picking and return processing",
      },
    ],
  },
  {
    id: 3,
    businessSize: "large",
    subTitle: "Enterprise Businesses use Orio to:",
    facility: [
      {
        point: "Integrate with Core ERP",
      },
      {
        point:
          "Provide an order processing layer for Omni Channel Solutions",
      },
      {
        point:
          "Form a multi-module software solution with Order Management, Warehouse management & Point of Sale",
      },
    ],
  },
];

const BusinessSize = () => {
  return (
    <section className="container space-y-8">
      <div className="space-y-4 flex flex-col">
        <div className="sm:max-w-[860px] max-w-[328px]">
          <h6 className="text-midnight font-bold sm:text-5xl text-3xl sm:tracking-wide">
            Who is it for?
          </h6>
        </div>
        <div className="sm:max-w-[860px] max-w-[315px]">
          <p className="text-charcoal font-normal sm:text-base text-sm">
            Orio works for businesses of all sizes
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {links.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl xxl:px-7 px-6 pt-12 pb-7 h-[420px] bg-cover bg-right-bottom
                            ${item.id == 1 && "smallBusinessBG"}
                            ${item.id == 2 && "mediumBusinessBG"}
                            ${item.id == 3 && "largeBusinessBG"}
                            `}
          >
            <div
              className={`bg-no-repeat bg-left-bottom h-full xl:space-y-7 lg:space-y-4 space-y-5
                                ${item.id == 1 && "smallArrow"}
                                ${
                                  item.id == 2 &&
                                  "mediumArrow bg-[length:220px_220px]"
                                }
                                ${item.id == 3 && "largeArrow bg-contain"}
                                `}
            >
              <div>
                <h6 className="text-midnight font-bold sm:text-[42px] sm:leading-none text-3xl sm:tracking-wide uppercase">
                  {item.businessSize}
                </h6>
              </div>
              <div className="xl:space-y-5 lg:space-y-2 space-y-4">
                <div>
                  <p className="text-midnight font-medium xl:text-lg lg:text-sm text-base">
                    {item.subTitle}
                  </p>
                </div>
                <div>
                  <ul className="xl:space-y-3 space-y-2 max-w-[332px]">
                    {item.facility.map((item, index) => (
                      <li
                        key={index}
                        className="flex xxl:text-[16px] text-sm xxl:leading-[22px] text-charcoal"
                      >
                        <span className="mr-2 mt-[7px] flex h-2 w-full max-w-[8px] items-center justify-center rounded-full bg-azure-100 text-base"></span>
                        {item.point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessSize;
