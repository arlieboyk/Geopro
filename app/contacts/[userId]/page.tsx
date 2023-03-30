interface user {
  name: string;
  id: number;
}

const getUser = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = res.json();
  return await data;
};

export default async function page({ params: userId }) {
  console.log("id params ", userId);
  const user: user[] = await getUser(userId);

  return (
    <div>
      {user.map((el) => (
        <>
          <h1 className=""> {el.name}</h1>
        </>
      ))}
    </div>
  );
}
