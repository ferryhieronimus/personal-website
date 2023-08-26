import { Ubuntu, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const ubuntu = Ubuntu({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});
