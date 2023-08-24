import { connectToDB } from "@/libs/db";
import { NextRequest, NextResponse} from "next/server";
import Todo from "@/models/todoModel";
import { todoType } from "@/types";

connectToDB()
export async function POST(request: NextRequest) {
    const body = await request.json()
    const inputValidation = todoType.safeParse(body)
    if (!inputValidation.success) return NextResponse.json({ status: false, msg: 'Invalid Input.' });
    const {description, user} = body;
    const addTodo = new Todo({
        description, user: user
    })
    const addedTodo = await addTodo.save()
    return NextResponse.json({
        status: true,
        msg: addedTodo,
    });
}

export async function GET(request: NextRequest) {
    const body = await request.json()
    const {id} = body;
    const todos = await Todo.find({user: id})
    return NextResponse.json({
        status: true,
        msg: todos,
    });
}