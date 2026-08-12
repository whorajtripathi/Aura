function Footer() {
    return (
        <footer
            className="mt-5 pt-5"
            style={{ backgroundColor: "#f5f5f5" }}
        >
            <div className="container">

                <div className="row pb-5">

                    {/* Brand */}
                    <div className="col-lg-3 mb-4">
                        <img
                            src="images/Aura_logo.png"
                            alt="Aura"
                            style={{ width: "60%" }}
                            className="mb-3"
                        />

                        <p className="text-muted small">
                            A simple and powerful platform for exploring
                            markets, tracking investments, and managing
                            your portfolio.
                        </p>

                        <p className="text-muted small">
                            © 2026 Aura. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="text-muted">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                            <a href="#" className="text-muted">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>

                            <a href="#" className="text-muted">
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a href="#" className="text-muted">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>


                    {/* Platform */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h6 className="fw-semibold mb-3">
                            Platform
                        </h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Markets
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Watchlist
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Portfolio
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Orders
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Company */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h6 className="fw-semibold mb-3">
                            Company
                        </h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    About Aura
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Careers
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Blog
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Press
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>


                    {/* Resources */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <h6 className="fw-semibold mb-3">
                            Resources
                        </h6>

                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Help Center
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Investment Guide
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Market Insights
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Documentation
                                </a>
                            </li>

                            <li className="mb-2">
                                <a href="#" className="text-decoration-none text-muted">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>


                {/* Bottom Section */}
                <div className="border-top pt-4 pb-4 text-center">

                    <p className="text-muted small mb-2">
                        Aura is a personal investment platform created as
                        a MERN stack learning project. The platform is
                        designed for educational and demonstration purposes.
                    </p>

                    <p className="text-muted small mb-0">
                        Market data, investment information, and portfolio
                        values displayed on the platform may be simulated
                        and should not be considered financial advice.
                    </p>

                </div>

            </div>
        </footer>
    );
}

export default Footer;