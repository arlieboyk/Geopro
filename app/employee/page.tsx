import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { Employee } from "./[employeeId]/page";
import Link from "next/link";
import ScrollTop from "../components/ScrollTop";

const apiEndpointEmployee = (endpoint: string) => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname; // Get the hostname (e.g., localhost or 192.168.0.5)
    const port = window.location.port; // Get the port (e.g., 3000)
    console.log(`http://${hostname}:${port}/api/${endpoint}`);
    return `http://${hostname}:${port}/api/${endpoint}`; // Construct the API endpoint URL
  }
  console.log("failed getting hostname and port");
  return `http://localhost:3000/api/${endpoint}`;
};

async function employee() {
  // const res = await fetch(`http://localhost:3000/api/employee`);
  const res = await fetch(`${apiEndpointEmployee("employee")}`);
  const employees: Employee[] = await res.json();

  return (
    <div>
      {employees ? (
        employees.map((emp) => (
          <>
            {/* cards */}
            <div
              key={emp.id}
              className="rounded-2 relative z-0 my-12 mx-auto  h-auto w-10/12 space-y-6  p-6  
               text-center text-white backdrop-blur-lg backdrop-filter hover:scale-105 md:w-2/3 lg:w-1/3"
            >
              <Link href={`/employee/${emp.id}`}>
                <img
                  src={emp.image}
                  className=" left-0 right-0 bottom-14 mx-auto h-24 w-24 rounded-full"
                />
                <p className="text-xl font-bold">{emp.name}</p>
                <p>{emp.position}</p>

                <div>
                  <AiFillFacebook className="inline-block h-6 w-6 text-[#0088cc] hover:scale-105" />
                  <AiFillLinkedin className="inline-block h-6 w-6 text-[#0088cc] hover:scale-105" />
                </div>
              </Link>
            </div>
          </>
        ))
      ) : (
        <>
          <h1 className="animate-ping text-3xl font-bold">Loading...</h1>
        </>
      )}
      <ScrollTop />
    </div>
  );
}
export default employee;
