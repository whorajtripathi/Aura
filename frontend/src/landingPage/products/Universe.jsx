import "./products.css";

function Universe() {
  const ecosystem = [
    {
      icon: "fa-solid fa-chart-pie",
      title: "Aura Analytics",
      description:
        "Understand your portfolio with meaningful insights, allocation views, and performance analysis.",
    },
    {
      icon: "fa-solid fa-landmark",
      title: "Aura Bonds",
      description:
        "Explore fixed-income opportunities and keep your investments organized in one place.",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Aura Options",
      description:
        "A focused workspace for exploring options, market movements, and trading opportunities.",
    },
    {
      icon: "fa-solid fa-code-branch",
      title: "Aura Strategy",
      description:
        "Turn your trading ideas into structured strategies and evaluate them with greater clarity.",
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "Aura Insights",
      description:
        "Bring market information, portfolio context, and useful signals together.",
    },
    {
      icon: "fa-solid fa-shield-halved",
      title: "Aura Protect",
      description:
        "Keep risk, security, and responsible investing at the center of your financial journey.",
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-glow"></div>

      <div className="container">
        <div className="ecosystem-heading">
          <div className="products-eyebrow">
            <span className="eyebrow-line"></span>
            AURA ECOSYSTEM
          </div>

          <h2>
            One platform.
            <br />
            <span>Multiple possibilities.</span>
          </h2>

          <p>
            Aura brings different parts of your investing journey together
            so you can move from discovering opportunities to understanding
            and managing them with less friction.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystem.map((item, index) => (
            <div className="ecosystem-card" key={item.title}>
              <div className="ecosystem-card-top">
                <span className="ecosystem-index">
                  0{index + 1}
                </span>

                <div className="ecosystem-icon">
                  <i className={item.icon}></i>
                </div>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="ecosystem-arrow">
                <i className="fa-solid fa-arrow-up-right"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="ecosystem-bottom">
          <div>
            <span>BUILT AS ONE</span>
            <p>
              Different tools. One consistent Aura experience.
            </p>
          </div>

          <div className="ecosystem-line"></div>

          <div className="ecosystem-bottom-icon">
            <i className="fa-solid fa-infinity"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Universe;