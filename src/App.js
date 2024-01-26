import React from "react";
import Body from "../src/Components/Body";
import Header from "../src/Components/Header"
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"

const App = () => {
    
    return (
        <div>
           <Header />
           <Outlet />
           <Footer/>
        </div> 
    );
};

export default App;