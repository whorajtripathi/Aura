import React from "react";
import AuraLogo from "../assets/Aura.png";

const Apps = () => {
  const apps = [
    {
      icon: "fa-solid fa-chart-pie",
      title: "Aura Analytics",
      description:
        "Understand your portfolio with clear and meaningful insights.",
    },
    {
      icon: "fa-solid fa-book-open",
      title: "Aura Learn",
      description:
        "Build your investing knowledge with simple, practical resources.",
    },
    {
      icon: "fa-solid fa-link",
      title: "Aura Connect",
      description:
        "Connect your investing experience with the tools you use.",
    },
  ];

  return (
    <div className="apps-page">

      {/* Header */}
      <div className="apps-heading">
        <span className="apps-eyebrow">
          <i className="fa-solid fa-grid-2"></i>
          AURA ECOSYSTEM
        </span>

        <h2>Apps</h2>

        <p>
          Extend your Aura experience with connected tools and services.
        </p>
      </div>


      {/* Aura Banner */}
      <div className="apps-banner">

        <div className="apps-banner-icon">
          <img src={AuraLogo} alt="Aura" />
        </div>

        <div>
          <h3>Build your Aura workspace</h3>

          <p>
            Explore tools designed to make your investing experience
            simpler and more complete.
          </p>
        </div>

      </div>


      {/* Apps Grid */}
      <div className="apps-grid">

        {apps.map((app, index) => (
          <div className="app-card" key={index}>

            <div className="app-card-icon">
              <i className={app.icon}></i>
            </div>

            <h3>{app.title}</h3>

            <p>{app.description}</p>

            <button className="app-explore">
              Explore
              <i className="fa-solid fa-arrow-right"></i>
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Apps;