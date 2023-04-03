import { Suspense } from "react";
import Loading from "../loading";

interface user {
  name: string;
  id: number;
  email: string;
  phone: string;
  address: {
    geo: {
      lat: number;
      lng: string;
    };
  };
}
interface photo {
  albumId: number;
  thumbnailUrl: string;
}

const getUser = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = res.json();
  return await data;
};

export default async function page({ params }) {
  /* fetch photos directly in this component */
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params.userId}`
  );
  const photo: photo = await res.json();

  const user: user = await getUser(params.userId);
  console.log("user ", user);

  return (
    <section className="my-12 h-full w-full">
      {/* card */}
<<<<<<< HEAD
      <div className="shadw-sm relative m-auto w-10/12 rounded bg-white py-6 text-center md:w-2/3">
        <img
          src={photo.thumbnailUrl}
          className="relative top-0 left-0 right-0 mx-auto h-32 w-32 rounded-full hover:scale-105  hover:shadow-2xl"
        />
        <p className="mx-2 inline">{user.id}</p>
        <h2 className="inline font-semibold">{user.name}</h2>
        <h2 className=" font-normal">Phone no: {user.phone}</h2>
        <p>Latitude: {user.address.geo.lat}</p>
        <p>Longtitude: {user.address.geo.lng}</p>
      </div>
=======
      <Suspense fallback={<Loading />}>
        <div className="shadw-sm relative m-auto w-10/12 rounded bg-white py-6 text-center md:w-2/3">
          <img
            src={photo.thumbnailUrl}
            className="relative top-0 left-0 right-0 mx-auto  h-32 w-32 rounded-full"
          />
          <p className="mx-2 inline">{user.id}</p>
          <h2 className="inline font-semibold">{user.name}</h2>
          <h2 className=" font-normal">{user.phone}</h2>
          <p>{user.address.geo.lat}</p>
          <p>{user.address.geo.lng}</p>
        </div>
      </Suspense>
>>>>>>> af58a939c786722f9a262c6832d6747c85672426
    </section>
  );
}
