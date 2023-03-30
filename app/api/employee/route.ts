import { NextApiRequest } from "next";
import { avengers } from "../../components/Homepage/Avengers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(avengers);
}
