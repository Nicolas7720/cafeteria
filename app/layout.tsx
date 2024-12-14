import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Projeto com Next.js com Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} bg-black text-white flex flex-col`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
