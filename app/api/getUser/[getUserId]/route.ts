import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/Prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  const id = context.params;

  if (id === null) {
    return new Response("Error");
  }

  try {
    console.log(id.getUserId);
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id.getUserId),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}
