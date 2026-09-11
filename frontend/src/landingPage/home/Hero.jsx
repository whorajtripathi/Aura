import "./Home.css";

function Hero() {
    return (
        <section className="home-hero">

            <div className="hero-glow hero-glow-one"></div>
            <div className="hero-glow hero-glow-two"></div>

            <div className="container">

                <div className="hero-content">

                    <span className="home-eyebrow">
                        YOUR FINANCIAL SPACE
                    </span>

                    <h1>
                        Invest with
                        <span> confidence.</span>
                    </h1>

                    <p>
                        Discover markets, track your investments, and
                        manage your portfolio with a simple and powerful
                        investing platform.
                    </p>

                    <button className="aura-primary-btn">
                        Get started
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </div>


                <div className="hero-image-wrapper">

                    <div className="hero-image-glow"></div>

                    <img
                        src="/images/homeHero.png"
                        alt="Aura investment platform"
                    />

                </div>

            </div>

        </section>
    );
}

export default Hero;