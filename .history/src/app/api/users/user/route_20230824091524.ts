import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";


export function GET(request: NextRequest) {
    console.log(request.cookies)
    const token = request.cookies.get("token")?.value || ''
    console.log("token")
    console.log(token)
    if (token === '') return NextResponse.json({status: false, msg: "token failed"})
    const decodedToken: any = jwt.verify(token, "ANEESH")
    console.log(decodedToken)
    return NextResponse.json({status: true, msg: decodedToken});
}