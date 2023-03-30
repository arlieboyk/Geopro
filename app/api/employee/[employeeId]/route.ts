import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { avengers } from "../../../components/Homepage/Avengers";

export async function GET(request: Request, { params }) {
  const employeeId = params.employeeId;

  // avengers.map((el) => {
  //   if (employeeId === el.id) {
  //     return NextResponse.json(el);
  //   } else {
  //     return new Response(`No employee ${employeeId}`);
  //   }
  // });

  interface emp {
    name: string;
    id: number;
    position: string;
    image: string;
  }
  let emp: emp;

  // const getId = (id: any) => {
  //   if (id.id === employeeId) {
  //     return id;
  //   }
  // };

  // const result = avengers.filter(getId);

  return NextResponse.json(avengers);
}
