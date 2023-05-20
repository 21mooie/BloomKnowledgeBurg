import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbvar from "./Components/Navbvar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbvar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
