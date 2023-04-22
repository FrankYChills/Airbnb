import { NextResponse } from "next/server";

interface FavouriteProps {
  params: { listingId?: string };
}

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request,
  { params: { listingId } }: FavouriteProps
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favouriteIds = [...(currentUser.favouriteIds || [])];
  favouriteIds.push(listingId);

  //   update user
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favouriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params: { listingId } }: FavouriteProps
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }
  let favouriteIds = [...(currentUser.favouriteIds || [])];
  favouriteIds = favouriteIds.filter((id) => id !== listingId);

  //   update user
  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favouriteIds,
    },
  });
  return NextResponse.json(user);
}
