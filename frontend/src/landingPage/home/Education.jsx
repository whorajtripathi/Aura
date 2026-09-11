import "./Home.css";

function Education() {
    return (
        <section className="home-section education-section">

            <div className="container">

                <div className="section-label">
                    <span>04</span>
                    LEARN
                </div>


                <div className="education-grid">

                    {/* Image */}
                    <div className="education-image">

                        <div className="education-image-glow"></div>

                        <img
                            src="/images/education.svg"
                            alt="Learn about investing"
                        />

                    </div>


                    {/* Content */}
                    <div className="education-content">

                        <span className="home-eyebrow">
                            KNOWLEDGE FIRST
                        </span>

                        <h2>
                            Learn before
                            <span> you invest.</span>
                        </h2>

                        <p>
                            Understand the market with simple, practical
                            resources designed for everyone — from your
                            first investment to more advanced strategies.
                        </p>

                        <a href="#" className="aura-text-link">
                            Explore learning resources
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>


                        <div className="education-divider"></div>


                        <span className="home-eyebrow">
                            COMMUNITY
                        </span>

                        <h3>
                            Learn together.
                        </h3>

                        <p>
                            Connect with other investors, discuss market
                            trends, share ideas, and get answers to questions
                            from an active investing community.
                        </p>

                        <a href="#" className="aura-text-link">
                            Join the community
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;