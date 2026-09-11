import "./Home.css";

function Stats() {
    return (
        <section className="home-section trust-section">

            <div className="container">

                <div className="section-label">
                    <span>02</span>
                    WHY AURA
                </div>


                <div className="trust-grid">

                    {/* Left */}
                    <div className="trust-content">

                        <span className="home-eyebrow">
                            TRUST WITH CONFIDENCE
                        </span>

                        <h2>
                            Built around
                            <span> you.</span>
                        </h2>


                        <div className="trust-items">

                            <div className="trust-item">

                                <span className="trust-number">
                                    01
                                </span>

                                <div>
                                    <h3>Built around you</h3>

                                    <p>
                                        A clean investing experience designed
                                        to help you discover opportunities,
                                        track your portfolio, and make
                                        decisions without unnecessary
                                        complexity.
                                    </p>
                                </div>

                            </div>


                            <div className="trust-item">

                                <span className="trust-number">
                                    02
                                </span>

                                <div>
                                    <h3>Simple, transparent experience</h3>

                                    <p>
                                        No confusing interfaces or distracting
                                        features. Everything you need to
                                        follow the markets and manage your
                                        investments stays right where you
                                        need it.
                                    </p>
                                </div>

                            </div>


                            <div className="trust-item">

                                <span className="trust-number">
                                    03
                                </span>

                                <div>
                                    <h3>Your complete market workspace</h3>

                                    <p>
                                        Explore stocks, monitor your watchlist,
                                        review market movements, and keep
                                        track of your investments from one
                                        connected platform.
                                    </p>
                                </div>

                            </div>


                            <div className="trust-item">

                                <span className="trust-number">
                                    04
                                </span>

                                <div>
                                    <h3>Invest with clarity</h3>

                                    <p>
                                        Powerful tools and meaningful insights
                                        help you understand your investments
                                        better and stay in control of your
                                        financial journey.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Right */}
                    <div className="ecosystem-content">

                        <div className="ecosystem-card">

                            <div className="ecosystem-glow"></div>

                            <img
                                src="/images/ecosystem.png"
                                alt="Aura ecosystem"
                            />

                        </div>


                        <div className="ecosystem-links">

                            <a href="#">
                                Explore Our Products
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>

                            <a href="#">
                                Try Aura Demo
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Stats;