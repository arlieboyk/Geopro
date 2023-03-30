import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request:NextApiRequest,{params}) {
  const id = params.id
//   const userId = searchParams.userId
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

    return NextResponse.json(data);
}
