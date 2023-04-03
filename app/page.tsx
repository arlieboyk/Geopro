"use client";
import { useState } from "react";
import Development from "./components/Homepage/Development";
import Carousel1 from "./components/Homepage/Carousel";
import Avengers from "./components/Homepage/Avengers";
import ScrollTop from "./components/ScrollTop";

export default function Home() {
  return (
    <>
      <Carousel1 />
      <Development />

      <Avengers />

      {/* scroll to top */}

      <ScrollTop></ScrollTop>
    </>
  );
}
