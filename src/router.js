import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./screens/home";
import DeleteAccount from "./screens/deleteAccount";
import Privacy from "./screens/privacy";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
        path: "delete-account",
        element:<DeleteAccount/>
    },
    {
        path: "privacy",
        element:<Privacy/>
        
    }


  
]);

export default router;
