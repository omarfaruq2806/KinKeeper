import React from "react";

const FriendsState = () => {
  return (
    <div className="px-2 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 text-center border-b border-gray-200">
      <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 space-y-2">
        <h2 className="text-xl font-semibold text-[#244D3F]">10</h2>
        <p className="text-gray-600">Total Friends</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[#244D3F]">5</h2>
        <p className="text-gray-600">On Track</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[#244D3F]">3</h2>
        <p className="text-gray-600">Need Attention</p>
      </div>
      <div className="bg-white rounded-lg border border-gray-100 shadow-md p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[#244D3F]">2</h2>
        <p className="text-gray-600">Interactions this Month</p>
      </div>
    </div>
  );
};

export default FriendsState;
