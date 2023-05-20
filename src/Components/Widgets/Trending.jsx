import React from "react";

function Trending() {
  return (
    <div className="">
      <div
        class="card px-2 py-2"
        style={{ width: "100%", borderRadius: "30px",  }}
      >
        <h4 className="text-center">Upcoming Events</h4>
        <img class="card-img-top" src="/img/hero.png" alt="Card image cap" style={{
          borderRadius:"30px"
        }}/>
        <div class="card-body " style={{
          display:"flex",
          flexDirection:'column',
          alignItems:'center'
        }}>
          <span>Tech Event - NYC</span>
          <span>6:00pm -8:00pm </span>
          <button className="btn btn-success">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
