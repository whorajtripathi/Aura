import { useNavigate } from "react-router-dom";
import "./pricing.css";


function BrokerageInfo() {

    const navigate = useNavigate();
    return (
        <section className="brokerage-section">

            <div className="container">

                <div className="pricing-section-label">
                    <span>02</span>
                    PRICING DETAILS
                </div>

                <div className="brokerage-grid">

                    {/* Left */}
                    <div className="brokerage-content">

                        <span className="pricing-eyebrow">
                            KNOW WHAT YOU PAY
                        </span>

                        <h2>
                            Know exactly
                            <span> what you're paying for.</span>
                        </h2>

                        <p className="brokerage-intro">
                            Aura keeps pricing transparent so you can
                            understand the costs associated with your
                            investments before completing eligible
                            transactions.
                        </p>

                        <div className="charge-list">

                            <div className="charge-item">
                                <div className="charge-icon">
                                    <i className="fa-solid fa-receipt"></i>
                                </div>

                                <div>
                                    <h4>Taxes & regulatory charges</h4>
                                    <p>
                                        Applicable taxes and regulatory
                                        charges are calculated automatically
                                        for eligible orders.
                                    </p>
                                </div>
                            </div>


                            <div className="charge-item">
                                <div className="charge-icon">
                                    <i className="fa-solid fa-file-lines"></i>
                                </div>

                                <div>
                                    <h4>Digital statements</h4>
                                    <p>
                                        Trade confirmations and transaction
                                        statements are delivered
                                        electronically.
                                    </p>
                                </div>
                            </div>


                            <div className="charge-item">
                                <div className="charge-icon">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>

                                <div>
                                    <h4>Exchange-related charges</h4>
                                    <p>
                                        Charges may vary depending on the
                                        market segment and order type.
                                    </p>
                                </div>
                            </div>


                            <div className="charge-item">
                                <div className="charge-icon">
                                    <i className="fa-solid fa-sliders"></i>
                                </div>

                                <div>
                                    <h4>Additional services</h4>
                                    <p>
                                        Additional services may carry
                                        separate charges where applicable.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    {/* Right */}
                    <div className="brokerage-side">

                        <div className="charge-box">

                            <div className="charge-box-glow"></div>

                            <span className="charge-box-label">
                                FULL BREAKDOWN
                            </span>

                            <div className="charge-box-icon">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>

                            <h3>
                                Need a detailed
                                <span> breakdown?</span>
                            </h3>

                            <p>
                                Explore brokerage, transaction fees, taxes,
                                and other applicable charges in one place.
                            </p>

                            <button
                                type="button"
                                className="aura-primary-btn"
                                onClick={() => navigate("/pricing/charges")}
                            >
                                View all charges
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>

                            <div className="charge-box-note">
                                <i className="fa-solid fa-shield-halved"></i>
                                Charges are shown clearly before eligible
                                transactions are completed.
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default BrokerageInfo;