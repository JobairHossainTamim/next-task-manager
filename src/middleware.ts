import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const publicRoute =
      request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/register";

    const token = request.cookies.get("token")?.value;

    // if token exists and the route is public, redirect to home
    if (token && publicRoute) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    // if token not exists and the route is private, redirect to login
    if (!token && !publicRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const config = {
  matcher: ["/login", "/register", "/home", "/client_home"],
};
