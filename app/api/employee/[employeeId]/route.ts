import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { avengers } from "../../../components/Homepage/Avengers";

export async function GET(request: Request, { params }) {
  const employeeId = params.employeeId;

  avengers.map((employee) => {
    if (employeeId === employee.id) {
      return NextResponse.json(employee);
    } else {
      return new Response(`No employee ${employeeId}`);
    }
  });

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

  // return NextResponse.json(avengers);
}
