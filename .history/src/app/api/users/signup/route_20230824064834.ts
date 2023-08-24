import { connectToDB } from "@/libs/db";
import userModel from "@/models/userModel";
import { signupInput } from "@/types";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    const body = await request.json()
}