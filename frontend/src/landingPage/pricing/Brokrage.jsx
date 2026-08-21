function Brokerage() {
    return (
        <div className="container py-5">

            <div className="row align-items-start g-5">

                {/* Left Section */}
                <div className="col-lg-8">

                    <h3 className="text-center text-primary mb-4">
                        Brokerage Calculator
                    </h3>

                    <ul
                        className="text-muted"
                        style={{
                            lineHeight: "2",
                            paddingLeft: "20px"
                        }}
                    >
                        <li>
                            Additional charges may apply for assisted
                            trading or special order handling.
                        </li>

                        <li>
                            Digital trade confirmations and contract
                            statements are delivered electronically.
                        </li>

                        <li>
                            Physical documentation, when requested,
                            may be subject to applicable service charges.
                        </li>

                        <li>
                            Applicable taxes and regulatory charges are
                            calculated automatically on executed orders.
                        </li>

                        <li>
                            Exchange transaction charges may vary depending
                            on the segment and order type.
                        </li>

                        <li>
                            All applicable charges are displayed clearly
                            before completing eligible transactions.
                        </li>
                    </ul>

                </div>

                {/* Right Section */}
                <div className="col-lg-4 text-center">

                    <h3 className="text-primary mb-4">
                        List of Charges
                    </h3>

                    <div className="border rounded p-4">

                        <h5 className="fw-semibold mb-3">
                            Transparent pricing
                        </h5>

                        <p className="text-muted small">
                            View applicable brokerage, taxes, exchange
                            charges, and other fees before placing an order.
                        </p>

                        <button className="btn btn-primary px-4">
                            View charges
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Brokerage;