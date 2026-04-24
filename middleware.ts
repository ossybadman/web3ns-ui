import { auth } from "@/lib/auth";

export default auth((req) => {
  const isOnDashboard = req.nextUrl.pathname.startsWith("/dashboard");
  if (isOnDashboard && !req.auth) {
    return Response.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
