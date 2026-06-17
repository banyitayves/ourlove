import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    greeting: "Hello from the Next.js backend!",
    names: ["Yves", "Your Girlfriend"],
    story: [
      "Met over a shared love of travel and good coffee.",
      "Built memories one spontaneous weekend at a time.",
      "Growing together through support, laughter, and adventure.",
    ],
    anniversary: "Anniversary every day",
  });
}
