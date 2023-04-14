"use client";
import { useState, useEffect } from "react";
import Development from "./components/Homepage/Development";
import Carousel1 from "./components/Homepage/Carousel";
import Avengers from "./components/Homepage/Avengers";
import ScrollTop from "./components/ScrollTop";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <Carousel1 />
      <Development />
      <Avengers />
      <ScrollTop />
    </>
  );
}
