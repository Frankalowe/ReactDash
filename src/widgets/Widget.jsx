import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { PaidOutlined, ShoppingCartOutlined } from "@mui/icons-material";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: "false",
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="text-purple-400" />,
      };
      break;
    case "order":
      data = {
        title: "Orders",
        isMoney: "false",
        link: "View all orders",
        icon: <ShoppingCartOutlined className="text-red-400 " />,
      };
      break;

    case "earnings":
      data = {
        title: "Orders",
        isMoney: "true",
        link: "View all orders",
        icon: <PaidOutlined className="text-green-400 " />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex gap-5 p-5 shadow-sm shadow-blue-400 flex-1 h-[100px] rounded-lg justify-between">
      {/* left */}
      <div className="flex flex-col justify-center flex-1 ">
        <span className="font-bold text-sm text-gray-400">{data.title}</span>
        <span className="text-[28px] ">{data.isMoney && "$"}</span>
        <span className="text-[12px] border-b-2 border-gray-100">
          {data.link}
        </span>
      </div>

      {/* right */}
      <div className="flex flex-col flex-1 items-end gap-5">
        <div>
          <KeyboardArrowUpIcon />
          <span className="text-green-500">20%</span>
        </div>
        <div>{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
