import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import TimeLine from "../pages/timeline/TimeLine";
import Stats from "../pages/stats/Stats";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component : MainLayout,
        children: [
            {
                index: true,
                element : <HomePage/>
            },
            {
                path: "/timeline",
                element: <TimeLine/>
            },
            {
                path:'/stats',
                element: <Stats/>
            }
        ]
    }
])