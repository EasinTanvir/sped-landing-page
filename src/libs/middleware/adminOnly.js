import { NextResponse } from "next/server";
import { prismaCli } from "../../../prismaCli/prismaClient";

export async function adminOnlyMiddleware() {
  const user = await prismaCli.user.findUnique({
    where: { email: token.email },
  });

  if (!user || user.role !== "ADMIN") {
    return NextResponse.json(
      { message: "Forbidden: Admins Only" },
      { status: 403 }
    );
  }

  return null;
}
