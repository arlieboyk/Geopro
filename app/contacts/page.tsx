"use client";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import getAllData from "../../lib/getAllData";
import GetData from "../components/Contacts/GetData";
// interface Data {
//   id: number;
//   uid: string;
//   name: string;
//   fname: string;
//   lname: string;
//   number: number;
//   eaddress: string;
//   birthday: string;
//   username: string;
//   password: string;
//   confirmpassword: string;
// }
// interface ApiData {
//   data: Data[];
// }

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function Contacts() {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      const res = await fetch("/api/getData", {
        method: "POST",
      })
        .then((response) => response.json())
        .then((json) => setData(json));

      // const data = await res.json();
      // setData(data);
      // setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data ", typeof data);
    console.log("content ", data);
  }, [data]);

  // if (loading) {
  //   return <p>Loading data...</p>;
  // }

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Contacts;
