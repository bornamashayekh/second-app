import { NextResponse } from "next/server";
export function middleware(request) {
    console.log("Hello from Middleware!");
    return NextResponse.next();
    
}
export const config = {
    matcher:'/news'
}