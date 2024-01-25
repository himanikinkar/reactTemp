import React from "react";
import Body from "../src/Components/Body";
import Header from "../src/Components/Header"
import About from "./Components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const App = () => {
    
    return (
        <div>
           <Header />
           <Body />
           <About/>
        </div> 
    );
};

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children : [
            {
                path: "/about",
                element: <About/>,
            },
        ],
    },
   
]);

export default App;