import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";
import { productLoader } from "./utilities/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
        loader: () => fetch("products.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
