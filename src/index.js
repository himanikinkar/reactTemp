import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import {createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router = {appRouter} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App/>);