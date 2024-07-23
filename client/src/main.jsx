import React from "react";
import ReactDOM from "react-dom/client";
import myAxios from "axios";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";


import App from "./App";
import Home from "./components/home/home";
import Alltime from "./components/alltime/alltime";
import Goat from "./components/goat/goat";
import News from "./components/news/news";
import Connexion from "./components/connexion/connexion";
import Inscription from "./components/inscription/inscription";
import FranchisesPages from "./pages/franchisesPages";
import FranchisesEditPages from "./pages/franchiseEditPages";
import FranchisesDetailsPages from "./pages/franchisesDetailsPages";
import PlayersPages from "./pages/playersPages";
import PlayersEditPages from "./pages/playersEditPages";
import PlayersDetailsPages from "./pages/playersDetailsPages";


const Api = import.meta.env.VITE_API_URL;

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

      {
        path: "/franchises",
        element: <FranchisesPages />,
        loader: async () => {
          // l'apl Api concerné le localhost 3310 backend
          const response = await myAxios.get(`${Api}/api/franchises`);

          return response.data;
        },
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");

          const response = await myAxios.post(`${Api}/api/franchises`, { name });

          return redirect(`/franchises/${response.data.insertId}`);
        },
      },

      {
        path: "/franchisesPages/:id",
        element: <FranchisesDetailsPages />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`${Api}/api/franchises/${params.id}`);

          return response.data;
        },
      },

      {
        path: "/franchisesEditPages/:id/edit",
        element: <FranchisesEditPages />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`${Api}/api/franchises/${params.id}`);

          return response.data;
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await myAxios.put(`${Api}/api/franchises/${params.id}`, {
                name: formData.get("name"),
              });

              return redirect(`${Api}/franchises/${params.id}`);
            }
            case "delete": {
              await myAxios.delete(`${Api}/api/franchises/${params.id}`);

              return redirect("/franchises");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
      },

      {
        path: "/playersPages",
        element: <PlayersPages />,
        loader: async () => {
          const response = await myAxios.get(`${Api}/api/players`);

          return response.data;
        },
        action: async ({ request }) => {
          const formData = await request.formData();

          const name = formData.get("name");

          const response = await myAxios.post(`${Api}/api/players`, { name });

          return redirect(`/players/${response.data.insertId}`);
        },
      },

      {
        path: "/playersDetailsPages/:id",
        element: <PlayersDetailsPages />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`${Api}/api/players/${params.id}`);

          return response.data;
        },
      },

      {
        path: "/playersEditPages/:id/edit",
        element: <PlayersEditPages />,
        loader: async ({ params }) => {
          const response = await myAxios.get(`${Api}/api/players/${params.id}`);

          return response.data;
        },
        action: async ({ request, params }) => {
          const formData = await request.formData();

          switch (request.method.toLowerCase()) {
            case "put": {
              await myAxios.put(`${Api}/api/players/${params.id}`, {
                name: formData.get("name"),
              });

              return redirect(`/players/${params.id}`);
            }
            case "delete": {
              await myAxios.delete(`${Api}/api/players/${params.id}`);

              return redirect("/players");
            }
            default:
              throw new Response("", { status: 405 });
          }
        },
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
