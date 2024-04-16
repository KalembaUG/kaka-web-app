import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./screens/home";
import DeleteAccount from "./screens/deleteAccount";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
        path: "delete-account",
        element:<DeleteAccount/>
  }


  
]);

export default router;
