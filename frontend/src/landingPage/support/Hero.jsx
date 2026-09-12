import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
    return (
        <section id="supportHero">

            <div className="support-hero-glow"></div>

            {/* Top bar */}
            <div className="container">
                <div id="supportWrapper">

                    <div className="support-brand">
                        <span className="support-brand-dot"></span>
                        <h4 className="mb-0">Aura Support</h4>
                    </div>

                    <Link to="/support" className="track-link">
                        Track a ticket
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>

                </div>
            </div>


            {/* Hero content */}
            <div className="container">
                <div className="support-hero-content">

                    <div className="support-hero-main">

                        <div className="support-eyebrow">
                            <span className="support-eyebrow-line"></span>
                            HELP CENTER
                        </div>

                        <h1>
                            Need help?
                            <br />
                            <span>Let's find the answer.</span>
                        </h1>

                        <p className="support-subtitle">
                            Search the Aura Help Center or explore a topic
                            to find the information you need.
                        </p>


                        {/* Search */}
                        <div className="support-search">

                            <FaSearch className="search-icon" />

                            <input
                                type="text"
                                placeholder="Search for a question, feature or topic..."
                            />

                            <span className="search-shortcut">
                                ⌘ K
                            </span>

                        </div>


                        {/* Popular searches */}
                        <div className="popular-searches">

                            <span className="popular-label">
                                Popular:
                            </span>

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
                    <div className="featured-box">

                        <div className="featured-top">

                            <div className="featured-icon">
                                <i className="fa-solid fa-sparkles"></i>
                            </div>

                            <span>FEATURED</span>

                        </div>

                        <h5>
                            Platform updates
                        </h5>

                        <p>
                            Stay updated with new features,
                            improvements, and important announcements
                            across Aura.
                        </p>

                        <Link to="#">
                            View updates
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;