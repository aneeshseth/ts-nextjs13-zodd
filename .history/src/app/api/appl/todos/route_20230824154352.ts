import { connectToDB } from "@/libs/db";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    //description, user
    const body = await request.json()
}