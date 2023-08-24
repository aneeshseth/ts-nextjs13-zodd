import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const token = request.headers.get('authorization')?.split(" ")[1] || ''
    console.log("token")
    console.log(token)
    if (token === '') return NextResponse.json({status: false, msg: "token failed"})
    const decodedToken: any = jwt.verify(token, "ANEESH")
    console.log(decodedToken)
    const res = await NextResponse.json({status: true, msg: decodedToken});
    console.log(res)
    return NextResponse.json({status: true, msg: decodedToken});
}