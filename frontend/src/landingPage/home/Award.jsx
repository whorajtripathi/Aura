function Award() {
    return (
        <div className="container my-5">
            <div className="row align-items-center py-5">

                {/* Left - Platform Image */}
                <div className="col-lg-6 text-center">
                    <img
                        src="images/largestBroker.svg"
                        alt="Aura platform"
                        className="img-fluid"
                        style={{ width: "80%" }}
                    />
                </div>

                {/* Right - Content */}
                <div className="col-lg-6 mt-4 mt-lg-0">

                    <h1 className="display-6 fw-semibold mb-3">
                        Everything you need to invest
                    </h1>

                    <p className="text-muted lh-lg">
                        Aura brings the essential tools for modern investors
                        together in one simple platform. Explore markets,
                        track opportunities, and manage your investments
                        with clarity.
                    </p>

                    {/* Features */}
                    <div className="row mt-4 mb-4">

                        <div className="col-6">
                            <ul className="ps-3">
                                <li className="mb-2">
                                    Stocks & ETFs
                                </li>
                                <li className="mb-2">
                                    Futures & Options
                                </li>
                                <li className="mb-2">
                                    Market insights
                                </li>
                            </ul>
                        </div>

                        <div className="col-6">
                            <ul className="ps-3">
                                <li className="mb-2">
                                    Mutual funds
                                </li>
                                <li className="mb-2">
                                    Bonds & IPOs
                                </li>
                                <li className="mb-2">
                                    Portfolio tracking
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Press / Trust */}
                    <div className="mt-4">
                        <p className="text-muted small mb-3">
                            Trusted by investors and featured across leading
                            financial platforms.
                        </p>

                        <img
                            src="images/pressLogos.png"
                            alt="Financial media"
                            className="img-fluid"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Award;