import React from "react";
import { Outlet } from "react-router-dom";
import Navbvar from "./Components/Navbvar";
import GeneralForum from "./Pages/GeneralForum";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <Navbvar />

      <Outlet />
    </div>
  );
};

export default App;
