import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { NextResponse } from "next/server";


export function GET(request: NextRequest) {
    const token = request.cookies.get("token")?.value || ''
    if (token === '') return NextResponse.json({status: false, msg: "token failed"})
    const decodedToken: any = jwt.verify(token, "ANEESH")
    return decodedToken.username;
}