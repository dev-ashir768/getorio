// "use client";
// import React, { useState } from "react";
// import { ReloadIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "../input";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { CareersFormSchema } from "@/schema";
// import { useForm } from "react-hook-form";
// import CareersFormDropzone from "./CareersFormDropzone";

// const CareersForm = () => {
//   const [isLoading, setIsLoading] = useState<Boolean>(false);

//   const form = useForm<z.infer<typeof CareersFormSchema>>({
//     resolver: zodResolver(CareersFormSchema),
//     defaultValues: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       contact_number: "",
//       file: "",
//     },
//   });

//   const onsubmit = (data: z.infer<typeof CareersFormSchema>) => {
//     console.log(data);
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onsubmit)}>
//         <div className="w-full flex flex-col gap-6">
//           <div className="w-full flex sm:flex-row flex-col gap-6">
//             <FormField
//               control={form.control}
//               name="first_name"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormControl>
//                     <Input
//                       autoComplete="off"
//                       type="text"
//                       placeholder="First Name"
//                       className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="last_name"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormControl>
//                     <Input
//                       autoComplete="off"
//                       type="text"
//                       placeholder="Last Name"
//                       className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="w-full flex sm:flex-row flex-col gap-6">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormControl>
//                     <Input
//                       autoComplete="off"
//                       type="email"
//                       placeholder="Email"
//                       className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="contact_number"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormControl>
//                     <Input
//                       autoComplete="off"
//                       type="number"
//                       placeholder="Contact Number"
//                       className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="w-full">
//             {/* <CareersFormDropzone /> */}
//             <FormField
//               control={form.control}
//               name="file"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormControl>
//                     <Input
//                       type="file"
//                       placeholder="Email"
//                       className="h-12 rounded-lg border-[#F6F6F6] bg-[#F6F6F6] text-sm text-charcoal font-medium placeholder:text-sm placeholder:text-charcoal placeholder:font-normal focus-visible:ring-[#f1f1f1]"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           <div className="sm:w-max w-full mx-auto">
//             {isLoading ? (
//               <Button className="cursor-wait" size="lg" disabled>
//                 <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </Button>
//             ) : (
//               <Button size="lg" type="submit" className="relative">
//                 Send your message
//                 <span className="absolute top-0 right-0 w-3 h-3 rounded-full animate-ping bg-gradient-to-r from-white to-azure-100"></span>
//               </Button>
//             )}
//           </div>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default CareersForm;
