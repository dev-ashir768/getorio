"use client";
import Image from "next/image";
import { useCopyToClipboard } from "usehooks-ts";
import { toast } from "sonner";

type LinksType = {
  id: number;
  label: string;
  subLabel: string;
  link: string;
  copy: boolean;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "address",
    subLabel: "D-63/1,Block-4, Gulshan-e-Iqbal Karachi",
    link: "/images/png/location.png",
    copy: false,
  },
  {
    id: 2,
    label: "email",
    subLabel: "social@getorio.com",
    link: "/images/png/email.png",
    copy: true,
  },
  {
    id: 3,
    label: "phone",
    subLabel: "021-37293292",
    link: "/images/png/phone.png",
    copy: true,
  },
  {
    id: 4,
    label: "mobile",
    subLabel: "0318-0268894",
    link: "/images/png/whatsapp-mobile.png",
    copy: true,
  },
];

const ContactCards = () => {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success("Copied!");
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <section className="container">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:py-28 py-20">
        {links.map((item, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] rounded-2xl lg:p-10 sm:p-6 p-8 lg:h-[310px] h-[290px]"
          >
            <div className="w-[60px] h-[70px] flex justify-end items-center">
              <Image src={item.link} width={60} height={70} alt={item.label} />
            </div>
            <div className="mt-12 max-w-[218px]">
              <p className="font-semibold text-base tracking-wide">
                {item.subLabel}
              </p>
            </div>
            <div className="mt-3">
              {item.copy && (
                <p
                  className="cursor-pointer text-azure-100 font-semibold text-base tracking-wide"
                  onClick={handleCopy(item.subLabel)}
                >
                  Copy
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;
