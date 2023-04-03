import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(
  request: Request,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fName } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  console.log(fName, email, password);

  return NextResponse.json({ msg: req.body });
  // try {
  //   const user = await prisma.user.create({
  //     data: {
  //       fullName: fName,
  //       email: email,
  //       password: password,
  //     },
  //   });

  //   console.log("user created", req.body);
  //   res.status(200).json({ message: "Note created" });
  // } catch (err) {
  //   console.log("error");

  //   return NextResponse.json({ msg: error });
  // }
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
