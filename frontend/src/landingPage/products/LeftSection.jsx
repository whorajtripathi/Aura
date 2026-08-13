function LeftSection({
    imageURL,
    productName,
    productTag,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <section className="container my-5 py-5">
            <div className="row align-items-center g-5">

                {/* Image */}
                <div className="col-lg-6 text-center">
                    <img
                        src={imageURL}
                        alt={productName}
                        className="img-fluid product-image"
                    />
                </div>

                {/* Content */}
                <div className="col-lg-6">

                    <p className="text-uppercase text-primary fw-semibold small mb-2">
                        {productTag}
                    </p>

                    <h1 className="display-6 fw-semibold mb-3">
                        {productName}
                    </h1>

                    <p className="text-muted fs-5 lh-lg mb-4">
                        {productDescription}
                    </p>

                    <div className="mb-4">

                        <a
                            href={tryDemo}
                            className="text-decoration-none me-4"
                        >
                            Try it out
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                        <a
                            href={learnMore}
                            className="text-decoration-none"
                        >
                            Learn more
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </a>

                    </div>

                    {/* App badges only if provided */}
                    {(googlePlay || appStore) && (
                        <div className="d-flex align-items-center gap-3 mt-4">

                            {googlePlay && (
                                <a href={googlePlay}>
                                    <img
                                        src="images/googlePlayBadge.svg"
                                        alt="Get it on Google Play"
                                        style={{ height: "42px" }}
                                    />
                                </a>
                            )}

                            {appStore && (
                                <a href={appStore}>
                                    <img
                                        src="images/appstoreBadge.svg"
                                        alt="Download on the App Store"
                                        style={{ height: "42px" }}
                                    />
                                </a>
                            )}

                        </div>
                    )}

                </div>

            </div>
        </section>
    );
}

export default LeftSection;