import { NextResponse } from "next/server";
import prisma from "../../../lib/Prisma";

interface User {
    id: number
    message: string
}

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