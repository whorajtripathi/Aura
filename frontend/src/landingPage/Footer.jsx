import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="aura-footer">

            <div className="container">

                {/* Main footer */}
                <div className="aura-footer-main">

                    {/* Brand */}
                    <div className="aura-footer-brand">

                        <Link to="/">
                            <img
                                src="/images/Aura.png"
                                alt="Aura"
                            />
                        </Link>

                        <p>
                            A simple and powerful platform for exploring
                            markets, tracking investments, and managing
                            your portfolio.
                        </p>

                        <div className="aura-footer-socials">

                            <a
                                href="https://github.com/whorajtripathi"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/whorajtripathi/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="X"
                            >
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                        </div>

                    </div>


                    {/* Platform */}
                    <div className="aura-footer-column">

                        <h6>Platform</h6>

                        <Link to="/products">
                            Products
                        </Link>

                        <Link to="/pricing">
                            Pricing
                        </Link>

                        <Link to="/signup">
                            Get started
                        </Link>

                        <Link to="/login">
                            Log in
                        </Link>

                    </div>


                    {/* Company */}
                    <div className="aura-footer-column">

                        <h6>Company</h6>

                        <Link to="/about">
                            About Aura
                        </Link>

                        <a href="#">
                            Careers
                        </a>

                        <a href="#">
                            Blog
                        </a>

                        <a href="#">
                            Contact
                        </a>

                    </div>


                    {/* Resources */}
                    <div className="aura-footer-column">

                        <h6>Resources</h6>

                        <Link to="/support">
                            Help Center
                        </Link>

                        <a href="#">
                            Investment Guide
                        </a>

                        <a href="#">
                            Market Insights
                        </a>

                        <a href="#">
                            Documentation
                        </a>

                    </div>

                </div>


                {/* Bottom */}
                <div className="aura-footer-bottom">

                    <div className="aura-footer-disclaimer">

                        <p>
                            © 2026 Aura. All rights reserved.
                        </p>

                        <p>
                            Aura is a personal investment platform created
                            as a MERN stack learning project. The platform
                            is designed for educational and demonstration
                            purposes.
                        </p>

                        <p>
                            Market data, investment information, and portfolio
                            values displayed on the platform may be simulated
                            and should not be considered financial advice.
                        </p>

                    </div>

                    <div className="aura-footer-status">

                        <span className="status-dot"></span>

                        <span>
                            Platform online
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;