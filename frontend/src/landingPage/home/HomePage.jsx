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
            <NavBar/>
            <Hero/>
            <Award/>
            <Stats/>
            <PricingPage/>
            <Education/>
            <OpenAccount/>
            <Footer/>
            
        </>
    );
}

export default HomePage;