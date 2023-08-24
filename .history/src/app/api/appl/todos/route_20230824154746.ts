import { connectToDB } from "@/libs/db";
import { NextRequest, NextResponse} from "next/server";
import Todo from "@/models/todoModel";
import { todoType } from "@/types";


export async function POST(request: NextRequest) {
    //description, user
    const body = await request.json()
    const inputValidation = todoType.safeParse(body)
    if (!inputValidation.success) return NextResponse.json({ status: false, msg: 'Invalid Input.' });
    const {description, id} = body;
    const addTodo = new Todo({
        description, 
    })

}