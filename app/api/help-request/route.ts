// FILE: app/api/help-request/route.ts

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { error } = await supabase.from("help_requests").insert({
    patient_name: body.patientName,
    guardian_name: body.guardianName,
    phone: body.phone,
    ward_number: body.wardNumber,
    help_needed: body.helpNeeded,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}