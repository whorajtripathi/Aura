import "./pricing.css";

function Hero() {
    return (
        <section className="pricing-hero">
            <div className="pricing-hero-glow pricing-hero-glow-one"></div>
            <div className="pricing-hero-glow pricing-hero-glow-two"></div>

            <div className="container">
                <div className="pricing-hero-content">

                    <span className="pricing-eyebrow">
                        PRICING
                    </span>

                    <h1>
                        Simple pricing.
                        <span> Nothing hidden.</span>
                    </h1>

                    <p>
                        Understand your costs before you invest.
                        Aura keeps pricing straightforward, transparent,
                        and easy to understand.
                    </p>

                    <div className="pricing-hero-points">
                        <div>
                            <i className="fa-solid fa-check"></i>
                            Clear pricing
                        </div>

                        <div>
                            <i className="fa-solid fa-check"></i>
                            No complicated plans
                        </div>

                        <div>
                            <i className="fa-solid fa-check"></i>
                            Transparent charges
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;