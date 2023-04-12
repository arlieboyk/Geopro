import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

export const avengers = [
  {
    id: 1,
    name: "Captain America",
    position: "CEO and PM",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/03/Ceo_hyunwook.jpg",
  },
  {
    id: 2,
    name: "Dr. Strange",
    position: "Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2016/06/0-02-06-bd52e6bea8f41eec978d030df1397036ae95393f3502ecf5219b5a5a22714a0b_a6cca9259a12c43b.jpg",
  },
  {
    id: 3,
    name: "Thor",
    position: "ERP Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-c02d6bb38f593a095f307576aa0b4173a202b26e8ebee0e583a7439f2b16969e_7e5ea509ba283ab2.jpg",
  },
  {
    id: 4,
    name: "Nick Fury",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-4127ae42ed7fae4da10cbaaaaba6a211f42e9375a7116af24bf82802c5a7c1c6_e42aee9844d6514e.jpg",
  },
  {
    id: 5,
    name: "Black Panther",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-504bbe0602de8d295551f019164d287b19beae2d0e8d839c4cee09f531504197_f5cbcd5dd096d9ba.jpg",
  },
  {
    id: 6,
    name: "Incredible Hulk",
    position: "PHP Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-33-194.jpg",
  },
  {
    id: 7,
    name: "Nick Fury",
    position: "HR Admin",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-b4e942a4376760822b5786425a30ea0c1696bb3795c0b05948f06bb6aef20006_dc7d27f252688360.jpg",
  },
  {
    id: 9,
    name: "Gamora",
    position: "Marketing",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-32-04-121.jpg",
  },
  {
    id: 10,
    name: "Ayo",
    position: "Marketing",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-4832a460cb8cf4f27d268325aadadc9d254c01a52eb029680058facb35cfd875_7648a3aba02373d8.jpg",
  },
  {
    id: 11,
    name: "Shang Chi",
    position: "UI/UX Designer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-33-567.jpg",
  },
  {
    id: 12,
    name: "Captain Falcon",
    position: "UI/UX Designer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-34-413.jpg",
  },
  {
    id: 13,
    name: "Gilgamesh",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-31-971.jpg",
  },
  {
    id: 14,
    name: "Daredevil",
    position: "Python Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-32-826.jpg",
  },
  {
    id: 15,
    name: "Spiderman",
    Position: "Biomedical Technician",
    image: "https://geoproglobal.com/wp-content/uploads/2021/10/bss2.jpg",
  },
  {
    id: 16,
    name: "Rocket Raccoon",
    position: "Biomedical Technician",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/437fa9f47c6b01e0dc89e6fccf18ddb7.jpg",
  },
];

function Avengers() {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-12 px-4 text-black">
      <h1 className="my-16 text-center text-3xl font-bold text-[#0088cc] ">
        Meet Geopro Avengers Team
      </h1>
      <div className="mx-auto grid w-full grid-cols-1 gap-y-16 gap-x-6   sm:grid-cols-2 lg:w-2/3 lg:grid-cols-3 xl:grid-cols-4  ">
        {/* cards */}
        {avengers.map((employee) => (
          <Link key={employee.id} href={`/employee/${employee.id}`}>
            <div
              key={employee.name}
              className=" relative mx-auto flex h-[15rem] w-full flex-col items-center justify-center rounded border-t-4 border-[#0088cc] bg-white text-center shadow md:w-11/12  "
            >
              <img
                src={employee.image}
                className="absolute left-0 right-0 bottom-[12rem] mx-auto h-24 w-24 rounded-full border-2 border-[#0088cc] hover:scale-105"
              />
              <p className="font-semibold text-[#095ca4]"> {employee.name}</p>

              <p className=" text-gray-500"> {employee.position}</p>
              <div>
                <AiFillFacebook className="inline-block h-6 w-6 text-[#0088cc] hover:scale-105" />
                <AiFillLinkedin className="inline-block h-6 w-6 text-[#0088cc] hover:scale-105" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Avengers;
