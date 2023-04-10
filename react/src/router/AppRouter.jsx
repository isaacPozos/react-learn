import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { MarvelPage, DCPage } from "../heroes/pages";
import { ErrorPage } from "../ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
    errorElement: <ErrorPage />,
  },{
    path: "marvel/",
    element: <MarvelPage />
  },{
    path: "dc/",
    element: <DCPage />
  }
]);