import "./pricing.css";

function PricingCards() {
    return (
        <section className="pricing-cards-section">

            <div className="container">

                <div className="pricing-section-label">
                    <span>01</span>
                    CORE PRICING
                </div>

                <div className="pricing-cards-header">
                    <div>
                        <span className="pricing-eyebrow">
                            WHAT YOU PAY
                        </span>

                        <h2>
                            Straightforward
                            <span> pricing.</span>
                        </h2>
                    </div>

                    <p>
                        Choose the products you need and understand the
                        applicable brokerage before you get started.
                    </p>
                </div>


                <div className="row g-4 pricing-grid">

                    {/* Equity */}
                    <div className="col-lg-4">

                        <div className="aura-pricing-card">

                            <div className="pricing-card-top">
                                <div className="pricing-icon">
                                    <img
                                        src="/images/pricingEquity.svg"
                                        alt="Equity investing"
                                    />
                                </div>

                                <span className="pricing-card-number">
                                    01
                                </span>
                            </div>

                            <span className="pricing-card-label">
                                EQUITY
                            </span>

                            <h3>
                                Equity investing
                            </h3>

                            <div className="pricing-amount">
                                <span>₹</span>0
                            </div>

                            <p>
                                No brokerage on eligible equity delivery
                                investments. Build your long-term portfolio
                                without paying a brokerage fee.
                            </p>

                            <div className="pricing-card-divider"></div>

                            <span className="pricing-card-note">
                                EQUITY DELIVERY
                            </span>

                        </div>

                    </div>


                    {/* Active Trading */}
                    <div className="col-lg-4">

                        <div className="aura-pricing-card pricing-card-featured">

                            <div className="pricing-card-top">
                                <div className="pricing-icon">
                                    <img
                                        src="/images/intradayTrades.svg"
                                        alt="Active trading"
                                    />
                                </div>

                                <span className="pricing-card-number">
                                    02
                                </span>
                            </div>

                            <span className="pricing-card-label">
                                TRADING
                            </span>

                            <h3>
                                Active trading
                            </h3>

                            <div className="pricing-amount">
                                <span>₹</span>20
                            </div>

                            <p>
                                Competitive pricing for intraday and
                                derivatives, with charges calculated
                                transparently on every executed order.
                            </p>

                            <div className="pricing-card-divider"></div>

                            <span className="pricing-card-note">
                                INTRADAY & DERIVATIVES
                            </span>

                        </div>

                    </div>


                    {/* Mutual Funds */}
                    <div className="col-lg-4">

                        <div className="aura-pricing-card">

                            <div className="pricing-card-top">
                                <div className="pricing-icon">
                                    <img
                                        src="/images/pricingEquity.svg"
                                        alt="Mutual funds"
                                    />
                                </div>

                                <span className="pricing-card-number">
                                    03
                                </span>
                            </div>

                            <span className="pricing-card-label">
                                INVESTING
                            </span>

                            <h3>
                                Mutual funds
                            </h3>

                            <div className="pricing-amount">
                                <span>₹</span>0
                            </div>

                            <p>
                                Invest in eligible direct mutual funds
                                without additional distribution
                                commissions.
                            </p>

                            <div className="pricing-card-divider"></div>

                            <span className="pricing-card-note">
                                DIRECT MUTUAL FUNDS
                            </span>

                        </div>

                    </div>

                </div>


                <div className="pricing-disclaimer">
                    <i className="fa-solid fa-circle-info"></i>

                    <span>
                        Applicable taxes, exchange fees, and regulatory
                        charges may vary depending on the transaction.
                    </span>
                </div>

            </div>

        </section>
    );
}

export default PricingCards;