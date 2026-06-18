// FILE: app/api/admin/verify-key/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { key } = await req.json();

  if (key === process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
