import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "../components";


export const metadata: Metadata = {
  title: "Payroll Landing Page",
  description: "Payroll Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />

        {children}
      </body>
    </html>
  );
}
