import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { routes } from "./config/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
