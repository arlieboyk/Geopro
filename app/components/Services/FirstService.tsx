import Link from "next/link";

export default function First() {
  return (
    <>
      <section className=" bg-[#f2f2f2] py-12 px-6 text-center lg:px-12 ">
        <h1 className="text-4xl font-[250] leading-snug">
          We create amazing solutions with passion, dedication, and lots of
          creativity.
        </h1>

        {/* icon     */}
        <p className="relative left-0 right-0 mx-auto my-6 h-24 w-24 rounded-full bg-[#00bbfd] lg:inline-block"></p>
      </section>

      <section className="bg-white py-12 px-16 text-center">
        <div className="my-10">
          <h2 className=" text-4xl font-bold text-[#00bbfd]">
            WE CAN HELP YOU WITH
          </h2>
          <p className="my-2 font-[350]">
            We are your partners and we will do all the hard work for you.
          </p>
        </div>

        {/* process icons container */}
        <div className="flex flex-col justify-center lg:flex-row lg:justify-around ">
          <div>
            <p className=" relative left-0 right-0 mx-auto h-20 w-20 rounded bg-[#00bbfd]"></p>
            <h2 className="my-4 text-xl font-bold text-gray-700">STRATEGY</h2>
          </div>
          <div>
            <p className=" relative left-0 right-0 mx-auto h-20 w-20 rounded bg-[#00bbfd]"></p>

            <h2 className="my-4 text-xl font-bold text-gray-700">
              DEVELOPMENT
            </h2>
          </div>
          <div>
            <p className=" relative inset-0  m-auto  h-20 w-20 rounded bg-[#00bafd]"></p>

            <h2 className="my-4 text-xl font-bold text-gray-700">MARKETING</h2>
          </div>
        </div>
      </section>
      {/* services con */}
      <div className="flex max-h-[50rem] min-h-[25rem] flex-col lg:flex-row">
        <section className="services bg-[rgba(30,173,224,0.73)]  ">
          <img
            src="https://geoproglobal.com/wp-content/uploads/2020/03/snappy-2-300x76.png"
            className="relative inset-0  m-auto my-6"
          />
          <p>
            SnappyWire is the fastest and simplest sales platform that enables
            your social network sales anytime, anywhere with its unique mPOS
            features. Read More
            <Link href={"#"} className="text-blue-600">
              Read More.
            </Link>
          </p>
        </section>
        <section className="services bg-[#00bafdd2]">
          <img
            src="https://geoproglobal.com/wp-content/uploads/2020/11/Easethetics-300x101.png"
            className="relative inset-0  m-auto"
          />

          <p>
            Easethetics (Aesthetic Management System) is a highly-secured and
            specialized platform of applications that leverage technology to
            upgrade the quality of management in the sectors of beauty and
            wellness industry. It provides you with the tools that can
            potentially help to fully optimize your operations and maximize your
            profit. <span className="text-blue-600"> Read More</span>
          </p>
        </section>

        <section className="services bg-[#00bafda4]">
          <img
            src="https://geoproglobal.com/wp-content/uploads/2020/03/Untitled-2-300x76.png"
            className="relative left-0 right-0 mx-auto"
          />

          <p>
            From core ERP and CRM solutions to aging legacy systems, OutSystems
            makes it easy to integrate any external enterprise systems,
            database, or custom app.
            <span className="text-blue-600"> Read More</span>
          </p>
        </section>
      </div>
    </>
  );
}
