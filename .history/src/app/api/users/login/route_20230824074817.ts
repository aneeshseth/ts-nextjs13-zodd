import { connectToDB } from "@/libs/db";
import User from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectToDB()
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const inputValidation = signupInput.safeParse(body)
        if (!inputValidation.success) return NextResponse.json({ status: false, msg: 'Invalid Input.' });
        const {username, password} = body;
        const existingUser = await User.find({username: username})
        if (existingUser.length == 0) return NextResponse.json({ status: false, msg: 'user does not exist.'});
        const comparePassword = await bcryptjs.compare(password, existingUser[0].password)
        if (comparePassword) 
        return NextResponse.json({
            status: true,
        })
    } catch (err) {
        console.log(err)
    }
}

