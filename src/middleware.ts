import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "br"],
  defaultLocale: "br",
});

export const config = {
  matcher: ["/", "/(br|en)/:path*"],
};
