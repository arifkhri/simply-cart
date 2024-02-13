import { NextResponse } from 'next/server';

export function middleware(request) {
console.log('🚀 ~ request:', request);

//   const { pathname: nextPathname } = request.nextUrl;
//   const userIsLoggedIn = !!request.cookies.get('utoken');

//   const destinationUrl = (url) => new URL(url, request.url);

//   if (['/checkout', '/products'].some((prefix) => nextPathname.startsWith(prefix)) && !userIsLoggedIn) {
//     return NextResponse.redirect(destinationUrl(`/login?destination=${nextPathname}`));
//   }

  return NextResponse.next();
}
