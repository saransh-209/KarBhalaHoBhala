// FILE: app/api/volunteer/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { error } = await supabase.from("volunteer_applications").insert({
    full_name: body.fullName,
    email: body.email,
    phone: body.phone,
    role: body.role,
    motivation: body.motivation,
  });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
