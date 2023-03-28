import React from "react";

const avengers = [
  {
    name: "Captain America",
    position: "CEO and PM",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/03/Ceo_hyunwook.jpg",
  },
  {
    name: "Dr. Strange",
    position: "Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2016/06/0-02-06-bd52e6bea8f41eec978d030df1397036ae95393f3502ecf5219b5a5a22714a0b_a6cca9259a12c43b.jpg",
  },
  {
    name: "Thor",
    position: "ERP Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-c02d6bb38f593a095f307576aa0b4173a202b26e8ebee0e583a7439f2b16969e_7e5ea509ba283ab2.jpg",
  },
  {
    name: "Nick Fury",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-4127ae42ed7fae4da10cbaaaaba6a211f42e9375a7116af24bf82802c5a7c1c6_e42aee9844d6514e.jpg",
  },
  {
    name: "Black Panther",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-504bbe0602de8d295551f019164d287b19beae2d0e8d839c4cee09f531504197_f5cbcd5dd096d9ba.jpg",
  },
  {
    name: "Incredible Hulk",
    position: "PHP Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-33-194.jpg",
  },
  {
    name: "Nick Fury",
    position: "HR Admin",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-b4e942a4376760822b5786425a30ea0c1696bb3795c0b05948f06bb6aef20006_dc7d27f252688360.jpg",
  },
  {
    name: "Gamora",
    position: "Marketing",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-32-04-121.jpg",
  },
  {
    name: "Ayo",
    position: "Marketing",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/0-02-06-4832a460cb8cf4f27d268325aadadc9d254c01a52eb029680058facb35cfd875_7648a3aba02373d8.jpg",
  },
  {
    name: "Shang Chi",
    position: "UI/UX Designer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-33-567.jpg",
  },
  {
    name: "Captain Falcon",
    position: "UI/UX Designer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-34-413.jpg",
  },
  {
    name: "Gilgamesh",
    position: "Mobile Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-31-971.jpg",
  },
  {
    name: "Daredevil",
    position: "Python Developer",
    image:
      "https://geoproglobal.com/wp-content/uploads/2022/02/viber_image_2022-02-04_15-03-32-826.jpg",
  },
  {
    name: "Spiderman",
    Position: "Biomedical Technician",
    image: "https://geoproglobal.com/wp-content/uploads/2021/10/bss2.jpg",
  },
  {
    name: "Rocket Raccoon",
    position: "Biomedical Technician",
    image:
      "https://geoproglobal.com/wp-content/uploads/2021/10/437fa9f47c6b01e0dc89e6fccf18ddb7.jpg",
  },
];

function Avengers() {
  return (
    <section className="py-12 px-4 flex flex-col items-center justify-center text-black bg-white">
      <h1 className="text-3xl my-16">Meet Geopro Avengers</h1>
      <div className="grid gap-y-16 gap-x-6 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-full md:2/3 lg:w-2/3   ">
        {avengers.map((employee) => (
          <div
            key={employee.name}
            className="  flex flex-col justify-center items-center  text-center bg-white shadow w-full h-[15rem] "
          >
            <img
              src={employee.image}
              className="relative left-0 right-0 bottom-[3rem] hover:scale-105 mx-auto w-24 h-24 border-2 border-slate-700 rounded-full"
            />
            <p className="font-semibold"> {employee.name}</p>

            <p className=" opacity-80"> {employee.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Avengers;
