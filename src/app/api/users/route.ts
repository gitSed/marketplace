import { NextResponse } from "next/server";

import UserData from "./user.db.json";

export async function GET() {
  return NextResponse.json(UserData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
