import React from "react";
import { Carousel } from "flowbite-react";
import Wave from "react-wavify";
function Development() {
  if (typeof window !== "undefined") {
    const target = document.querySelectorAll(".text-section");
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          //if entry is intersecting
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 1,
      }
    );

    target.forEach((target) => {
      observer.observe(target);
    });
  }
  return (
    <section className=" mt-26 flex h-[40rem] w-full flex-col items-center justify-center bg-white">
      <Wave
        fill="#0088cc"
        paused={false}
        options={{
          height: 50,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
        className=" rotate-180 "
      />
      <Carousel className="h-full">
        <div className="cards   ">
          <h1 className="text-section text-3xl   ">
            Mobile Application Development
          </h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">Payment Gateway</h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">
            Desktop Software Development
          </h1>
        </div>
        <div className="cards  ">
          <h1 className="text-section text-3xl ">
            Web Application Development
          </h1>
        </div>
      </Carousel>
      <Wave
        fill="#0088cc"
        paused={false}
        options={{
          height: 50,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      />
    </section>
  );
}

export default Development;
