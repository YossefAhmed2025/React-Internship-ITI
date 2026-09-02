
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Pizza from "./components/Pizza/Pizza.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "pizza",
                element: <Pizza />
            },
            
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
