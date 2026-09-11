import "./About.css";

function Home() {
    return (
        <section className="about-hero">

            {/* Background Glow */}
            <div className="about-glow about-glow-one"></div>
            <div className="about-glow about-glow-two"></div>

            <div className="container">

                {/* Section Header */}
                <div className="about-heading">

                    <span className="about-eyebrow">
                        ABOUT AURA
                    </span>

                    <h1>
                        Investing should feel
                        <span> simpler.</span>
                    </h1>

                    <p>
                        Making investing easier to understand,
                        easier to manage, and more accessible through
                        modern technology.
                    </p>

                </div>

                {/* Main Story */}
                <div className="about-story">

                    <div className="about-story-column">

                        <span className="story-number">01</span>

                        <h3>
                            Built around simplicity
                        </h3>

                        <p>
                            Aura was built with a simple idea: investing
                            should be easier to understand, easier to
                            manage, and accessible through modern
                            technology.
                        </p>

                        <p>
                            Our platform brings market data, portfolio
                            tracking, watchlists, and essential investment
                            tools together in one clean and intuitive
                            experience.
                        </p>

                        <p>
                            Instead of overwhelming investors with
                            unnecessary complexity, Aura focuses on giving
                            you the tools and information you need to make
                            informed decisions.
                        </p>

                    </div>


                    <div className="about-story-column">

                        <span className="story-number">02</span>

                        <h3>
                            Designed to grow with you
                        </h3>

                        <p>
                            Whether you're exploring the markets for the
                            first time or managing an active portfolio,
                            Aura is designed to grow with your investing
                            journey.
                        </p>

                        <p>
                            We're also building educational resources that
                            make financial concepts easier to understand
                            and help investors develop better market
                            awareness.
                        </p>

                        <p>
                            This is just the beginning. We're continuously
                            experimenting with new ideas and technology to
                            make the investing experience smarter and more
                            useful.
                        </p>

                    </div>

                </div>


                {/* Our Approach */}
                <div className="about-approach">

                    <div className="approach-line"></div>

                    <div>
                        <span>OUR APPROACH</span>

                        <h2>
                            Designed around the way
                            <span> you invest.</span>
                        </h2>

                        <p>
                            Less noise. Better visibility. More control.
                        </p>
                    </div>

                    <div className="approach-line"></div>

                </div>


                {/* Value Cards */}
                <div className="about-values">

                    <div className="value-card">

                        <div className="value-icon">
                            01
                        </div>

                        <div>
                            <h3>Clarity</h3>

                            <p>
                                Understand your portfolio without
                                unnecessary complexity or information
                                overload.
                            </p>
                        </div>

                    </div>


                    <div className="value-card">

                        <div className="value-icon">
                            02
                        </div>

                        <div>
                            <h3>Control</h3>

                            <p>
                                Keep your watchlists and investments
                                organized in one focused workspace.
                            </p>
                        </div>

                    </div>


                    <div className="value-card">

                        <div className="value-icon">
                            03
                        </div>

                        <div>
                            <h3>Growth</h3>

                            <p>
                                Learn, track, and improve as your investing
                                journey develops.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Home;