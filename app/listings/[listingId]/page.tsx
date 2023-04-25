import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservation from "@/app/actions/getReservations";

interface ListingPageProps {
  params: { listingId: string };
}

const ListingPage = async ({ params: { listingId } }: ListingPageProps) => {
  // console.log("here babe");

  const listing = await getListingById(listingId);
  const currentUser = await getCurrentUser();
  const reservations = await getReservation({ listingId });

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  );
};

export default ListingPage;
