import "./products.css";

function RightSection({
  imageURL,
  productName,
  productTag,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  number,
}) {
  return (
    <section className="product-section product-section-reverse">
      <div className="container">
        <div className="product-section-inner">
          <div className="product-content">
            <div className="product-number">{number}</div>

            <div className="product-tag">{productTag}</div>

            <h2>{productName}</h2>

            <p className="product-description">
              {productDescription}
            </p>

            <div className="product-actions">
              <a href={tryDemo} className="product-primary-btn">
                Try it
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a href={learnMore} className="product-secondary-btn">
                Learn more
              </a>
            </div>

            {(googlePlay !== "#" || appStore !== "#") && (
              <div className="app-badges">
                {googlePlay !== "#" && (
                  <a href={googlePlay}>
                    <img
                      src="/images/googlePlayBadge.png"
                      alt="Get it on Google Play"
                    />
                  </a>
                )}

                {appStore !== "#" && (
                  <a href={appStore}>
                    <img
                      src="/images/appStoreBadge.png"
                      alt="Download on the App Store"
                    />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="product-image-wrapper">
            <div className="product-image-glow"></div>

            <div className="product-image-card">
              <img src={`/${imageURL}`} alt={productName} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;