import { NextResponse } from 'next/server';

export function middleware(request) {

  const { pathname: nextPathname } = request.nextUrl;
  const userIsLoggedIn = !!request.cookies.get('utoken');

  const destinationUrl = (url) => new URL(url, request.url);


  if (['/checkout', '/'].includes(nextPathname) && !userIsLoggedIn) {
    return NextResponse.redirect(destinationUrl('/login'));
  }

  return NextResponse.next();
}
