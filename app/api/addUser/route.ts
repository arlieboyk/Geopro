// import { NextResponse } from "next/server";
// import prisma from "../../../lib/Prisma";

// import { NextApiRequest, NextApiResponse } from "next";

type userTypes = {
  email: string;
  fullname: string;
  message: string;
};

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

export async function POST(request: Request, req: NextApiRequest) {
  const res: userTypes = await request.json();
  // const body = req.body;
  console.log(res);
  if (res) {
    const user = await prisma.user.create({
      data: {
        fullName: res.fullname,
        message: res.message,
        email: res.email,
      },
    });
    return NextResponse.json({ msg: `Created ${user.email}` });
  }
  return NextResponse.json({ msg: `Server Error` });
}
