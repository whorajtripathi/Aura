import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
    return (
        <>
            <Hero />

            <LeftSection
                imageURL="images/kite.png"
                productName="Aura Trade"
                productTag="TRADING PLATFORM"
                productDescription="A fast and intuitive workspace for tracking markets, analyzing price movements, and managing your trades from one place."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <RightSection
                imageURL="images/console.png"
                productName="Aura Portfolio"
                productTag="PORTFOLIO MANAGEMENT"
                productDescription="Keep your investments organized with a clear view of your holdings, performance, allocation, and overall portfolio health."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <LeftSection
                imageURL="images/coin.png"
                productName="Aura Funds"
                productTag="MUTUAL FUNDS"
                productDescription="Discover and track mutual fund investments with a simple experience designed to help you understand where your money is invested."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <RightSection
                imageURL="images/kiteconnect.png"
                productName="Aura Connect"
                productTag="DEVELOPER API"
                productDescription="Build your own financial applications using secure APIs that connect your products with market and portfolio data."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <LeftSection
                imageURL="images/varsity.png"
                productName="Aura Learn"
                productTag="EDUCATION"
                productDescription="Learn investing through practical guides, market concepts, and easy-to-follow lessons designed for beginners and curious investors."
                tryDemo="#"
                learnMore="#"
                googlePlay="#"
                appStore="#"
            />

            <Universe />
        </>
    );
}

export default ProductsPage;