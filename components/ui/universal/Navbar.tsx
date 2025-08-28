"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Hamburger from "./Hamburger";
import NavbarResponsive from "@/components/ui/universal/NavbarResponsive";

type dropDownListType = {
  icon: any;
  width: number;
  height: number;
  label: string;
  sublabel: string;
  link: string;
};

export type LinksType = {
  id: number;
  label: string;
  link?: string | string[];
  dropDownEnable: boolean;
  dropDownList?: dropDownListType[];
  title?: boolean;
  btnVariant?: boolean;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "logo",
    link: "/images/svg/logo.svg",
    dropDownEnable: false,
  },
  {
    id: 2,
    label: "Home",
    link: "/",
    dropDownEnable: false,
  },
  {
    id: 3,
    label: "Shipping",
    link: "/shipping",
    dropDownEnable: false,
  },
  {
    id: 4,
    label: "Product",
    link: [
      "/order-management-system",
      "/warehouse-management-system",
      "/orio-express",
    ],
    dropDownEnable: true,
    title: false,
    dropDownList: [
      {
        icon: "/images/png/oms-icon.png",
        width: 25,
        height: 25,
        label: "order management system",
        sublabel: "Plug & play Fulfillment For your E-Commerce Store.",
        link: "/order-management-system",
      },
      {
        icon: "/images/png/wms-icon.png",
        width: 30,
        height: 30,
        label: "warehouse management system",
        sublabel: "Efficient e-commerce inventory management system.",
        link: "/warehouse-management-system",
      },
      {
        icon: "/images/png/orioExpress-icon.png",
        width: 33,
        height: 33,
        label: "orio express",
        sublabel: "Optimize your 3PL logstics operations efficiently.",
        link: "/orio-express",
      },
    ],
  },
  {
    id: 5,
    label: "Company",
    link: ["/about-us", "/careers", "/contact-us"],
    dropDownEnable: true,
    title: false,
    dropDownList: [
      {
        icon: "/images/png/about-us-icon.png",
        width: 35,
        height: 35,
        label: "about us",
        sublabel: "The story, vision, mission, and the team.",
        link: "about-us",
      },
      {
        icon: "/images/png/careers-icon.png",
        width: 30,
        height: 30,
        label: "careers",
        sublabel: "All the reasons to join Orio.",
        link: "careers",
      },
      {
        icon: "/images/png/contact-us-icon.png",
        width: 30,
        height: 30,
        label: "contact us",
        sublabel: "Get in touch with the people behind Orio.",
        link: "/contact-us",
      },
    ],
  },
  {
    id: 6,
    label: "Blog",
    link: "/blog",
    dropDownEnable: false,
  },
  {
    id: 7,
    label: "Tracking",
    link: "/tracking",
    dropDownEnable: false,
  },
  // {
  //   id: 8,
  //   label: "Get a Demo",
  //   link: "/get-demo",
  //   dropDownEnable: false,
  // },
  {
    id: 8,
    label: "Get a Demo",
    link: "/get-demo",
    dropDownEnable: false,
    btnVariant: true,
  },
  {
    id: 9,
    label: "Login",
    link: "https://oms.getorio.com/login",
    dropDownEnable: false,
    btnVariant: false,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [toggled, setIsToggled] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <header
      className={cn(`fixed xl:py-3 lg:py-4 py-5 top-0 z-20 w-full lg:h-max transition-all duration-300
         ${toggled && "h-full bg-white"}
         ${scrolling && "bg-white shadow-md"}
        `)}
    >
      <div
        className={cn(
          `container flex lg:flex-row flex-col justify-between lg:items-center gap-y-12`
        )}
      >
        <div className="flex justify-between items-center">
          <Link onClick={() => setIsToggled(false)} href="/">
            <Image
              src={`${links[0].link}`}
              width={110}
              height={38}
              alt={links[0].label}
            />
          </Link>

          <Hamburger
            checked={toggled}
            setChecked={setIsToggled}
            pathname={pathname}
            scrolling={scrolling}
          />
        </div>

        <NavigationMenu className={cn(`hidden lg:flex`)}>
          <NavigationMenuList
            className={cn(
              `w-full lg:items-center items-start xl:space-x-6 lg:space-x-4 space-x-0 lg:space-y-0 space-y-3 lg:flex-row flex-col`
            )}
          >
            {links.slice(1, 7).map((item, index) => (
              <React.Fragment key={index}>
                {item.dropDownEnable ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        `navlink
                      ${item.link?.includes(pathname) &&
                        "!text-azure-100 !font-bold"
                        }
                         ${!scrolling &&
                        `
                         ${pathname == "/shipping" ||
                          pathname == "/contact-us" ||
                          pathname == "/tracking"
                          ? "text-white"
                          : ""
                        }
                         `
                        }

                        `
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[520px] grid grid-cols-1 p-8 space-y-6">
                      {item.title ? (
                        <div>
                          <h1 className="text-2xl font-bold">Features</h1>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="space-y-6">
                        {item.dropDownList?.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-start items-center space-x-3"
                          >
                            <Link
                              href={item.link}
                              className="w-[64px] h-[54px] p-2 bg-[#F6F6F6] rounded-lg flex justify-center items-center"
                            >
                              <Image
                                src={item.icon}
                                width={item.width}
                                height={item.width}
                                alt={item.label}
                              />
                            </Link>
                            <Link href={item.link}>
                              <h1 className="text-lg font-semibold capitalize">
                                {item.label}
                              </h1>
                              <p className="text-sm font-normal">
                                {item.sublabel}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <Link href={`${item.link}`} passHref>
                      <NavigationMenuLink
                        className={cn(
                          `navlink
                          ${pathname == item.link &&
                          "!text-azure-100 !font-bold"
                          }
                             ${!scrolling &&
                          `${pathname == "/shipping" ||
                            pathname == "/contact-us" ||
                            pathname == "/tracking"
                            ? "text-white"
                            : ""
                          }`
                          }

                          ${navigationMenuTriggerStyle()}`
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </React.Fragment>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <NavbarResponsive
          links={links}
          pathname={pathname}
          toggled={toggled}
          setIsToggled={setIsToggled}
          index={0}
        />

        <div
          className={cn(
            `xl:space-x-4 lg:space-x-3 space-y-3 lg:space-y-0 ${toggled ? "flex" : "lg:flex hidden"
            } lg:flex-row flex-col items-center justify-center`
          )}
        >
          {links.slice(7, 9).map((item, index) => (
            <Link
              key={index}
              className="w-full"
              href={`${item.link}`}
              target="_target"
            >
              <Button
                variant={item.btnVariant ? "secondary" : "default"}
                className={`${item.btnVariant &&
                  !scrolling &&
                  `${pathname == "/shipping" ||
                    pathname == "/contact-us" ||
                    pathname == "/tracking"
                    ? "lg:bg-white lg:text-midnight lg:hover:text-white"
                    : ""
                  }`
                  }
                ${item.btnVariant ? "" : "signup-btn"}
                `}
                onClick={() => {
                  setIsToggled(false);
                }}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
