
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Pets from "./components/pets/pets";
import NotFound from "./components/NotFound/NotFound";

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
                path: "about",
                element: <About />
            },
            {
                path: "pets",
                element: <Pets />,
                children: [
                    {
                        path: "details",
                        element: <h2>Pet Details </h2>
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}

