import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendsContext } from "../../context/FriendsProvider";

const Stats = () => {
  const { timeLine } = useContext(FriendsContext);
  const callCount = timeLine.filter((call) => call.type === "Call");
  const textCount = timeLine.filter((text) => text.type === "Text");
  const videoCount = timeLine.filter((video) => video.type === "Video");
  const call = callCount.length;
  const text = textCount.length;
  const video = videoCount.length;
const totalCount = call + text + video;

  const data = [
    { name: "Calls", value: call, fill: "red" },
    { name: "Texts", value: text, fill: "blue" },
    { name: "Videos", value: video, fill: "green" },
  ];
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="mx-2 text-2xl md:text-4xl  font-bold text-[#244D3F] mb-6">
        Friendship Analytics
      </h1>
      {totalCount === 0 ? (
        <div className="flex justify-center my-12">
          <p className="text-gray-500">No interactions yet. Start connecting!</p>
        </div>
      ) : (
        <div className="mx-2  border border-gray-200 shadow-sm rounded-2xl p-5">
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
      )}
    </div>
  );
};

export default Stats;
