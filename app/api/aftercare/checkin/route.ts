/**
 * /api/aftercare/checkin — daily aftercare check-in receiver.
 *
 * Production: write to Supabase `patient_recovery_checkins` table with RLS
 * enforcing token-based access. Trigger Slack/Email to clinician if value <= 2
 * (red-flag threshold).
 *
 * This stub validates and logs only — runs without a backend.
 */

import { NextResponse } from "next/server";

export const runtime = "edge";

interface Body {
  token: string;
  value: number;
  note?: string;
}

export async function POST(request: Request) {
  console.log("[aftercare/checkin] start");
  try {
    const body: Body = await request.json();
    if (!body.token || typeof body.token !== "string") {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }
    if (typeof body.value !== "number" || body.value < 1 || body.value > 5) {
      return NextResponse.json({ error: "Invalid value" }, { status: 400 });
    }

    // TODO: write to Supabase + alert clinician if value <= 2
    console.log("[aftercare/checkin] received", { token: body.token, value: body.value });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[aftercare/checkin] error", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
