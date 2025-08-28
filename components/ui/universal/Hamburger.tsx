import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface HamburbgerProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  pathname: string;
  scrolling: boolean;
}

const Hamburger: React.FC<HamburbgerProps> = ({
  checked,
  setChecked,
  pathname,
  scrolling,
}) => {
  return (
    <div
      className={cn(`
    lg:hidden flex bg-midnight rounded-md
    ${
      checked &&
      `
     ${
       pathname == "/shipping" ||
       pathname == "/contact-us" ||
       pathname == "/track"
         ? "!bg-midnight"
         : ""
     }`
    }
    ${
      !scrolling &&
      `
        ${
          pathname == "/shipping" ||
          pathname == "/contact-us" ||
          pathname == "/track"
            ? "bg-white"
            : ""
        }
    `
    }
    `)}
    >
      <label className="sr-only hidden" htmlFor="hamburger-checkbox">
        Toggle Menu
      </label>
      <input
        id="hamburger-checkbox"
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
        title="Toggle Menu"
      />
      <label
        htmlFor="hamburger-checkbox"
        className="cursor-pointer p-[1px] rounded-lg"
        aria-label="Toggle Menu"
      >
        <motion.svg
          viewBox="0 0 32 32"
          className="h-9 "
          animate={{ rotate: checked ? -45 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.path
            className={`hamburger-bar stroke-white
              ${
                checked &&
                `
               ${
                 pathname == "/shipping" ||
                 pathname == "/contact-us" ||
                 pathname == "/track"
                   ? "!stroke-white"
                   : ""
               }`
              }
              ${
                !scrolling &&
                `
              ${
                pathname == "/shipping" ||
                pathname == "/contact-us" ||
                pathname == "/track"
                  ? "!stroke-midnight"
                  : ""
              }`
              }`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            animate={{
              strokeDasharray: checked ? "20 300" : "12 63",
              strokeDashoffset: checked ? -32.42 : 0,
            }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.path
            className={`hamburger-bar stroke-white
              ${
                checked &&
                `
               ${
                 pathname == "/shipping" ||
                 pathname == "/contact-us" ||
                 pathname == "/track"
                   ? "!stroke-white"
                   : ""
               }`
              }
            ${
              !scrolling &&
              `
            ${
              pathname == "/shipping" ||
              pathname == "/contact-us" ||
              pathname == "/track"
                ? "!stroke-midnight"
                : ""
            }`
            }`}
            d="M7 16 27 16"
          />
        </motion.svg>
      </label>
    </div>
  );
};

export default Hamburger;
