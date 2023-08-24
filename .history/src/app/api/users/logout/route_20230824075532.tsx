import { NextResponse } from "next/server";

export async function GET() {
    const response = NextResponse.json({
        status: true,
        msg: "logged out"
    })
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(Date.now()) })
    return response;
}