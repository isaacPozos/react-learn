import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage";
import { LoginPage } from "../LoginPage";
import { MainApp } from "../MainApp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },{
                path: "/about",
                element: <AboutPage />,
            },{
                path: "/login",
                element: <LoginPage />,
            },
        ]
    },
  ]);