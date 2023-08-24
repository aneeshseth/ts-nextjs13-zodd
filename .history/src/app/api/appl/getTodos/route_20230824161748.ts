import { connectToDB } from "@/libs/db";
import { NextRequest, NextResponse} from "next/server";
import Todo from "@/models/todoModel";

connectToDB()

export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)
    const {id} = body;
    const todos = await Todo.find({user: id})
    return NextResponse.json({
        status: true,
        msg: todos,
    });
}