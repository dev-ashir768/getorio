import React, { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LinksType } from "./Navbar";
import Image from "next/image";

interface NavbarResponsiveProps {
  links: LinksType[];
  pathname: string;
  toggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  index: number;
}

const NavbarResponsive: React.FC<NavbarResponsiveProps> = ({
  links,
  pathname,
  toggled,
  setIsToggled,
}) => {
  const [popUp, setPopUp] = useState<number | null>(null);
  const [showMenuItems, setShowMenuItems] = useState<boolean>(false);

  return (
    <NavigationMenu className={cn(`${toggled ? "flex" : "hidden"} lg:hidden`)}>
      <NavigationMenuList
        className={cn(
          `w-full lg:items-center items-start xl:space-x-6 lg:space-x-4 space-x-0 lg:space-y-0 space-y-5 lg:flex-row flex-col`
        )}
      >
        {links.slice(1, 7).map((item, index) => (
          <React.Fragment key={index}>
            {item.dropDownEnable ? (
              <>
                <NavigationMenuItem
                  className={`${showMenuItems ? "hidden" : "flex"}`}
                >
                  <Link href="#" passHref>
                    <NavigationMenuLink
                      onClick={() => {
                        setPopUp(index);
                        setShowMenuItems(!showMenuItems);
                      }}
                      className={cn(
                        `navlink ${item.link?.includes(pathname) &&
                        "!text-azure-100 !font-bold"
                        } ${navigationMenuTriggerStyle()}`
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {popUp === index && (
                  <div className="order-first w-full grid grid-cols-1 space-y-6">
                    <div
                      className="flex gap-x-2 items-center "
                      onClick={() => {
                        setPopUp(null);
                        setShowMenuItems(!showMenuItems);
                      }}
                    >
                      <div className="w-[12px] cursor-pointer">
                        <Image
                          src="/images/png/greaterthan.png"
                          width={8}
                          height={8}
                          alt="greaterthan"
                        />
                      </div>
                      <h1 className="text-charcoal text-lg cursor-pointer !font-normal">
                        Back
                      </h1>
                    </div>
                    {item.title && (
                      <div>
                        <h1 className="text-2xl font-bold">Features</h1>
                      </div>
                    )}
                    <div className="space-y-6">
                      {item.dropDownList?.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-start items-center space-x-3"
                        >
                          <Link
                            onClick={() => {
                              setIsToggled(!toggled);
                              setPopUp(null);
                              setShowMenuItems(!showMenuItems);
                            }}
                            href={item.link}
                            className="w-[58px] h-[50px] p-2 bg-[#F6F6F6] rounded-lg flex justify-center items-center"
                          >
                            <Image
                              src={item.icon}
                              width={item.width}
                              height={item.height}
                              alt={item.label}
                            />
                          </Link>
                          <Link
                            onClick={() => {
                              setIsToggled(!toggled);
                              setPopUp(null);
                              setShowMenuItems(!showMenuItems);
                            }}
                            href={item.link}
                          >
                            <h1 className="text-base font-semibold capitalize">
                              {item.label}
                            </h1>
                            <div className="max-w-[225px]">
                              <p className="text-sm font-normal">
                                {item.sublabel}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <NavigationMenuItem
                className={`${showMenuItems ? "hidden" : "flex"}`}
              >
                <Link href={`${item.link}`} passHref>
                  <NavigationMenuLink
                    onClick={() => setIsToggled(!toggled)}
                    className={cn(
                      `navlink ${pathname == item.link && "!text-azure-100 !font-bold"
                      } ${navigationMenuTriggerStyle()}`
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
  );
};

export default NavbarResponsive;
