import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="aura-navbar">
            <div className="container">
                <div className="aura-navbar-inner">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="aura-navbar-logo"
                        onClick={closeMenu}
                    >
                        <img src="/images/Aura.png" alt="Aura" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="aura-menu-button"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <i
                            className={
                                menuOpen
                                    ? "fa-solid fa-xmark"
                                    : "fa-solid fa-bars"
                            }
                        ></i>
                    </button>

                    {/* Navigation */}
                    <div
                        className={`aura-navbar-menu ${
                            menuOpen ? "aura-menu-open" : ""
                        }`}
                    >
                        <ul className="aura-nav-links">

                            <li>
                                <Link
                                    to="/about"
                                    className={
                                        isActive("/about") ? "active" : ""
                                    }
                                    onClick={closeMenu}
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/products"
                                    className={
                                        isActive("/products") ? "active" : ""
                                    }
                                    onClick={closeMenu}
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/pricing"
                                    className={
                                        location.pathname.startsWith("/pricing")
                                            ? "active"
                                            : ""
                                    }
                                    onClick={closeMenu}
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/support"
                                    className={
                                        isActive("/support") ? "active" : ""
                                    }
                                    onClick={closeMenu}
                                >
                                    Support
                                </Link>
                            </li>

                            <li className="aura-nav-divider"></li>

                            <li>
                                <Link
                                    to="/login"
                                    className="aura-login-link"
                                    onClick={closeMenu}
                                >
                                    Log in
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/signup"
                                    className="aura-signup-button"
                                    onClick={closeMenu}
                                >
                                    Get started
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;