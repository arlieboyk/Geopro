import { error } from "console";

async function getAllData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new error("failed ");
  }

  return res.json();
}

export default getAllData;
