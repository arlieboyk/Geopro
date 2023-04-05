import { EyeIcon } from "@heroicons/react/24/solid";
import { useState, useEffect, use } from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

interface User {
  id: number;
  fname: string;
  password: string;
  email: string;
}
import { getApiEndpoint } from "../../../lib/dynamicUrl";
export default function Form() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // const [user, setUser] = useState<User[]>([]);
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: any) => {
    // event.preventDefault();
    let data = { fullname: fName, email: email, message: message };
    const JSONdata = JSON.stringify(data);

    const response = await fetch(`${getApiEndpoint("addUser")}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    });

    const result = await response.json();
    console.log("result: ", result);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" m-auto  w-11/12 rounded bg-white  px-4 py-4 md:w-2/3"
    >
      <div className="mx-auto my-3 flex w-auto space-x-3 text-myBlue">
        <h1>Get in Touch</h1>
        <a href="https://www.facebook.com/geoproglobalPH" target="_blank">
          <AiFillFacebook className="h-6 w-6  hover:scale-105" />
        </a>
        <a
          href="https://www.linkedin.com/company/geopro-global-solutions-inc"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6 hover:scale-105" />
        </a>
      </div>
      <label htmlFor="name" className="font-semibold text-headingFont">
        Full name
      </label>
      <div className="border">
        <input
          type="text"
          id="name"
          required
          minLength={5}
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
          required
          onChange={(e) => setEmail(e.target.value)}
          className="focus-border-0 w-full appearance-none border-none focus:ring-0"
        />
      </div>
      <label htmlFor="message" className="font-semibold text-headingFont">
        Message
      </label>
      <div className="relative flex items-center border">
        <textarea
          // type={`${isPasswordVisible ? "text" : "password"}`}
          id="message"
          minLength={10}
          required
          onChange={(e) => setMessage(e.target.value)}
          className=" focus-border-0 w-full appearance-none  border-none focus:ring-0"
        />
        {/* <EyeIcon
            className="absolute right-3 h-5 w-5 cursor-pointer text-myBlue"
            onClick={() => setPasswordVisible(!isPasswordVisible)}
          /> */}
      </div>
      <button
        type="submit"
        className="relative inset-0 mx-auto  my-4 w-full bg-myBlue px-4 py-2 font-semibold text-white"
      >
        Submit
      </button>
    </form>
  );
}
