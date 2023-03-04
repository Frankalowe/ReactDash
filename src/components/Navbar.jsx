import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-4 items-center h-[50px] border-b-2 ">
        {/* search bar */}
        <div className="border-2 rounded-lg px-10 py-1">
          <input
            className="focus:outline-none"
            type="text"
            placeholder="search..."
          />
          <SearchIcon />
        </div>
        {/* search bar ends */}
        <div className="flex justify-center items-center gap-4">
          <div>
            <LanguageIcon />
            English
          </div>
          <div>
            <DarkModeOutlinedIcon />
          </div>

          <div>
            <FullscreenExitOutlinedIcon />
          </div>
          <div className="flex relative">
            <NotificationsNoneOutlinedIcon />
            <div className=" absolute left-3 bottom-1 bg-red-500 rounded-full flex justify-center text-white w-5 h-5 items-center text-sm">
              1
            </div>
          </div>
          <div className="flex relative">
            <ChatBubbleOutlineOutlinedIcon />
            <div className="absolute left-3 bottom-1 bg-red-500 rounded-full flex justify-center text-white w-5 h-5 items-center text-sm">
              2
            </div>
          </div>
          <div>
            <ListOutlinedIcon />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
