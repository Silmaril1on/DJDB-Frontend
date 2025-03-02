import { NextResponse } from "next/server";

export function middleware(request) {
  // Get the user cookie
  const user = request.cookies.get("user");

  // If accessing protected route without being logged in
  if (!user && request.nextUrl.pathname.startsWith("/myprofile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
