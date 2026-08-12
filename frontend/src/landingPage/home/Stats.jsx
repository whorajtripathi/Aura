function Stats() {
    return (
        <div className="container my-5">
            <div className="row align-items-center py-5">

                {/* Left Content */}
                <div className="col-lg-6 pe-lg-5">

                    <h1 className="display-6 fw-semibold mb-5">
                        Trust with confidence
                    </h1>

                   <div className="mb-4">
                        <h2 className="h4 fw-semibold mb-2">
                            Built around you
                        </h2>

                        <p className="text-muted lh-lg mb-0">
                            A clean investing experience designed to help you discover
                            opportunities, track your portfolio, and make decisions without
                            unnecessary complexity.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h2 className="h4 fw-semibold mb-2">
                            Simple, transparent experience
                        </h2>

                        <p className="text-muted lh-lg mb-0">
                            No confusing interfaces or distracting features. Everything you
                            need to follow the markets and manage your investments stays right
                            where you need it.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h2 className="h4 fw-semibold mb-2">
                            Your complete market workspace
                        </h2>

                        <p className="text-muted lh-lg mb-0">
                            Explore stocks, monitor your watchlist, review market movements,
                            and keep track of your investments from one connected platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="h4 fw-semibold mb-2">
                            Invest with clarity
                        </h2>

                        <p className="text-muted lh-lg mb-0">
                            Powerful tools and meaningful insights help you understand your
                            investments better and stay in control of your financial journey.
                        </p>
                    </div>
                </div>


                {/* Right Content */}
                <div className="col-lg-6 mt-5 mt-lg-0">

                    <img
                        src="images/ecosystem.png"
                        alt="ecosystem"
                        className="img-fluid"
                    />

                    <div className="text-center mt-4">

                        <a
                            href="#"
                            className="text-decoration-none me-5"
                        >
                            Explore Our Products
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                        <a
                            href="#"
                            className="text-decoration-none"
                        >
                            Try Kite Demo
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Stats;