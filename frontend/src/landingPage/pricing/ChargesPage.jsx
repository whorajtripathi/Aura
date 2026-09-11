import "./pricing.css";

function ChargesPage() {
    return (
        <main className="charges-page">

            {/* Hero */}
            <section className="charges-hero">
                <div className="charges-hero-glow"></div>

                <div className="container">
                    <div className="charges-hero-content">

                        <span className="pricing-eyebrow">
                            PRICING DETAILS
                        </span>

                        <h1>
                            Every charge,
                            <span> clearly explained.</span>
                        </h1>

                        <p>
                            Understand brokerage, taxes, exchange fees,
                            and other applicable charges before you invest.
                        </p>

                    </div>
                </div>
            </section>


            {/* Charges */}
            <section className="charges-content-section">

                <div className="container">

                    <div className="pricing-section-label">
                        <span>01</span>
                        CHARGE BREAKDOWN
                    </div>


                    <div className="charges-grid">

                        {/* Brokerage */}
                        <div className="charge-detail-card">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>

                            <div className="charge-detail-number">
                                01
                            </div>

                            <h3>
                                Brokerage
                            </h3>

                            <p>
                                Brokerage charges depend on the type of
                                transaction and applicable product.
                                Eligible equity delivery investments are
                                charged at ₹0 brokerage, while applicable
                                intraday and derivatives transactions may
                                have brokerage charges.
                            </p>

                        </div>


                        {/* Taxes */}
                        <div className="charge-detail-card">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-receipt"></i>
                            </div>

                            <div className="charge-detail-number">
                                02
                            </div>

                            <h3>
                                Taxes & statutory charges
                            </h3>

                            <p>
                                Applicable taxes and statutory charges may
                                apply to eligible transactions. These
                                charges can vary depending on the transaction
                                and market segment.
                            </p>

                        </div>


                        {/* Exchange */}
                        <div className="charge-detail-card">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-building-columns"></i>
                            </div>

                            <div className="charge-detail-number">
                                03
                            </div>

                            <h3>
                                Exchange charges
                            </h3>

                            <p>
                                Exchanges may levy transaction-related
                                charges depending on the market segment,
                                transaction type, and applicable rules.
                            </p>

                        </div>


                        {/* Statements */}
                        <div className="charge-detail-card">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-file-lines"></i>
                            </div>

                            <div className="charge-detail-number">
                                04
                            </div>

                            <h3>
                                Statements & confirmations
                            </h3>

                            <p>
                                Trade confirmations and transaction
                                statements are delivered electronically,
                                helping you keep track of your activity.
                            </p>

                        </div>


                        {/* Additional */}
                        <div className="charge-detail-card">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-sliders"></i>
                            </div>

                            <div className="charge-detail-number">
                                05
                            </div>

                            <h3>
                                Additional services
                            </h3>

                            <p>
                                Certain optional or additional services may
                                carry separate charges where applicable.
                                Any applicable cost should be reviewed before
                                using the service.
                            </p>

                        </div>


                        {/* Transparency */}
                        <div className="charge-detail-card charge-detail-highlight">

                            <div className="charge-detail-icon">
                                <i className="fa-solid fa-shield-halved"></i>
                            </div>

                            <div className="charge-detail-number">
                                06
                            </div>

                            <h3>
                                Transparent before you trade
                            </h3>

                            <p>
                                Applicable charges are presented clearly
                                before eligible transactions are completed,
                                helping you understand the expected costs.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Important note */}
            <section className="charges-note-section">

                <div className="container">

                    <div className="charges-note-box">

                        <div className="charges-note-icon">
                            <i className="fa-solid fa-circle-info"></i>
                        </div>

                        <div>
                            <h3>
                                Important information
                            </h3>

                            <p>
                                Charges, taxes, exchange fees, and regulatory
                                requirements may change based on applicable
                                rules and the type of transaction. Please
                                review the applicable charges before placing
                                an order.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ChargesPage;