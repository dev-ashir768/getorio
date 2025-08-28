import * as z from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters" })
    .max(100, { message: "Subject must be at most 100 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be at most 1000 characters" }),
});

export const TrackingSchema = z.object({
  consignment_number: z
    .string()
    .trim()
    .min(1, { message: "Enter Tracking Number" }),
});

export const DemoFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  url: z.string(),
  referral: z
    .string()
    .trim()
    .min(3, { message: "Referral must be at least 3 characters" }),
});

// export const CareersFormSchema = z.object({
//   first_name: z
//     .string()
//     .min(3, { message: "Name must be at least 3 characters" })
//     .max(50, { message: "Name must be at most 50 characters" }),
//   last_name: z
//     .string()
//     .min(3, { message: "Name must be at least 3 characters" })
//     .max(50, { message: "Name must be at most 50 characters" }),
//   contact_number: z.string(),
//   email: z.string().email({ message: "Invalid email address" }),
//   file: z
//     .instanceof(File)
//     .refine(
//       (file) => {
//         const allowedTypes = [
//           "application/pdf",
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//           "application/msword",
//         ];
//         return allowedTypes.includes(file.type);
//       },
//       { message: "Only PDF and Word documents are allowed" }
//     ),
// });
