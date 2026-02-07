import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;

  if (
    pathname.startsWith("/play") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  )
    return NextResponse.next();

  url.pathname = `/play${!process.env.NODE_ENV && "/index.html"}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|play).*)"],
};
