function Home() {
    return (
        <div className="container my-5">

            <h2 className="text-center fw-semibold mb-5">
                Making investing simpler through technology
            </h2>

            <div className="row">

                {/* Left Column */}
                <div className="col-lg-6 px-lg-5">

                    <p className="text-muted lh-lg mb-4">
                        Aura was built with a simple idea: investing should
                        be easier to understand, easier to manage, and
                        accessible through modern technology.
                    </p>

                    <p className="text-muted lh-lg mb-4">
                        Our platform brings market data, portfolio tracking,
                        watchlists, and essential investment tools together
                        in one clean and intuitive experience.
                    </p>

                    <p className="text-muted lh-lg mb-4">
                        Instead of overwhelming investors with unnecessary
                        complexity, Aura focuses on giving you the tools
                        and information you need to make informed decisions.
                    </p>

                </div>

                {/* Right Column */}
                <div className="col-lg-6 px-lg-5">

                    <p className="text-muted lh-lg mb-4">
                        Whether you're exploring the markets for the first
                        time or managing an active portfolio, Aura is
                        designed to grow with your investing journey.
                    </p>

                    <p className="text-muted lh-lg mb-4">
                        We're also building educational resources that make
                        financial concepts easier to understand and help
                        investors develop better market awareness.
                    </p>

                    <p className="text-muted lh-lg mb-4">
                        This is just the beginning. We're continuously
                        experimenting with new ideas and technology to make
                        the investing experience smarter and more useful.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Home;