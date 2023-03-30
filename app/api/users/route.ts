import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request:NextApiRequest,) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

    return NextResponse.json(data);
}
