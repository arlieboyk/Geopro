import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
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
      <body className="bg-cover bg-fixed bg-no-repeat bg-[url(../public/bg.jpg)] relative">
        <Navbar />

        <main id="content">{children}</main>
      </body>
    </html>
  );
}
