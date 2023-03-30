"use client";
import { useEffect, useState } from "react";

interface User {
  map(arg0: (el: any) => any): import("react").ReactNode;
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
  // const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getData", {
        method: "POST",
      });
      const data = await res.json();
      // console.log("data ", data);
      setData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("data ", typeof data);
    console.log("content ", data);
  }, [data]);

  return <div>ss</div>;
}

export default Contacts;
