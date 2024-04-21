import { NextResponse } from "@/node_modules/next/server";


export function GET(){
    return NextResponse.json({
        message: "You are logged in"
    })
}