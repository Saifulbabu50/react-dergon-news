import { createBrowserRouter, Router } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../peges/home/Home";
import Login from "../peges/login/Login";
import Register from "../peges/home/Register/Register";
import News from "../peges/News/News";
import PrivateRoute from "./PrivateRoute";



const router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:"/news/:id",
                element:<PrivateRoute><News></News></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }
        ]
    }
]);
export default router;