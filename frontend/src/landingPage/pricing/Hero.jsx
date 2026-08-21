function Brokerage() {
    return (
        <div className="container my-5 py-5">

            {/* Header */}
            <div className="text-center mb-5">

                <p className="text-uppercase text-primary fw-semibold small mb-2">
                    Simple pricing
                </p>

                <h1 className="display-5 fw-semibold mb-3">
                    Know what you pay
                </h1>

                <p className="text-muted fs-5">
                    Clear pricing with no complicated plans or unexpected
                    surprises.
                </p>

            </div>


            {/* Pricing Cards */}
            <div className="row g-4">

                {/* Equity */}
                <div className="col-lg-4">
                    <div className="pricing-card h-100 text-center p-4">

                        <div className="pricing-icon mb-4">
                            <img
                                src="images/pricingEquity.svg"
                                alt="Equity investing"
                            />
                        </div>

                        <h4 className="fw-semibold mb-3">
                            Equity investing
                        </h4>

                        <div className="display-6 fw-semibold mb-3">
                            ₹0
                        </div>

                        <p className="text-muted lh-lg">
                            No brokerage on eligible equity delivery
                            investments. Build your long-term portfolio
                            without paying a brokerage fee.
                        </p>

                    </div>
                </div>


                {/* Trading */}
                <div className="col-lg-4">
                    <div className="pricing-card h-100 text-center p-4">

                        <div className="pricing-icon mb-4">
                            <img
                                src="images/intradayTrades.svg"
                                alt="Trading"
                            />
                        </div>

                        <h4 className="fw-semibold mb-3">
                            Active trading
                        </h4>

                        <div className="display-6 fw-semibold mb-3">
                            ₹20
                        </div>

                        <p className="text-muted lh-lg">
                            Competitive pricing for intraday and derivatives,
                            with charges calculated transparently on every
                            executed order.
                        </p>

                    </div>
                </div>


                {/* Mutual Funds */}
                <div className="col-lg-4">
                    <div className="pricing-card h-100 text-center p-4">

                        <div className="pricing-icon mb-4">
                            <img
                                src="images/pricingEquity.svg"
                                alt="Mutual funds"
                            />
                        </div>

                        <h4 className="fw-semibold mb-3">
                            Mutual funds
                        </h4>

                        <div className="display-6 fw-semibold mb-3">
                            ₹0
                        </div>

                        <p className="text-muted lh-lg">
                            Invest in eligible direct mutual funds without
                            additional distribution commissions.
                        </p>

                    </div>
                </div>

            </div>


            {/* Bottom note */}
            <div className="text-center mt-5">

                <p className="text-muted small">
                    Applicable taxes, exchange fees, and regulatory charges
                    may vary depending on the transaction.
                </p>

            </div>

        </div>
    );
}

export default Brokerage;