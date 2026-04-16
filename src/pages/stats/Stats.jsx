import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendsProvider";

const Stats = () => {
  const { timeLine } = useContext(FriendsContext);
  const callCount = timeLine.filter((call) => call.type === "Call");
  const textCount = timeLine.filter((text) => text.type === "Text");
  const videoCount = timeLine.filter((video) => video.type === "Video");
  const data = [
    { name: "Calls", value: callCount.length, fill: "red" },
    { name: "Texts", value: textCount.length, fill: "blue" },
    { name: "Videos", value: videoCount.length, fill: "green" },
  ];
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-4xl  font-bold text-[#244D3F] mb-6">
        Friendship Analytics
      </h1>
      <div className="border border-gray-200 shadow-sm rounded-2xl p-6">
        <p className="text-[#244D3F] font-semibold text-lg">
          By Interaction Type{" "}
        </p>
        <div className="p-8">
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "50vh",
              margin: 'auto',
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="10%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend/>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Stats;
