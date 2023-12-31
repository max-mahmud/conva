import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import Templetes from "./components/Templetes";
import Projects from "./components/Projects";
import CreateDesign from "./components/CreateDesign";
import Main from "./pages/Main";
import { token_decode } from "./utils/index";

const userInfo = token_decode(localStorage.getItem("canva_token"));

const router = createBrowserRouter([
  {
    path: "/",
    element: userInfo ? <Layout /> : <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/templates",
        element: <Templetes />,
      },
    ],
  },
  {
    path: "/design/create",
    element: <CreateDesign />,
  },
  {
    path: "/design",
    element: <Main />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
