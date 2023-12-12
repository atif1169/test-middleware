import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname; // Current path

  console.log("path : ", path);

  /* user unavailable & route authorize */
  if (path === "/") {
    return NextResponse.redirect(new URL("/test", request.url));
  }

  // user available & route unauthorize
  if (path === "/test2") {
    return NextResponse.redirect(new URL("/test3", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|api).*)", // Redirect without checking inner files of these files
  // matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)', // Redirect without checking inner files of these files
  // runtime: 'experimental-edge'
};
