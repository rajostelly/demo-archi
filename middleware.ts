import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Apply to all paths except static files
  matcher: ["/((?!_next|.*\\..*).*)"],
};
