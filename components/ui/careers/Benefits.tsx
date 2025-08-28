import Image from "next/image";

type LinksType = {
  id: number;
  label: string;
  subLabel: string;
  link: string;
};

const links: LinksType[] = [
  {
    id: 1,
    label: "medical",
    subLabel: "Taking care of you, one treatment at a time.",
    link: "/images/svg/medical.svg",
  },
  {
    id: 2,
    label: "Flexibility",
    subLabel: "Work on your terms, at your own pace.",
    link: "/images/svg/flexibility.svg",
  },
  {
    id: 3,
    label: "Fast Growing Career",
    subLabel: "Join a thriving industry and advance your career.",
    link: "/images/svg/growing.svg",
  },
  {
    id: 4,
    label: "Friendly Environment",
    subLabel: "Where colleagues feel like family.",
    link: "/images/svg/like.svg",
  },
];

const Benefits = () => {
  return (
    <section className="container mx-auto">
      <div className="bg-[#000C19] sm:rounded-3xl rounded-xl md:py-20 sm:py-16 pt-8 pb-12 sm:px-10 px-5 xxl:px-20 flex flex-col space-y-12">
        <div className="space-y-4">
          <h6 className="text-white font-bold sm:text-5xl text-4xl">
            Benefits
          </h6>
          <p className="text-white sm:text-base text-sm font-normal">
            Orio welcomes you on board by offering the following employee
            benefits
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 sm:gap-y-16 gap-y-10 xxl:gap-x-24">
          {links.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center sm:gap-6 gap-5"
            >
              <div className="relative sm:w-[105px] sm:h-[89px]">
                <span className="block bg-[#FF731C] p-3 sm:w-[95px] w-[80px] sm:h-[80px] h-[70px] sm:rounded-xl rounded-lg absolute top-2 left-2"></span>
                <div className="bg-white p-3 sm:w-[95px] w-[80px] sm:h-[80px] h-[70px] sm:rounded-xl rounded-lg relative flex justify-center items-center">
                  <Image
                    src={item.link}
                    className="sm:w-[54px] w-[44px]"
                    width={54}
                    height={54}
                    alt={item.label}
                  />
                </div>
              </div>
              <div className="sm:space-y-2">
                <h2 className="text-white text-start sm:text-xl text-base font-medium capitalize">
                  {item.label}
                </h2>
                <p className="text-white text-start sm:text-base text-sm font-light">
                  {item.subLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
