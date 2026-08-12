function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container py-2">

                {/* Logo */}
                <a className="navbar-brand" href="#">
                    <img
                        src="images/logo.svg"
                        alt="Aura"
                        style={{ width: "130px" }}
                    />
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Sign Up
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Products
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Pricing
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Support
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;