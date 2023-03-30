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
    <section className="w-full h-full my-12">
      {/* card */}
      <div className="relative w-10/12 md:w-2/3 py-6 text-center m-auto bg-white shadw-sm rounded">
        <img
          src={photo.thumbnailUrl}
          className="relative rounded-full h-32 w-32 top-0  left-0 right-0 mx-auto"
        />
        <p className="inline mx-2">{user.id}</p>
        <h2 className="inline font-semibold">{user.name}</h2>
        <h2 className=" font-normal">{user.phone}</h2>
        <p>{user.address.geo.lat}</p>
        <p>{user.address.geo.lng}</p>
      </div>
    </section>
  );
}
