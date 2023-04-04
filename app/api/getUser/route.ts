import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

export async function GET(request: Request) {
  const reponse = await prisma.user.findMany();
  return NextResponse.json(reponse);
}
