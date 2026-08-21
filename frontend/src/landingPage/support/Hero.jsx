import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section id="supportHero">

            {/* Top bar */}
            <div className="container">
                <div id="supportWrapper">

                    <h4 className="mb-0">
                        Aura Support
                    </h4>

                    <Link to="/support" className="track-link">
                        Track a ticket
                    </Link>

                </div>
            </div>


            {/* Hero content */}
            <div className="container py-5">

                <div className="row align-items-center">

                    <div className="col-lg-8">

                        <h1 className="display-6 fw-semibold mb-3">
                            How can we help?
                        </h1>

                        <p className="mb-4 support-subtitle">
                            Search our help center or explore a topic
                            to find the answers you need.
                        </p>

                        {/* Search */}
                        <div className="support-search">

                            <FaSearch className="search-icon" />

                            <input
                                type="text"
                                placeholder="Search for a question or topic..."
                            />

                        </div>


                        {/* Popular searches */}
                        <div className="popular-searches mt-3">

                            <span>Popular:</span>

                            <Link to="#">
                                Account
                            </Link>

                            <Link to="#">
                                Orders
                            </Link>

                            <Link to="#">
                                Portfolio
                            </Link>

                            <Link to="#">
                                Payments
                            </Link>

                        </div>

                    </div>


                    {/* Featured */}
                    <div className="col-lg-4 mt-5 mt-lg-0">

                        <div className="featured-box">

                            <p className="small text-uppercase mb-2">
                                Featured
                            </p>

                            <h5>
                                Platform updates
                            </h5>

                            <p className="small mb-3">
                                Stay updated with new features,
                                improvements, and important announcements.
                            </p>

                            <Link to="#">
                                View updates
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;