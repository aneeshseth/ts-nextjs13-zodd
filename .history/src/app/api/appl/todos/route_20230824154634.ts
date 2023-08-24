import { connectToDB } from "@/libs/db";
import { NextRequest } from "next/server";
import Todo from "@/models/todoModel";
import { todoType } from "@/types";


export async function POST(request: NextRequest) {
    //description, user
    const body = await request.json()
    const inputValidation = todoType.safeParse(body)
    
}