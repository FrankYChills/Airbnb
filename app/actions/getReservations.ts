import prisma from "../libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservation({
  listingId,
  userId,
  authorId,
}: IParams) {
  const query: any = {};
  try {
    // get reservations by listingId
    if (listingId) {
      query.listingId = listingId;
    }
    //   get reservations of current user
    if (userId) {
      query.userId = userId;
    }
    //   get reservation of current user's listed homes
    // back track prisma schema
    if (authorId) {
      query.listing = { userId: authorId };
    }

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    //   for fixing server to client datatype warnings
    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.listing,
        createdAt: reservation.listing.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
