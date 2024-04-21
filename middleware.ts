import { NextRequest, NextResponse } from "./node_modules/next/server";

// let requestCount = 0;

// export default function middleware(req: NextRequest){
   
//     requestCount++;
//     const res = NextResponse.next() // Now the endpoints are called 
//     console.log("requestCount: ", requestCount);
//     return res
// }

let requestCount = 0;

export function middleware(request: NextRequest){
    
     console.log(request.nextUrl.pathname)
     if(request.nextUrl.pathname.startsWith('/admin')){
        return NextResponse.redirect(new URL('/signin',request.url))
     }
     if(request.nextUrl.pathname.startsWith('/dashboard')){
        requestCount++;
        console.log("requestCount: ", requestCount)
        return NextResponse.next();
     }
}


// // One of the ways to restrict to run a particular route only in  a path
// export const config = {
//     matcher: '/api/:path*',
// } 
