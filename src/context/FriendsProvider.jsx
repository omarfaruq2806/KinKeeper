import React, { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [loading, setLoading] = useState("true");
  const [friends, setFriends] = useState([]);
  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    fetch("/friendsData.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  const addToTimeline = (type, name, icon) => {
    const newEntry = {
      icon,
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString(),
    };
    setTimeLine([newEntry, ...timeLine]);
  };

  const data = {
    loading,
    setLoading,
    friends,
    setFriends,
    timeLine,
    setTimeLine,
    addToTimeline,
  };

  return (
    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  );
};

export default FriendsProvider;
