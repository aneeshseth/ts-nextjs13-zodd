import { connectToDB } from "@/libs/db";
import { NextRequest } from "next/server";
import Todo from "@/models/todoModel";
import { TodoParams } from "@/types";


export async function POST(request: NextRequest) {
    //description, user
    const body = await request.json()
    const inputValidation = 
}