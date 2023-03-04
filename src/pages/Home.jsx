import React from "react";
import Chart from "../components/Chart";
import FeaturedChat from "../components/FeaturedChat";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Widget from "../widgets/Widget";

const Home = (props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" flex-1">
        <Navbar />
        <div className="flex gap-5 mx-10 my-10">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
        </div>
        {/* charts */}
        <div className="flex gap-5 mx-10 my-10">
          <FeaturedChat />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
