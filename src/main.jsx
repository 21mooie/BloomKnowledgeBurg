import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Jobs from "./Pages/Jobs";
import Mentors from "./Pages/Mentors";
import MentorsCreate from "./Pages/MentorsCreate";
import ProtectedRoute from "./utils/ProtectedRoutes";
import GeneralForum from "./Pages/GeneralForum";
import PostCreate from "./Pages/PostCreate";

import Home from "./Pages/Home";

import PostDetail from "./Pages/PostDetail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <GeneralForum />
          </ProtectedRoute>
        ),
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
        path: "/mentors",
        element: (
          <ProtectedRoute>
            <Mentors />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mentors/create",
        element: (
          <ProtectedRoute>
            <MentorsCreate />
          </ProtectedRoute>
        ),
      },
      {
        path:'/home',
        element: <Home/>
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
      {
        path: "/post/create",
        element: <PostCreate />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
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
