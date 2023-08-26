import "./globals.css";
import { poppins, ubuntu } from "../fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferry",
  description:
    "Hi! I&apos;m Ferry, a computer science student with a passion and love for software engineering.",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${ubuntu.variable}`}>
        {children}
      </body>
    </html>
  );
}
