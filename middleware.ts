import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  alternateLinks: false,
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Pass detected locale to root not-found page via header
  const pathname = request.nextUrl.pathname;
  const firstSegment = pathname.split('/')[1] || '';
  const locale = (routing.locales as readonly string[]).includes(firstSegment)
    ? firstSegment
    : routing.defaultLocale;
  response.headers.set('x-locale', locale);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
