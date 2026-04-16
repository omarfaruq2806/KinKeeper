import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`}
                key={friend.id}
                className="border border-gray-100 rounded-lg py-6 flex  flex-col items-center gap-1 shadow-md"
              >
                <div>
                  <img
                    src={friend.picture}
                    alt={friend.picture}
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <h2 className="text-lg font-bold">{friend.name}</h2>
                <p>
                  <small className="text-gray-500">
                    {friend.days_since_contact}d Ago
                  </small>
                </p>
                <div className="flex  gap-1">
                  {friend.tags.map((tag, ind) => (
                    <span
                      key={ind}
                      className="text-xs bg-green-200 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full text-white  ${friend.status == "on-track" ? "bg-green-900" : friend.status == "almost due" ? "bg-yellow-500" : "bg-red-600"}`}
                  >
                    {friend.status}
                  </span>
                </div>
              </Link>
    );
};

export default FriendCard;