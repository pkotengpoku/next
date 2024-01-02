import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
    publicRoutes: ["/", "/quiz","/quiz/special"],
  });
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};