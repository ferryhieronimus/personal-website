import "./globals.css";
import { lato } from "./font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={(lato.className)}>{children}</body>
    </html>
  );
}
