import React, { useContext } from "react";
import { useParams } from "react-router";
import { FriendsContext } from "../../context/FriendsProvider";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { friends, loading, addToTimeline } = useContext(FriendsContext);

  const expectedFriend = friends.find((friend) => friend.id == id);

  const handleCheckIn = (type, img) => {
    addToTimeline(type, expectedFriend.name, img);
    toast.success(`Checked in with ${expectedFriend.name} via ${type}!`);
  };
  return loading ? (
    <div className="flex justify-center my-12">
      <SyncLoader color="green" size={28} speedMultiplier={0} />
    </div>
  ) : (
    <div className=" px-2  max-w-5xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 md:gap-6">
      {/* left column */}
      <div className="col-span-1   text-center space-y-4 mb-6 md:mb-0">
        <div className=" border border-gray-200 rounded-lg p-4 space-y-2">
          <img
            src={expectedFriend.picture}
            alt={expectedFriend.name}
            className="rounded-full  mx-auto"
          />
          <h1>{expectedFriend.name}</h1>
          <p>
            <small
              className={`text-xs px-2 py-1 rounded-full text-white  ${expectedFriend.status == "on-track" ? "bg-green-900" : expectedFriend.status == "almost due" ? "bg-yellow-500" : "bg-red-600"}`}
            >
              {expectedFriend.status}
            </small>
          </p>
          <div className="space-x-2">
            {expectedFriend.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-green-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-500 textarea-md">"{expectedFriend.bio}"</p>
          <p className="text-sm text-gray-500">{expectedFriend.email}</p>
        </div>
        <div className=" border border-gray-200 rounded-lg p-4 space-y-3 flex flex-col ">
          <button className="btn">Snooze 2 weeks</button>
          <button className="btn">Archive</button>
          <button className="btn">Delete</button>
        </div>
      </div>
      {/* right column */}
      <div className="col-span-2 rounded-lg  space-y-6">
        {/* 1st  div */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#244D3F]">
          <div className="border border-gray-200 text-center p-4 rounded-lg">
            <h2 className="text-2xl font-bold  ">
              {expectedFriend.days_since_contact}
            </h2>
            <p className="text-sm font-medium">Days Since Contact</p>
          </div>
          <div className="border border-gray-200 text-center p-4 rounded-lg">
            <h2 className="text-2xl font-bold  ">{expectedFriend.goal}</h2>
            <p className="text-sm font-medium">Goal (Days)</p>
          </div>
          <div className="border border-gray-200 text-center p-4 rounded-lg">
            <h2 className="text-2xl font-bold  ">
              {expectedFriend.next_due_date}
            </h2>
            <p className="text-sm font-medium text-gray-600">Next Due</p>
          </div>
        </div>
        {/* 2nd div */}
        <div className="flex justify-between border items-center border-gray-200 rounded-lg p-4">
          <div>
            <h1 className="text-xl font-bold pb-2">Relationship Goal</h1>
            <p>
              Connect every <span>30 days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>
        {/* 3rd div */}
        <div className="border border-gray-200 rounded-lg p-4">
          <h1 className="text-xl font-bold pb-2">Quick Check-In</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <button
              className="btn p-10 flex flex-col gap-2"
              onClick={() => handleCheckIn("Call", callIcon)}
            >
              <img src={callIcon} alt="Call" className="w-6 h-6 mx-auto" />
              Call
            </button>
            <button
              className="btn p-10 flex flex-col gap-2"
              onClickCapture={() => handleCheckIn("Text", textIcon)}
            >
              <img src={textIcon} alt="Text" className="w-6 h-6 mx-auto" />
              Text
            </button>
            <button
              className="btn p-10 flex flex-col gap-2"
              onClick={() => handleCheckIn("Video", videoIcon)}
            >
              <img src={videoIcon} alt="Video" className="w-6 h-6 mx-auto" />
              Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
