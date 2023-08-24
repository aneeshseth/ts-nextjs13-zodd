import { connectToDB } from "@/libs/db";
import { NextRequest, NextResponse} from "next/server";
import Todo from "@/models/todoModel";

connectToDB()

export async function POST(request: NextRequest) {
    const body = await request.json()
    const {id} = body;
    const todos = await Todo.find({user: id})
    return NextResponse.json({
        status: true,
        msg: todos,
    });
}

/*
Learning to use Zodd Input validation with Typescript on both the backend and the frontend, NextJS authentication with a simple CRUD application using NextJS 13 constructs for backend and frontend and MongoDB for the Database.
*/