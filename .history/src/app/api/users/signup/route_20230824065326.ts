import { connectToDB } from "@/libs/db";
import userModel from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest, response: NextResponse) {
    const body = await request.json()
    const inputValidation = signupInput.safeParse(body)
    if (!inputValidation.success) {
        return response.json({
            status: false,
            msg: 'Invalid Input',
          });
      }
    console.log(inputValidation)
}