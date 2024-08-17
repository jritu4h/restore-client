import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/products',
            element:<Products/>
        }
      ]
    },
    {
      path:'login',
      element:<Login/>
    },
    {
      path:'register',
      element:<Register/>
    }
  ]);