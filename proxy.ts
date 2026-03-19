import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// 1. Tell the bouncer which rooms are VIP only (anything starting with /dashboard)
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

// 2. The bouncer checks the ID. If it's a VIP room, protect it!
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

// 3. This math tells the bouncer to ignore images and background files
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}