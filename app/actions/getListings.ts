import prisma from "../libs/prismadb";

export interface IListingsParams {
  userId?: string;
}

export default async function getListings({ userId }: IListingsParams) {
  try {
    let query: any = {};

    if (userId) {
      query.userId = userId;
    }

    const listings = await prisma.listing.findMany({
      // if no userId it will query all listing else if query it will query accordingly
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });
    // for fixing type transfer from server to client
    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }));
    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
