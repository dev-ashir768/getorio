// "use client";
// import { ReloadIcon } from "@radix-ui/react-icons";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { Check, ChevronsUpDown, ChevronDown, ChevronUp } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// interface BlogListingTypes {
//   blogListing: {
//     id: string;
//     slug: string;
//     featured_image: string;
//     title: string;
//     short_content: string;
//     created_at: string;
//     status: string;
//     category_type: string | null;
//   }[];
// }

// const blogfilter = [
//   {
//     value: "all",
//     label: "All articles and insights",
//   },
//   {
//     value: "oms",
//     label: "Order management system",
//   },
//   {
//     value: "wms",
//     label: "Warehouse management system",
//   },
//   {
//     value: "shopify",
//     label: "shopify",
//   },
//   {
//     value: "woocommerce",
//     label: "WooCommerce",
//   },
//   {
//     value: "magento",
//     label: "Magento",
//   },
//   {
//     value: "daraz",
//     label: "Daraz",
//   },
//   {
//     value: "pos",
//     label: "Point of Sale",
//   },
//   {
//     value: "cod",
//     label: "Cash on Delivery",
//   },
//   {
//     value: "others",
//     label: "Others",
//   },
// ]

// const BlogListing: React.FC<BlogListingTypes> = ({ blogListing }) => {
//   const [open, setOpen] = useState(false)
//   const [value, setValue] = useState("all")

//   const sortedBlogListing = [...blogListing].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

//   const filteredBlogs = sortedBlogListing.filter((blog) => {
//     if (blog.status !== "1") return false;
//     if (value === "all") return true;
//     return blog.category_type && blog.category_type.toLowerCase() === value;
//   });


//   const [items, setItems] = useState(filteredBlogs.slice(0, 3));
//   const [hasMore, setHasMore] = useState(true);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setItems(filteredBlogs.slice(0, 3));
//     setHasMore(filteredBlogs.length > 3);
//   }, [value, filteredBlogs]);

//   const loadMoreData = () => {
//     if (loading) return;

//     setLoading(true);

//     setTimeout(() => {
//       setItems((prevItems) => {
//         const nextItems = filteredBlogs.slice(prevItems.length, prevItems.length + 3);
//         const newItems = [...prevItems, ...nextItems];

//         if (newItems.length >= filteredBlogs.length) {
//           setHasMore(false);
//         }

//         return newItems;
//       });
//       setLoading(false);
//     }, 800);
//   };


//   return (
//     <section className={` container lg:py-36 py-28`}>
//       <div className="mb-14 flex justify-between items-center">
//         <h1 className="text-midnight font-bold xl:text-[55px] lg:text-[50px] xl:leading-[60px] lg:leading-[55px] sm:text-4xl text-3xl leading-[40px] tracking-wide">
//           Articles & Insights
//         </h1>

//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <Button
//               variant="filter"
//               role="combobox"
//               aria-expanded={open}
//               className="md:max-w-[300px] max-w-[100%] justify-between"
//             >
//               {value
//                 ? blogfilter.find((blog_type) => blog_type.value === value)?.label
//                 : "All articles and insights"}
//               {open ? (
//                 <ChevronUp />
//               ) : (
//                 <ChevronDown />
//               )}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="md:max-w-[300px] max-w-[100%] p-0">
//             <Command>
//               <CommandInput placeholder="Search..." className="h-11" />
//               <CommandList>
//                 <CommandEmpty>Not found.</CommandEmpty>
//                 <CommandGroup>
//                   {blogfilter.map((blog_type) => (
//                     <CommandItem
//                       key={blog_type.value}
//                       value={blog_type.value}
//                       onSelect={(currentValue) => {
//                         setValue(currentValue === value ? "all" : currentValue);
//                         setOpen(false);
//                       }}
//                     >
//                       {blog_type.label}
//                       <Check
//                         className={cn(
//                           "ml-auto",
//                           value === blog_type.value ? "opacity-100" : "opacity-0"
//                         )}
//                       />
//                     </CommandItem>
//                   ))}
//                 </CommandGroup>
//               </CommandList>
//             </Command>
//           </PopoverContent>
//         </Popover>

//       </div>

//       <InfiniteScroll
//         dataLength={items.length}
//         next={loadMoreData}
//         hasMore={hasMore}
//         className="space-y-16"
//         loader={
//           loading ? (
//             <div className="flex justify-center items-center gap-3 text-lg font-semibold">
//               <ReloadIcon className="animate-spin" />
//               loading ...
//             </div>
//           ) : (
//             <div className="flex justify-center items-center text-lg font-medium">
//               No more articles to show
//             </div>
//           )
//         }
//         endMessage={<div className="flex justify-center items-center text-lg font-medium">No more articles to show</div>}
//         scrollThreshold={0.9}
//       >
//         <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 sm:gap-y-14 gap-y-12">
//           {items.map((item, index) =>
//             item.status == "1" ? (
//               <div key={item.id}>
//                 <Link href={`/blog/${item.slug}`} className="space-y-6">
//                   <div className="h-[250px] relative w-full rounded-2xl overflow-hidden">
//                     <Image
//                       src={`https://backoffice.orio.digital/assets/uploads/${item.featured_image}`}
//                       className="object-cover w-full h-full"
//                       alt={item.featured_image}
//                       quality={100}
//                       fill
//                     />
//                   </div>
//                   <div>
//                     <h1 className="font-bold text-2xl text-black text-start line-clamp-3 mb-6">
//                       {item.title}
//                     </h1>
//                     <p className="text-[#11181f] font-normal text-[16px] leading-[25px] text-start break-words mb-4 line-clamp-4">
//                       {item.short_content}
//                     </p>
//                     <p className="text-[#11181f] font-normal text-[13px] leading-[16px] text-start">
//                       {item.created_at}
//                     </p>
//                   </div>
//                 </Link>
//               </div>
//             ) : null
//           )}
//         </div>
//       </InfiniteScroll>
//     </section>
//   );
// };

// export default BlogListing;


"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BlogListingTypes {
  blogListing: {
    id: string;
    slug: string;
    featured_image: string;
    title: string;
    short_content: string;
    created_at: string;
    status: string;
    category_type?: string | null;
  }[];
}

const blogfilter = [
  { value: "all", label: "All articles and insights" },
  { value: "oms", label: "Order Management System" },
  { value: "wms", label: "Warehouse Management System" },
  { value: "shopify", label: "Shopify" },
  { value: "daraz", label: "Daraz" },
  { value: "woocommerce", label: "WooCommerce" },
  { value: "magento", label: "Magento" },
  { value: "pos", label: "Point of Sale" },
  { value: "cod", label: "Cash on Delivery" },
  { value: "comparison", label: "Comparison" },
  { value: "online_earning", label: "Online Earning" },
];

const BlogListing: React.FC<BlogListingTypes> = ({ blogListing }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");

  const headingTitle = useMemo(() => {
    if (value === "all") {
      return "Articles & Insights";
    }
    const currentFilter = blogfilter.find((b) => b.value === value);
    return `${currentFilter?.label ?? "Articles & Insights"}`;
  }, [value]);

  const sortedBlogListing = useMemo(() => {
    return [...blogListing].sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [blogListing]);

  const filteredBlogs = useMemo(() => {
    return sortedBlogListing.filter((blog) => {
      if (blog.status !== "1") return false;
      if (value === "all") return true;
      return blog.category_type && blog.category_type.toLowerCase() === value;
    });
  }, [sortedBlogListing, value]);

  const [items, setItems] = useState(filteredBlogs.slice(0, 3));
  const [hasMore, setHasMore] = useState(filteredBlogs.length > 3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(filteredBlogs.slice(0, 3));
    setHasMore(filteredBlogs.length > 3);
  }, [filteredBlogs]);

  const loadMoreData = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setItems((prevItems) => {
        const nextItems = filteredBlogs.slice(prevItems.length, prevItems.length + 3);
        const newItems = [...prevItems, ...nextItems];
        if (newItems.length >= filteredBlogs.length) {
          setHasMore(false);
        }
        return newItems;
      });
      setLoading(false);
    }, 800);
  };

  return (
    <section className={`container lg:py-36 py-28 min-h-[calc(100vh-64.6px)]`}>
      <div className="mb-14 flex md:flex-row flex-col gap-5 justify-between md:items-center">
        <h1 className="text-midnight font-bold xl:text-[55px] lg:text-[50px] xl:leading-[60px] lg:leading-[55px] sm:text-4xl text-3xl leading-[40px] tracking-wide">
          {headingTitle}
        </h1>

        {/* <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="filter"
              role="combobox"
              aria-expanded={open}
              className="md:w-[300px] w-full justify-between"
            >
              {value
                ? blogfilter.find((b) => b.value === value)?.label
                : "All articles and insights"}
              {open ? <ChevronUp /> : <ChevronDown />}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="md:w-[300px] w-full min-w-[var(--radix-popover-trigger-width)] p-0">
            <Command>
              <CommandInput placeholder="Search..." className="h-11" />
              <CommandList>
                <CommandEmpty>Not found.</CommandEmpty>
                <CommandGroup>
                  {blogfilter.map((blogType) => (
                    <CommandItem
                      key={blogType.value}
                      value={blogType.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "all" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {blogType.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === blogType.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover> */}
      </div>

      <InfiniteScroll
        dataLength={items.length}
        next={loadMoreData}
        hasMore={hasMore}
        className="space-y-16"
        loader={
          loading ? (
            <div className="flex justify-center items-center gap-3 text-lg font-semibold">
              <ReloadIcon className="animate-spin" />
              loading ...
            </div>
          ) : null
        }
        // endMessage={
        //   <div className="flex justify-center items-center text-lg font-medium">
        //     No more articles to show
        //   </div>
        // }
        scrollThreshold={0.9}
      >
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 sm:gap-y-14 gap-y-12">
          {items.map((item) => (
            <div key={item.id}>
              <Link href={`/blog/${item.slug}`} className="space-y-6">
                <div className="h-[250px] relative w-full rounded-2xl overflow-hidden">
                  <Image
                    src={`https://backoffice.orio.digital/assets/uploads/${item.featured_image}`}
                    className="object-cover w-full h-full"
                    alt={item.featured_image}
                    quality={100}
                    fill
                  />
                </div>
                <div>
                  <h1 className="font-semibold capitalize text-2xl text-black text-start line-clamp-3 mb-4">
                    {item.title.toLowerCase()}
                  </h1>
                  <p className="text-[#11181f] font-normal text-[16px] leading-[25px] text-start break-words mb-4 line-clamp-4">
                    {item.short_content}
                  </p>
                  <p className="text-[#11181f] font-normal text-[13px] leading-[16px] text-start">
                    {item.created_at}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default BlogListing;
