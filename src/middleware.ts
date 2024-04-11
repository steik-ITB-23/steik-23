import { authMiddleware } from "@clerk/nextjs";

const NEXT_PUBLIC_CLERK_SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/auth/sign-in";
const NEXT_PUBLIC_CLERK_SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/auth/sign-up";

export default authMiddleware({
  apiRoutes: [NEXT_PUBLIC_CLERK_SIGN_IN_URL, NEXT_PUBLIC_CLERK_SIGN_UP_URL],
  publicRoutes: ["/", "/tentang-bpa", "/akademik", "/acara-kemahasiswaan", "/favicon"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
