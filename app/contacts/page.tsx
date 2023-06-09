"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../loading";
import Form from "../components/Contacts/Form";
import { AiOutlineReload } from "react-icons/ai";
import { getApiEndpoint } from "../../lib/dynamicUrl";
interface User {
  id: number;
  fullName: string;
  email: string;
  message: string;
}
function Contacts() {
  const [user, setUser] = useState<User[]>();
  /* to reload */
  const fetchUser = async () => {
    const res = await fetch(`${getApiEndpoint("userController")}`, {
      next: { revalidate: 10 },
      method: "GET",
    });
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    console.log("user: ", user);
    console.log();
  }, [user]);

  return (
    <div className="w-full py-12">
      <Form />

      <section className="m-auto  h-full w-11/12   md:w-2/3   ">
        <table className="relative my-6 mx-auto max-h-40  w-full overflow-auto  rounded text-white/70 backdrop-blur-lg  backdrop-filter ">
          <thead className="mb-6">
            <AiOutlineReload
              onClick={fetchUser}
              className="m-3 h-6 w-6 cursor-pointer hover:scale-105"
            />
            <tr className="flex w-full justify-between p-4 font-bold ">
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>

          {user ? (
            user.map((user) => (
              <tbody key={user.id} className="over-flow-x-auto">
                <Link href={`contacts/${user.id}`}>
                  <tr className="flex justify-between py-1  px-4 font-semibold hover:scale-105">
                    <td className="flex-1">{user.id}</td>
                    <td className="flex-1">{user.fullName}</td>
                    <td className="flex-1">{user.email}</td>
                  </tr>
                </Link>
              </tbody>
            ))
          ) : (
            <tbody>
              <Loading />
            </tbody>
          )}
        </table>
      </section>
    </div>
  );
}

export default Contacts;
