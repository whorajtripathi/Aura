import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./landingPage/home/HomePage";
import AboutPage from "./landingPage/about/AboutPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import ProductsPage from "./landingPage/products/ProductsPage";
import SignUp from "./landingPage/signUp/SignUp";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from "./landingPage/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "signup",
                element: <SignUp/>,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "products",
                element: <ProductsPage/>,
            },
            {
                path: "pricing",
                element: <PricingPage />,
            },
            {
                path: "support",
                element: <SupportPage/>,
            },
            {
                path:"*",
                element:<NotFound/>,
            }
        ],
    },
]);

export default router;