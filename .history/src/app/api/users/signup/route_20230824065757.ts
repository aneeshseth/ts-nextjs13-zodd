import { connectToDB } from "@/libs/db";
import userModel from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const inputValidation = signupInput.safeParse(body)
        console.log(inputValidation)
        console.log(inputValidation.success)
        if (!inputValidation.success) {
            return NextResponse.json({
                status: false,
                msg: 'Invalid Input',
              });
        }
        return NextResponse.json({
            status: true,
            msg: body,
          });
    } catch (err) {
        console.log(err)
    }
}