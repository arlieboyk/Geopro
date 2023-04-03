import { EyeIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, use } from "react";

interface User {
  id: number;
  fname: string;
  password: string;
  email: string;
}

export default function Form() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // const [user, setUser] = useState<User[]>([]);
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const body = { fName, email, password };
    await fetch("http://localhost:3000/api/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  return (
    <section>
      <form className=" m-auto w-11/12 rounded bg-white px-4 py-4 md:w-2/3">
        <label htmlFor="name" className="font-semibold text-headingFont">
          Full name
        </label>
        <div className="border">
          <input
            type="text"
            id="name"
            onChange={(e) => setFName(e.target.value)}
            className="focus-border-0 w-full appearance-none border-none focus:ring-0"
          />
        </div>
        {/* email */}
        <label htmlFor="email" className="font-semibold text-headingFont">
          Email
        </label>
        <div className="border">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="focus-border-0 w-full appearance-none border-none focus:ring-0"
          />
        </div>
        <label htmlFor="password" className="font-semibold text-headingFont">
          Password
        </label>
        <div className="relative flex items-center border">
          <input
            type={`${isPasswordVisible ? "text" : "password"}`}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className=" focus-border-0 w-full appearance-none border-none focus:ring-0"
          />
          <EyeIcon
            className="absolute right-3 h-5 w-5 cursor-pointer text-myBlue"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="relative inset-0 mx-auto  my-4 w-full bg-myBlue px-4 py-2 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
