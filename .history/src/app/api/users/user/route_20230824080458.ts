import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'


export function getData(request: NextRequest) {
    const token = request.cookies.get("token")?.value || ''
    const decodedToken: any = jwt.verify(token, "ANEESH")
    return decodedToken.username;
}