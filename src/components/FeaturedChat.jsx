import React from "react";
import { MoreVertOutlined } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeaturedChat = () => {
  return (
    <div
      className="flex flex-col gap-5 p-5 shadow-sm shadow-red-400 basis-[30%]
    rounded-lg "
    >
      <div className="flex justify-between grow border-b-2">
        <h1 className="font-bold text-xl">Total Revenue</h1>
        <MoreVertOutlined />
      </div>
      <div className="gap-y-1">
        <div>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-gray-400 text-xl items-center mt-4 ">
            Total sales today
          </p>
          <p className="font-bold text-2xl">$430</p>
          <p className="text-sm items-center">
            Previous transactions processing last payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChat;
