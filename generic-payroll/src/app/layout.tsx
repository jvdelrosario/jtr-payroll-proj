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
        <div className="bg-blue-500 text-white p-6">
          <h1 className="text-2xl">Hello, Tailwind!</h1>
        </div>
        {children}
      </body>
    </html>
  );
}
