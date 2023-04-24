import React from "react";
import getFavouriteListing from "../actions/getFavouriteListing";
import getCurrentUser from "../actions/getCurrentUser";
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const listings = await getFavouriteListing();
  const currentUser = await getCurrentUser();

  if (listings.length == 0) {
    return (
      <EmptyState
        title="No favourites found"
        subtitle="Looks like you haven't favourited any listing yet!"
      />
    );
  }

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default FavouritesPage;
