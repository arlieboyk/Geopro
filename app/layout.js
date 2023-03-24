import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
export const metadata = {
  title: "Geopro",
  description: "Generated by create next app",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body className=" bg-cover bg-[url(../public/bg.jpg)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
