import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Category from "../views/Category";
import Item from "../views/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/category/:categoria",
    element: <Category />,
  },

  {
    path: "/item/:id",
    element: <Item />,
  },
]);

export default router;
