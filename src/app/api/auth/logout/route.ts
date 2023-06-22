import pocket from "lib/PocketBaseSingleton";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  pocket.authStore.clear();
  return NextResponse.redirect(new URL("/", request.url));
}
