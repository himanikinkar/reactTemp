import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./Components/About"
import {appRouter} from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router = {appRouter} />);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<App/>);