import { connectToDB } from "@/libs/db";
import userModel from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)
    /*
    const inputValidation = signupInput.safeParse(body)
    if (!inputValidation.success) {
        return NextResponse.json({
            status: false,
            msg: 'Invalid Input',
          });
    }
    */
    console.log(inputValidation)
}