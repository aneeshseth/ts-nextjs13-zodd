import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";
import User from "@/models/userModel";


export async function GET(request: NextRequest) {
    const token = request.headers.get('authorization')?.split(" ")[1] || ''
    console.log("token")
    console.log(token)
    if (token === '') return NextResponse.json({status: false, msg: "token failed"})
    const decodedToken: any = jwt.verify(token, "ANEESH")
    console.log(decodedToken.username)
    return NextResponse.json({msg: decodedToken});
}