import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface ListingPageProps {
  params: { listingId: string };
}

const ListingPage = async ({ params: { listingId } }: ListingPageProps) => {
  const listing = await getListingById(listingId);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} currentUser={currentUser} />;
};

export default ListingPage;
