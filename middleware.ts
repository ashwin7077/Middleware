import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // ✅ Simulate vulnerable CVE behavior: if subrequest header is present, skip auth
  if (req.headers.get('x-middleware-subrequest')) {
    return NextResponse.next(); // ⛔️ bypasses check!
  }

  const token = req.cookies.get('auth_token')?.value;

  if (path === '/flag' && token !== 'letmein') {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/flag'],
};
