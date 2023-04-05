import Link from "next/link";
import ScrollTop from "../../components/ScrollTop";

export default function Mambu() {
  return (
    <>
      <div className="bg-[#ffffff] p-6">
        <div className="  mx-auto   transition-all   lg:w-2/3     ">
          <section className="relative left-0 right-0 m-auto flex items-center justify-center ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/22mJ9idMPN0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-auto min-h-[25rem] w-full lg:min-h-[35rem] "
            ></iframe>
          </section>

          <section className="text-text-headingFont my-12  md:text-lg">
            <h2 className="text-3xl font-bold">A unique value proposition</h2>

            <h2 className="my-6  text-3xl font-bold">
              Everything you need with a top notch user experience
            </h2>
            <p className=" font-ligh text-[0.9rem] leading-relaxed">
              Easethetics (Aesthetic Management System) is a highly-secured and
              specialized platform of applications that leverage technology to
              upgrade the quality of management in the sectors of beauty and
              wellness industry. It provides you with the tools that can
              potentially help to fully optimize your operations and maximize
              your profit.
            </p>
            <p className="my-6">
              Whether you have a single branch or multiple branch locations,
              Easethetics can grant you effective clinic solutions even just by
              using any of your devices. With just one click, you’ll have a
              well-tuned clinic operations with EASE!
            </p>
          </section>

          <section className="my-28">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2021/03/The_Manila_Times_529x70.png"
              className="mx-auto"
            />
          </section>

          <section className=" md:text-lg">
            <h2>A new software designed to boost the beauty business</h2>
            <h3 className="my-5">By Iza Igkesias, TMT</h3>
            <p>
              In the aesthetics industry, the practitioners and trained
              therapists who conduct both the beauty and wellness procedures
              serve as the lifeblood of the business. However, much as clients
              think of them as experts whose focus is completely on developing
              and delivering treatments, oftentimes these aestheticians, and
              even the doctors and nurses themselves double up as managers of a
              varied mix of responsibilities to ensure revenue. These include
              seeing to paper works, human resource concerns, monitoring
              inventory as well as accounting.
            </p>
            <Link
              href={"#"}
              className="cursor-pointer py-6 text-blue-500 hover:underline"
            >
              Read More.
            </Link>
          </section>
        </div>
      </div>
      {/* platforms */}
      <section className=" flex h-auto flex-col items-center justify-center gap-y-6 bg-myBlue bg-opacity-70 p-6 py-12 text-center">
        <h1 className="my-5 text-7xl font-bold text-white">
          PaaS + IaaS: The Full Stack <br /> Platform
        </h1>

        {/* platform first row */}
        <div className="flex w-full flex-col justify-evenly space-y-3 text-white md:flex-row">
          <div className=" text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/database3-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold">Database Replication</h3>
              <p>
                2 servers, for load balancing <br /> and fail over.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/security2-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold">SSH Access</h3>
              <p>
                Shell access to dev, staging and <br />
                production containers.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/5-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold">Top Notch Hosting</h3>
              <p>
                Perfectly optimized installation,
                <br /> great hardware.
              </p>
            </div>
          </div>
        </div>

        {/* platforms second row */}
        <div className="flex w-full flex-col justify-evenly space-y-3 text-white md:flex-row">
          <div className="text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/dns4-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold">DNS & Routes</h3>
              <p>
                Configure custom routes and
                <br />
                let us handle DNS.
              </p>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/oras-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold"> Email Gateways</h3>
              <p>Unlimited email gateways, auto configured.</p>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://geoproglobal.com/wp-content/uploads/2020/03/6-1-150x150.png"
              className="mx-auto"
            />
            <div className="statement">
              <h3 className="text-xl font-bold">24/7 Monitoring</h3>
              <p>
                Odoo monitors and maintains <br />
                all your servers for you.
              </p>
            </div>
          </div>
        </div>

        <button role="button" className="button-name">
          All features
        </button>
      </section>
      <ScrollTop />

      <footer className="relative flex h-[4rem] w-full items-center justify-center bg-gray-100  ">
        <p className="absolute m-auto">
          © copyright 2021. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
