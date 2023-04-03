import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Geopro",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <body className="relative bg-[url(../public/bg.jpg)] bg-cover bg-fixed bg-no-repeat">
        <Navbar />

        <main id="content">{children}</main>
      </body>
    </html>
  );
}
