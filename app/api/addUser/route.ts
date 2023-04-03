import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { fName, email, password } = req.body;
    const user = await prisma.user.create({
      data: {
        fullName: fName,
        email: email,
        password: password,
      },
    });

    console.log("user created", req.body);
    res.status(200).json({ message: `user created ${user}` });
  } catch (err) {
    console.log("error");

    return NextResponse.json({ msg: err });
  }
}

// const handleSubmit = async (fName: string, email: string, password: string) => {
//   const user = prisma.user.create({
//     data: {
//       fullName: fName,
//       email: email,
//       password: password,
//     },
//   });
// };

// export default ;
