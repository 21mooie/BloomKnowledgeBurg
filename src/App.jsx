import React from "react";
import { Outlet } from "react-router-dom";
import Navbvar from "./Components/Navbvar";

const App = () => {
  return (
    <div>
      <Navbvar />
      <Outlet />
    </div>
  );
};

export default App;
