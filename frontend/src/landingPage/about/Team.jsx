function Team() {
    return (
        <div className="container my-5">

            <h1 className="text-center fw-semibold mb-3">
                Meet the Developer
            </h1>

            <div className="row align-items-center py-5">

                {/* Developer Image */}
                <div className="col-lg-6 text-center">
                    <img
                        src="images/Raj_aura.jpg"
                        alt="Aura Developer"
                        className="img-fluid rounded"
                        style={{ width: "70%", borderRadius:"100%" }}
                    />
                </div>

                {/* Developer Information */}
                <div className="col-lg-6 mt-5 mt-lg-0">

                    <h1 className="display-6 fw-semibold mb-2">
                        Hey, I'm RST!!
                    </h1>

                    <h5 className="text-muted mb-4">
                        Computer Science & Engineering Student
                    </h5>

                    <p className="text-muted lh-lg">
                        I'm the developer behind Aura, a full-stack investment
                        platform built to explore how modern financial
                        applications can be designed and developed using
                        technology.
                    </p>

                    <p className="text-muted lh-lg">
                        I built Aura from the ground up as a MERN stack
                        project, working across the frontend, backend,
                        database, authentication, APIs, and overall user
                        experience.
                    </p>

                    <p className="text-muted lh-lg">
                        The goal was not just to build a trading interface,
                        but to understand how a real-world financial platform
                        can be structured, developed, and scaled.
                    </p>

                    {/* Skills */}
                    <div className="mt-4">

                        <h5 className="fw-semibold mb-3">
                            Built with
                        </h5>

                        <div className="d-flex flex-wrap gap-2">
                            <span className="badge text-bg-light border p-2">
                                React
                            </span>

                            <span className="badge text-bg-light border p-2">
                                Node.js
                            </span>

                            <span className="badge text-bg-light border p-2">
                                Express.js
                            </span>

                            <span className="badge text-bg-light border p-2">
                                MongoDB
                            </span>

                            <span className="badge text-bg-light border p-2">
                                JavaScript
                            </span>

                            <span className="badge text-bg-light border p-2">
                                REST APIs
                            </span>
                        </div>

                    </div>

                    {/* Links */}
                    <div className="mt-4">

                        <a
                            href="https://github.com/whorajtripathi"
                            className="text-decoration-none me-4"
                        >
                            GitHub
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/whorajtripathi/"
                            className="text-decoration-none"
                        >
                            LinkedIn
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Team;