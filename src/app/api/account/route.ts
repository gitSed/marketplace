import { NextResponse } from "next/server";

export async function POST() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return NextResponse.json({});
}
