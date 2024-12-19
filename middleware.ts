import type { MiddlewareConfig } from "next/server";
import { auth } from "./auth";

export default auth(async function middleware() {
  // adapter error being throw on each request (authenticated only)
  //
  // [auth][error] AdapterError: Read more at https://errors.authjs.dev#adaptererror
  // [auth][cause]: Error: The edge runtime does not support Node.js 'perf_hooks' module.
  // Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime
  //     at Object.get (/app/.next/server/edge/chunks/_3fb3d8._.js:62:19)
  //     at createSocket (/app/.next/server/edge/chunks/1350d_postgres_src_2fa65c._.js:815:273)
  //     at Timeout.connect [as _onTimeout] (/app/.next/server/edge/chunks/1350d_postgres_src_2fa65c._.js:969:35)
  //     at listOnTimeout (node:internal/timers:581:17)
  //     at process.processTimers (node:internal/timers:519:7)
  // [auth][details]: {}
});

export const config = {
  matcher: ["/", "/((?!_next|_vercel|.*\\..*).*)"],
} satisfies MiddlewareConfig;
