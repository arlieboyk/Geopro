import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

export async function DELETE(request: Request) {
  const id = await request.json();
  console.log(id);
  return NextResponse.json(id);
  //   const userExists = prisma.user.findFirst({
  //     where: {
  //       id: Number(id),
  //     },
  //   });
  //   console.log(userExists);
  //   if (userExists != null) {
  //     const data = await prisma.user.delete({
  //       where: {
  //         id: Number(id.id),
  //       },
  //     });
  //     console.log("deteled", id);

  //     return NextResponse.json({ msg: `deleted ${data.fullName}` });
  //   } else {
  //     return NextResponse.json({ msg: `No data fount ` });
  //   }

  //   try {
  //     const data = await prisma.user.delete({
  //       where: {
  //         id: Number(id.id),
  //       },
  //     });
  //     console.log(data);
  //     return NextResponse.json({ msg: `deleted ${data.fullName}` });
  //   } catch (error) {
  //     return new Response(error);
  //   }
}