import { NextResponse } from "next/server";

import UserData from "./user.db.json";

export async function GET(request: Request) {
  return NextResponse.json(UserData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
