function Universe() {
    return (
        <div className="container my-5 py-5">

            {/* Heading */}
            <div className="text-center mb-5">

                <h1 className="display-6 fw-semibold mb-3">
                    The Aura Ecosystem
                </h1>

                <p className="text-muted fs-5">
                    A growing collection of tools designed to make investing
                    simpler, smarter, and more connected.
                </p>

            </div>

            {/* Products */}
            <div className="row g-4">

                {/* Aura Analytics */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/smallcaseLogo.png"
                            alt="Aura Analytics"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Analytics
                        </h5>

                        <p className="text-muted small">
                            Explore market trends, performance metrics,
                            and insights to better understand your portfolio.
                        </p>

                    </div>
                </div>


                {/* Aura Bonds */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/goldenpiLogo.png"
                            alt="Aura Bonds"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Bonds
                        </h5>

                        <p className="text-muted small">
                            Discover fixed-income opportunities and
                            explore alternative ways to diversify your portfolio.
                        </p>

                    </div>
                </div>


                {/* Aura Options */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/sensibullLogo.svg"
                            alt="Aura Options"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px", marginBottom:"100px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Options
                        </h5>

                        <p className="text-muted small">
                            Understand derivatives with powerful tools
                            for analyzing strategies and market movements.
                        </p>

                    </div>
                </div>


                {/* Aura Strategy */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/streakLogo.png"
                            alt="Aura Strategy"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Strategy
                        </h5>

                        <p className="text-muted small">
                            Build and experiment with investment strategies
                            using market data and analytical tools.
                        </p>

                    </div>
                </div>


                {/* Aura Insights */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/zerodhaFundhouse.png"
                            alt="Aura Insights"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Insights
                        </h5>

                        <p className="text-muted small">
                            Stay informed with market research, educational
                            content, and useful investing perspectives.
                        </p>

                    </div>
                </div>


                {/* Aura Protect */}
                <div className="col-lg-4 col-md-6">
                    <div className="text-center p-4 h-100">

                        <img
                            src="images/dittoLogo.png"
                            alt="Aura Protect"
                            className="img-fluid mb-3"
                            style={{ maxHeight: "50px" }}
                        />

                        <h5 className="fw-semibold">
                            Aura Protect
                        </h5>

                        <p className="text-muted small">
                            Tools and resources to help you understand
                            financial risks and make more informed decisions.
                        </p>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Universe;