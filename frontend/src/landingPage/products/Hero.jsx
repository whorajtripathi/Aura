import "./products.css";

function Hero() {
  return (
    <section className="products-hero">
      <div className="products-hero-glow"></div>

      <div className="container products-hero-inner">
        <div className="products-eyebrow">
          <span className="eyebrow-line"></span>
          AURA PLATFORM
        </div>

        <h1>
          Everything you need.
          <br />
          <span>One connected experience.</span>
        </h1>

        <p>
          Powerful tools for trading, investing, portfolio management,
          learning, and building — designed to work together.
        </p>

        <div className="products-hero-badges">
          <span>
            <i className="fa-solid fa-bolt"></i>
            Fast
          </span>

          <span>
            <i className="fa-solid fa-chart-line"></i>
            Insightful
          </span>

          <span>
            <i className="fa-solid fa-layer-group"></i>
            Connected
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;