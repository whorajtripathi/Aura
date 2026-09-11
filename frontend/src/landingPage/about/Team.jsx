import "./About.css";

function Team() {
    return (
        <section className="about-developer">

            <div className="container">

                <div className="developer-wrapper">

                    {/* Developer Image */}
                    {/* Developer Image + Social Links */}
                    <div className="developer-image-section">

                        <div className="developer-image-glow"></div>

                        <div className="developer-image-container">
                            <img
                                src="/images/Raj_aura.jpg"
                                alt="Aura Developer"
                            />
                        </div>

                        <div className="developer-image-label">
                            <span></span>
                            BUILT WITH AURA
                        </div>


                        {/* Social Links */}
                        <div className="developer-socials">

                            <a
                                href="https://github.com/whorajtripathi"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card github-card"
                            >
                                <div className="social-icon">
                                    <i className="fa-brands fa-github"></i>
                                </div>

                                <div className="social-info">
                                    <span>GitHub</span>
                                    <small>View my projects</small>
                                </div>

                                <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
                            </a>


                            <a
                                href="https://www.linkedin.com/in/whorajtripathi/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-card linkedin-card"
                            >
                                <div className="social-icon">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>

                                <div className="social-info">
                                    <span>LinkedIn</span>
                                    <small>Connect with me</small>
                                </div>

                                <i className="fa-solid fa-arrow-up-right-from-square social-arrow"></i>
                            </a>

                        </div>

                    </div>


                    {/* Developer Information */}
                    <div className="developer-content">

                        <span className="about-eyebrow">
                            THE DEVELOPER
                        </span>

                        <h2>
                            Hey, I'm
                            <span> RST.</span>
                        </h2>

                        <h4>
                            Computer Science & Engineering Student
                        </h4>

                        <div className="developer-description">

                            <p>
                                I'm the developer behind Aura, a full-stack
                                investment platform built to explore how
                                modern financial applications can be
                                designed and developed using technology.
                            </p>

                            <p>
                                I built Aura from the ground up as a MERN
                                stack project, working across the frontend,
                                backend, database, authentication, APIs,
                                and overall user experience.
                            </p>

                            <p>
                                The goal was not just to build a trading
                                interface, but to understand how a
                                real-world financial platform can be
                                structured, developed, and scaled.
                            </p>

                        </div>


                        {/* Technology */}
                        <div className="developer-stack">

                            <span className="stack-title">
                                BUILT WITH
                            </span>

                            <div className="stack-list">

                                <span>React</span>
                                <span>Node.js</span>
                                <span>Express</span>
                                <span>MongoDB</span>
                                <span>JavaScript</span>
                                <span>REST APIs</span>

                            </div>

                        </div>


                        

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Team;