import Link from "next/link";

export default function First() {
  return (
    <>
      <section className=" bg-[#f2f2f2] py-12 px-6 text-center ">
        <h1 className="text-4xl font-[250] leading-snug">
          We create amazing solutions with passion, dedication, and lots of
          creativity.
        </h1>

        {/* icon     */}
        <p className="relative left-0 right-0 mx-auto h-24 w-24 rounded-full bg-[#00bbfd]"></p>
      </section>

      <section className="bg-white py-12 px-16 text-center">
        <h2 className=" text-4xl font-bold text-[#00bbfd]">
          WE CAN HELP YOU WITH
        </h2>
        <p className="my-2 font-[350]">
          We are your partners and we will do all the hard work for you.
        </p>

        {/* process icons container */}
        <div className="flex flex-col justify-center ">
          <div>
            <p className=" lative left-0 right-0 mx-auto h-20 w-20 rounded bg-[#00bbfd]"></p>
            <h2 className="my-4 text-xl font-bold">STRATEGY</h2>
          </div>
          <div>
            <p className=" lative left-0 right-0 mx-auto h-20 w-20 rounded bg-[#00bbfd]"></p>

            <h2 className="my-4 text-xl font-bold">DEVELOPMENT</h2>
          </div>
          <div>
            <p className=" lative left-0 right-0 mx-auto h-20 w-20 rounded bg-[#00bbfd]"></p>

            <h2 className="my-4 text-xl font-bold">MARKETING</h2>
          </div>
        </div>
      </section>
      <section className="bg-[rgba(30,173,224,0.73)] py-6 px-12 text-center text-white">
        <img
          src="https://geoproglobal.com/wp-content/uploads/2020/03/snappy-2-300x76.png"
          className="relative left-0 right-0 mx-auto my-6"
        />
        <p className="font-[250] text-white">
          Easethetics (Aesthetic Management System) is a highly-secured and
          specialized platform of applications that leverage technology to
          upgrade the quality of management in the sectors of beauty and
          wellness industry. It provides you with the tools that can potentially
          help to fully optimize your operations and maximize your profit{" "}
          <Link href={"#"} className="text-blue-600">
            Read More.
          </Link>
        </p>
      </section>
      <section className="bg-[#00bafdbe]">
        <img
          src="https://geoproglobal.com/wp-content/uploads/2020/11/Easethetics-300x101.png"
          className="relative left-0 right-0 mx-auto"
        />

        <p className="py-6 px-12 text-center text-white">
          Easethetics (Aesthetic Management System) is a highly-secured and
          specialized platform of applications that leverage technology to
          upgrade the quality of management in the sectors of beauty and
          wellness industry. It provides you with the tools that can potentially
          help to fully optimize your operations and maximize your profit.{" "}
          <span className="text-blue-600"> Read More</span>
        </p>
      </section>

      <section className="bg-[#00bbfd59]">
        <img
          src="https://geoproglobal.com/wp-content/uploads/2020/03/Untitled-2-300x76.png"
          className="relative left-0 right-0 mx-auto"
        />

        <p className="py-6 px-12 text-center text-white">
          From core ERP and CRM solutions to aging legacy systems, OutSystems
          makes it easy to integrate any external enterprise systems, database,
          or custom app.
          <span className="text-blue-600"> Read More</span>
        </p>
      </section>
    </>
  );
}
