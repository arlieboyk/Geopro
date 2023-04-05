

type userTypes = {
    email: string;
    fullname: string;
    message: string;
};

import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

/* GET USER */
export async function GET(request: Request) {
    const reponse = await prisma.user.findMany();
    return NextResponse.json(reponse);
}



export async function POST(request: Request, req: NextApiRequest) {
    /* request.json will contain the body and other request */
    const res: userTypes = await request.json();
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



interface User {
    id: number
    message: string
}
/* EDIT USER */
export async function PUT(request: Request,) {
    try {
        const user: User = await request.json()
        console.log(user.id, user.message)
        const edit = await prisma.user.update({
            where: {
                id: Number(user.id)
            },
            data: {
                message: user.message
            }
        })

        return NextResponse.json({ name: edit.fullName, updatedMessage: edit.message })
    } catch (error) {

        return NextResponse.json({ msg: error })
    }

}


export async function DELETE(request: Request) {
    const id = await request.json();
    console.log(id);
    try {
        const data = await prisma.user.delete({
            where: {
                id: Number(id.id),
            },
        });
        console.log('deleted ', data);
        return NextResponse.json({ msg: `deleted ${data.fullName}` });
    } catch (error) {
        return new Response(error);
    }
}  