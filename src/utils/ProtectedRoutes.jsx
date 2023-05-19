import Cookies from "js-cookie";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  
  if (!Cookies.get("token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;