import React from "react";
import Banner from "../../components/banner/Banner";
import FriendsState from "../../components/friendsSate/FriendsState";
import AllFriend from "../../components/friends/AllFriend";
const HomePage = () => {
  return (
    <>
      <Banner />
      <FriendsState />
      <AllFriend/>
    </>
  );
};

export default HomePage;
