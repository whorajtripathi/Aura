import AboutPage from "../about/AboutPage";
import Footer from "../Footer";
import NavBar from "../NavBar";
import OpenAccount from "../OpenAccount";
import PricingPage from "../pricing/PricingPage";
import Award from "./Award";
import Education from "./Education";
import Hero from "./Hero";
import Stats from "./Stats";


function HomePage(){
    return(
        <>
            <Hero/>
            <Award/>
            <Stats/>
            <PricingPage/>
            <Education/>
            <OpenAccount/>
        </>
    );
}

export default HomePage;