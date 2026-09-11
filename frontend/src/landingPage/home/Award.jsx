import "./Home.css";

function Award() {
    return (
        <section className="home-section capabilities-section">

            <div className="container">

                <div className="section-label">
                    <span>01</span>
                    PLATFORM CAPABILITIES
                </div>


                <div className="capabilities-grid">

                    {/* Image */}
                    <div className="capabilities-image">

                        <div className="image-glow"></div>

                        <img
                            src="/images/largestBroker.svg"
                            alt="Aura platform"
                        />

                    </div>


                    {/* Content */}
                    <div className="capabilities-content">

                        <span className="home-eyebrow">
                            EVERYTHING YOU NEED
                        </span>

                        <h2>
                            One platform.
                            <span> Everything connected.</span>
                        </h2>

                        <p>
                            Aura brings the essential tools for modern
                            investors together in one simple platform.
                            Explore markets, track opportunities, and
                            manage your investments with clarity.
                        </p>


                        <div className="feature-grid">

                            <div className="feature-item">
                                <span>01</span>
                                <strong>Stocks & ETFs</strong>
                            </div>

                            <div className="feature-item">
                                <span>02</span>
                                <strong>Mutual funds</strong>
                            </div>

                            <div className="feature-item">
                                <span>03</span>
                                <strong>Futures & Options</strong>
                            </div>

                            <div className="feature-item">
                                <span>04</span>
                                <strong>Bonds & IPOs</strong>
                            </div>

                            <div className="feature-item">
                                <span>05</span>
                                <strong>Market insights</strong>
                            </div>

                            <div className="feature-item">
                                <span>06</span>
                                <strong>Portfolio tracking</strong>
                            </div>

                        </div>


                        <div className="press-section">

                            <p>
                                Trusted by investors and featured across
                                leading financial platforms.
                            </p>

                            <img
                                src="/images/pressLogos.png"
                                alt="Financial media"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Award;