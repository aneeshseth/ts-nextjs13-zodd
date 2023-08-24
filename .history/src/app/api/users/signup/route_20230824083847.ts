import { connectToDB } from "@/libs/db";
import User from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connectToDB()
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        console.log(body)
        const inputValidation = signupInput.safeParse(body)
        if (!inputValidation.success) return NextResponse.json({ status: false, msg: 'Invalid Input.' });
        const {username, password} = body;
        const existingUser = await User.find({username: username})
        if (existingUser.length != 0) return NextResponse.json({ status: false, msg: 'user exists.'});
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)
        const addUser = new User({
           username, password: hashedPassword
        })
        const addedUser = await addUser.save()
        return NextResponse.json({
            status: true,
            msg: addedUser,
        });
    } catch (err) {
        console.log(err)
    }
}

