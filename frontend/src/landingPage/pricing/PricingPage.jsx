import Hero from "./Hero";
import PricingCards from "./PricingCards";
import BrokerageInfo from "./BrokerageInfo";
import "./pricing.css";

function PricingPage() {
    return (
        <>
            <Hero />
            <PricingCards />
            <BrokerageInfo />
        </>
    );
}

export default PricingPage;