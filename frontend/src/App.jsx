import ScrollToTop from "./ScrollToTop";
import NavBar from "./landingPage/NavBar";
import Footer from "./landingPage/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <ScrollToTop />

            <NavBar />

            <Outlet />

            <Footer />
        </>
    );
}

export default App;