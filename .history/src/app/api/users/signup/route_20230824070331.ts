import { connectToDB } from "@/libs/db";
import userModel from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectToDB()
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const inputValidation = signupInput.safeParse(body)
        if (!inputValidation.success) {
            return NextResponse.json({
                status: false,
                msg: 'Invalid Input.',
              });
        }
        const existingUser = await userModel.find({username: body.username})
        if (existingUser.length != 0) {
            return NextResponse.json({
                status: false,
                msg: 'user exists.',
            });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(body.password, salt)

    } catch (err) {
        console.log(err)
    }
}