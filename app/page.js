"use client";
import Image from "next/image";
import { Alert, Dropdown } from "flowbite-react";
import { useState } from "react";
import Development from "./components/Homepage/Development";
import Carousel1 from "./components/Homepage/Carousel";
export default function Home() {
  const [alert, setAlert] = useState(false);
  return (
    <>
      <section className="h-screen">
        <Carousel1 />
      </section>

      <section>
        <Development />
      </section>
    </>
  );
}
