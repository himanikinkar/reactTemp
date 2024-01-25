import React from "react";
import Body from "../src/Components/Body";
import Header from "../src/Components/Header"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const App = () => {
    
    return (
        <div>
           <Header />
           <Body />
        </div> 
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <App />
    },
    // {
    //     path: "/about",
    //     element: <About />
    // },
]);



export default App;