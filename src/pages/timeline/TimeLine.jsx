import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsProvider";
import { SyncLoader } from "react-spinners";
import { FaArrowDown } from "react-icons/fa";

const TimeLine = () => {
  const { timeLine, loading } = useContext(FriendsContext);
  console.log(timeLine);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-[#244D3F] my-6 mx-2 ">Timeline</h1>
      {timeLine.length === 0 ? (
        <div className="flex justify-center my-12">
          <p className="text-gray-500">No timeline entries yet.</p>
        </div>
      ) : (
        <div className="grid gap-4 mb-7 px-2 md:px-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1 w-50 flex justify-between">
              <p>Filter TimeLine</p><FaArrowDown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Filter by Call</a>
              </li>
              <li>
                <a>Filter by Text</a>
              </li>
              <li>
                <a>Filter by Video</a>
              </li>
              <li>
                <a>All</a>
              </li>
            </ul>
          </div>
          {timeLine.map((entry, ind) => {
            return loading ? (
              <div className="flex justify-center my-12">
                <SyncLoader color="green" size={28} speedMultiplier={0} />
              </div>
            ) : (
              <div
                key={ind}
                className="flex items-center gap-4 p-5 mx-2 border border-gray-200 rounded-lg shadow-sm "
              >
                <div>
                  <img src={entry.icon} alt={entry.title} />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">{entry.title}</h1>
                  <p className="text-gray-600">{entry.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeLine;
