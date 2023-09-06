import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// トップページにアクセスされた際の挙動

export function middleware(request: NextRequest) {
    return NextResponse.rewrite(new URL('/login', request.url));
}

export const config = {
  matcher: '/',
};
