import { Inter, Poppins, Sora } from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const inter = Inter({
  subsets: ["latin"],
});
