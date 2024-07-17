import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/home/home";
import Alltime from "./components/alltime/alltime";
import Goat from "./components/goat/goat";
import News from "./components/news/news";
import Connexion from "./components/connexion/connexion";
import Inscription from "./components/inscription/inscription";


const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltime",
        element: <Alltime />,
      },
      {
        path: "/goat",
        element: <Goat />,
      },
      {
        path: "/news",
        element: <News />,
      },
      
      {
        path: "/connexion",
        element: <Connexion />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
     
   
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
