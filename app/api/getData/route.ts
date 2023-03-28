import { NextResponse } from "next/server";

const username = "admin";
const password = "admin";
const credential = `${username}:${password}`;
const base64Credentials = btoa(credential);

export async function GET(request: Request) {
  const res = await fetch("http://192.168.1.95:8000/api/userlist/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64Credentials}`,
    },
  });
  const data = await res.json();
  return NextResponse.json({ res: data });
}

export async function POST(request: Request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return NextResponse.json({ res: data });
}
