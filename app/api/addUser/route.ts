import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

import { NextApiRequest, NextApiResponse } from "next"

type userTypes = {
  email: string
  fName: string
  password: string

}

export async function POST(
  request: Request,
  req: NextApiRequest,
  res: NextApiResponse
) {
  // try {
  //   // const body = JSON.parse(request.body);
  //   const reqbody: userTypes = JSON.parse(req.body)
  //   const user = await prisma.user.create({
  //     data: {
  //       fullName: reqbody.fName,
  //       email: reqbody.email,
  //       password: reqbody.password,
  //     },
  //   });

  //   return NextResponse.json({ message: `user created ${user}` });
  // } catch (err) {
  //   return NextResponse.json({ msg: 'error' });
  // }

  try {
    const post: userTypes = JSON.parse(req.body)
    if (req.method === "POST") {
      if (!post.email.length) {
        return res.status(500).json({ message: "Please do not leave this empty." })
      }

      const data = await prisma.user.create({
        data: {
          fullName: post.fName,
          email: post.email,
          password: post.password,

        },
      })
      res.status(200).json(data)
    } else {
      res.status(405).json({ message: 'Method not allowed' })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server error' })
  }

}
