import "./Home.css";

function Pricing() {
    return (
        <section className="home-section pricing-section">

            <div className="container">

                <div className="section-label">
                    <span>03</span>
                    PRICING
                </div>


                <div className="pricing-layout">

                    {/* Content */}
                    <div className="pricing-content">

                        <span className="home-eyebrow">
                            SIMPLE & TRANSPARENT
                        </span>

                        <h2>
                            Unbeatable
                            <span> pricing.</span>
                        </h2>

                        <p>
                            We pioneered the concept of discount broking
                            and price transparency in India. Flat fees and
                            no hidden charges.
                        </p>

                        <a href="#" className="aura-text-link">
                            See pricing
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>

                    </div>


                    {/* Pricing Cards */}
                    <div className="pricing-cards">

                        <div className="pricing-card">

                            <span className="pricing-label">
                                EQUITY DELIVERY
                            </span>

                            <div className="pricing-price">
                                <span>₹</span>
                                0
                            </div>

                            <p>
                                Free equity delivery and direct
                                mutual funds
                            </p>

                            <div className="pricing-line"></div>

                            <span className="pricing-note">
                                NO HIDDEN CHARGES
                            </span>

                        </div>


                        <div className="pricing-card pricing-card-highlight">

                            <span className="pricing-label">
                                INTRADAY & F&O
                            </span>

                            <div className="pricing-price">
                                <span>₹</span>
                                20
                            </div>

                            <p>
                                Intraday and F&O
                            </p>

                            <div className="pricing-line"></div>

                            <span className="pricing-note">
                                FLAT FEE
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Pricing;