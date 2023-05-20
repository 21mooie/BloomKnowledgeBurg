import React from "react";
import Hero from "../Components/Hero/Hero";
import GeneralForum from "./GeneralForum1";
import Trending from "../Components/Widgets/Trending";
import TrendTags from "../Components/Widgets/TrendTags";
function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div
        className=""
        style={{
          height: "50vh",
        }}
      >
        <Hero />
      </div>
      {/* feed */}
      <div className="feed row ">
        <div className="col-8  px-3">
          <GeneralForum />
        </div>
        <div
          className="col-4 p-3 d-flex flex-column gap-4  "
          style={{
            marginTop: "2rem",
          }}
        >
          <Trending />
          <TrendTags />
        </div>
      </div>
    </div>
  );
}

export default Home;
