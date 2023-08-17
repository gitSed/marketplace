import { NextResponse } from "next/server";

import HeroData from "./hero.db.json";

export async function GET(request: Request) {
  return NextResponse.json(HeroData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
