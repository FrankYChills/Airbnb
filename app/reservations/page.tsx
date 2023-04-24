import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

const RservationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }
  //   get the reservation of listing which is posted/belongs to current user
  const reservations = await getReservation({ authorId: currentUser.id });
  if (reservations.length == 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you do not have any reservations on your property"
      />
    );
  }
  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default RservationsPage;
