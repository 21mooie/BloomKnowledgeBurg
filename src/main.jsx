import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Jobs from "./Pages/Jobs";
import ProtectedRoute from "./utils/ProtectedRoutes";
import GeneralForum from "./Pages/GeneralForum";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <GeneralForum />,
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forum/general",
        element: <GeneralForum />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
