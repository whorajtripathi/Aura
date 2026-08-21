function BrokerageInfo() {
    return (
        <div className="container my-5 py-5">

            <div className="row align-items-center g-5">

                {/* Left */}
                <div className="col-lg-7">

                    <p className="text-uppercase text-primary fw-semibold small mb-2">
                        Pricing details
                    </p>

                    <h2 className="fw-semibold mb-4">
                        Transparent charges, clearly explained
                    </h2>

                    <ul className="text-muted lh-lg ps-3">

                        <li className="mb-3">
                            Applicable taxes and regulatory charges are
                            calculated automatically for eligible orders.
                        </li>

                        <li className="mb-3">
                            Digital trade confirmations and transaction
                            statements are delivered electronically.
                        </li>

                        <li className="mb-3">
                            Exchange-related charges may vary depending
                            on the market segment and order type.
                        </li>

                        <li className="mb-3">
                            Additional services may carry separate charges
                            where applicable.
                        </li>

                        <li className="mb-3">
                            All applicable charges are presented clearly
                            before eligible transactions are completed.
                        </li>

                    </ul>

                </div>


                {/* Right */}
                <div className="col-lg-5">

                    <div className="charge-box p-4">

                        <h4 className="fw-semibold mb-3">
                            Need a detailed breakdown?
                        </h4>

                        <p className="text-muted">
                            Explore brokerage, transaction fees, taxes,
                            and other applicable charges in one place.
                        </p>

                        <button className="btn btn-primary px-4 mt-2">
                            View all charges
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BrokerageInfo;