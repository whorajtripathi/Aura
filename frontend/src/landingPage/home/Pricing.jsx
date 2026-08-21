
function Pricing() {
    return (
        <div className="container my-5">
            <div className="row align-items-center py-5">

                {/* Left Content */}
                <div className="col-lg-5">
                    <h1 className="display-6 fw-semibold mb-4">
                        Unbeatable pricing
                    </h1>

                    <p className="text-muted fs-5 lh-lg mb-4">
                        We pioneered the concept of discount broking and
                        price transparency in India. Flat fees and no hidden
                        charges.
                    </p>

                    <a
                        href="#"
                        className="text-decoration-none fw-medium"
                    >
                        See pricing
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>
                </div>

                {/* Right Pricing Cards */}
                <div className="col-lg-6 offset-lg-1 mt-5 mt-lg-0">
                    <div className="row g-0">

                        {/* Card 1 */}
                        <div className="col-md-6">
                            <div className="border rounded-start p-4 text-center h-100">
                                <h2 className="display-5 fw-semibold mb-3">
                                    0
                                    <i className="fa-solid fa-indian-rupee-sign fs-4 ms-1"></i>
                                </h2>

                                <p className="text-muted mb-0">
                                    Free equity delivery and direct mutual funds
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6">
                            <div className="border border-start-0 rounded-end p-4 text-center h-100">
                                <h2 className="display-5 fw-semibold mb-3">
                                    20
                                    <i className="fa-solid fa-indian-rupee-sign fs-4 ms-1"></i>
                                </h2>

                                <p className="text-muted mb-0">
                                    Intraday and F&O
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;