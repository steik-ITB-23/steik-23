import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs";
import { getDBToken } from "@/lib/utils/jwt";

export async function GET() {
  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser();

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.json({ user: user, db_access_token: getDBToken(user.id) }, { status: 200 });
}
