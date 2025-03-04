// import { NextResponse } from "next/server";

// export function middleware(request) {
//   // Get the user cookie
//   const user = request.cookies.get("user");

//   // If accessing protected route without being logged in
//   if (!user && request.nextUrl.pathname.startsWith("/myprofile")) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the user cookie
  const user = request.cookies.get("user");

  // If accessing protected route without being logged in
  if (!user && request.nextUrl.pathname.startsWith("/myprofile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If accessing reset password page with token
  if (request.nextUrl.pathname.startsWith("/reset-password/")) {
    const token = request.nextUrl.pathname.split("/reset-password/")[1];
    return NextResponse.redirect(
      new URL(`/resetpassword?token=${token}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/myprofile/:path*", "/reset-password/:path*"],
};
