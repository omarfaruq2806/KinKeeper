import React from "react";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto text-center py-20 space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold ">
        Friends to keep close in your lifeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      </h1>
      <p className="text-gray-600">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br className="hidden md:block"/>
        relationships that matter most.
      </p>
      <button className="btn text-white bg-[#244D3F]">+ Add a Friend</button>
    </div>
  );
};

export default Banner;
