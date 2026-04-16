import React, { useContext } from "react";
import FriendsProvider, { FriendsContext } from "../../context/FriendsProvider";

const AllFriend = () => {
  const { friends, loading } = useContext(FriendsContext);
  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-[#244D3F]">Your Friends</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {friends.map((friend) => {
            return <div key={friend.id}>
                <img src={friend.picture} alt={friend.picture} />
                <h2>{friend.name}</h2>
                <p>{friend.days_since_contact}d Ago</p>
                <div>
                    <p>{friend.status}</p>
                </div>
            </div>;
          })}
        </div>
      )}
    </div>
  );
};

export default AllFriend;
