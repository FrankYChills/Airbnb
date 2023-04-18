import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  // i html -> id-value mapping
  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  // create a user via prisma client
  const user = await prisma.user.create({
    data: { email, name, hashedPassword },
  });

  return NextResponse.json(user);
}
