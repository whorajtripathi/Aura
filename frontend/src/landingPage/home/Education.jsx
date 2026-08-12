function Education() {
    return (
        <div className="container my-5">
            <div className="row align-items-center py-5">

                {/* Left - Image */}
                <div className="col-lg-6 text-center">
                    <img
                        src="images/education.svg"
                        alt="Learn about investing"
                        className="img-fluid"
                    />
                </div>

                {/* Right - Content */}
                <div className="col-lg-6 mt-5 mt-lg-0">

                    <h1 className="display-6 fw-semibold mb-4">
                        Learn before you invest
                    </h1>

                    <p className="text-muted lh-lg mb-3">
                        Understand the market with simple, practical
                        resources designed for everyone — from your first
                        investment to more advanced strategies.
                    </p>

                    <a
                        href="#"
                        className="text-decoration-none"
                    >
                        Explore learning resources
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </a>


                    {/* Community */}
                    <div className="mt-5">

                        <p className="text-muted lh-lg mb-3">
                            Connect with other investors, discuss market
                            trends, share ideas, and get answers to questions
                            from an active investing community.
                        </p>

                        <a
                            href="#"
                            className="text-decoration-none"
                        >
                            Join the community
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Education;