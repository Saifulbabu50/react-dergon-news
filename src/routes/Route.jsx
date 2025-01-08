import { createBrowserRouter, Router } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../peges/home/Home";

const router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
]);
export default router;