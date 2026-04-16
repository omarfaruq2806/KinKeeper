import React, { useContext } from "react";
import FriendsProvider, { FriendsContext } from "../../context/FriendsProvider";
import { Link } from "react-router";
import FriendCard from "../AllFriend/FriendCard";
import { SyncLoader } from "react-spinners";

const AllFriend = () => {
  const { friends, loading } = useContext(FriendsContext);
  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-[#244D3F] py-6">Your Friends</h1>
      {loading ? (
        <div className="flex justify-center my-12">
          <SyncLoader color="green" size={28} speedMultiplier={0} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {friends.map((friend) => {
            return <FriendCard friend={friend} />;
          })}
        </div>
      )}
    </div>
  );
};

export default AllFriend;
