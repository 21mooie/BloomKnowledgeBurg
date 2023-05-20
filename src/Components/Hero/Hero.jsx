import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div
      className=""
      style={{
        height: "100%",
        position:"relative",
      }}
    >
      <div
        className="bg-dark "
        style={{
          height: "100%",
        }}
      >
        <img
          src="/img/hero.png"
          alt=""
          className=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <div className="px-5 py-2 text-center w-100" style={{
        position:"absolute",
        bottom:"0",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        opacity:".5"
        
      }}>
        <span >
          Welcome To AfterBoot, A supportive And Collabratove Community
          Dedicated To Empowering Those Who Entered Into The World Of Tect.
        </span>
        <span>
          Through Non-Traditional Pathway. <Link>Learn More</Link>
        </span>
      </div>
    </div>
  );
}

export default Hero;
