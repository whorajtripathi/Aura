function Hero() {
    return (
        <div className="container">
            <div className="row text-center justify-content-center py-5">

                {/* Hero Image */}
                <div className="col-12">
                    <img
                        src="images/homeHero.png"
                        alt="Aura investment platform"
                        className="img-fluid mb-5"
                        style={{ maxHeight: "500px" }}
                    />
                </div>

                {/* Hero Content */}
                <div className="col-lg-8">

                    <h1 className="display-4 fw-semibold mb-3">
                        Invest with confidence
                    </h1>

                    <p className="text-muted fs-5 lh-lg mb-4">
                        Discover markets, track your investments, and
                        manage your portfolio with a simple and powerful
                        investing platform.
                    </p>

                    <button className="btn btn-primary px-5 py-3">
                        Get started
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Hero;