import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { ServerResponse } from "@/shared/models";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const token = request.cookies.get("token")?.value;
  let response = NextResponse.next();
  if (token) {
    try {
      await fetch(`${process.env.HOST}/verify`, {
        cache: "no-cache",
        method: "GET",
        headers: {
          apikey: process.env.APIKEY || "",
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: `token=${token}`,
        },
        credentials: "include",
        mode: "cors",
      }).then(async (res) => {
        const result = (await res.json()) as ServerResponse;
        if (!result.success) {
          response = NextResponse.redirect(new URL("/", request.url));
          response.cookies.delete("token");
        }
      });
    } catch (e) {
      console.log(e);
    }
  } else if (request.nextUrl.pathname.includes("write")) {
    return Response.redirect(new URL("/signin", request.url));
  }

  return response;
}

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
