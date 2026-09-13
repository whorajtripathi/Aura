// import React from "react";

// const Summary = () => {
//   return (
//     <>
//       <div className="username">
//         <h6>Hi, User!</h6>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Equity</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3>3.74k</h3>
//             <p>Margin available</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Margins used <span>0</span>{" "}
//             </p>
//             <p>
//               Opening balance <span>3.74k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>

//       <div className="section">
//         <span>
//           <p>Holdings (13)</p>
//         </span>

//         <div className="data">
//           <div className="first">
//             <h3 className="profit">
//               1.55k <small>+5.20%</small>{" "}
//             </h3>
//             <p>P&L</p>
//           </div>
//           <hr />

//           <div className="second">
//             <p>
//               Current Value <span>31.43k</span>{" "}
//             </p>
//             <p>
//               Investment <span>29.88k</span>{" "}
//             </p>
//           </div>
//         </div>
//         <hr className="divider" />
//       </div>
//     </>
//   );
// };

// export default Summary;

import React from "react";
import { useNavigate } from "react-router-dom";
import { VerticalGraph } from "./VerticalGraph";
import { DoughNut } from "./DoughNut";

const Summary = () => {
  const navigate = useNavigate();

  const portfolioData = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Today",
    ],

    datasets: [
      {
        label: "Portfolio Value",

        data: [
          29880,
          30120,
          30450,
          30280,
          30950,
          31430,
        ],

        borderWidth: 2,

        pointRadius: 0,

        pointHoverRadius: 5,

        tension: 0.4,

        fill: true,

        backgroundColor: "rgba(99, 102, 241, 0.08)",

        borderColor: "#6366f1",
      },
    ],
  };

  const allocationData = {
    labels: [
      "Invested",
      "P&L",
    ],

    datasets: [
      {
        data: [
          29880,
          1550,
        ],

        borderWidth: 0,

        hoverOffset: 6,

        backgroundColor: [
          "#6366f1",
          "#8b5cf6",
        ],
      },
    ],
  };

  return (
    <div className="aura-summary">

      {/* Header */}
      <section className="aura-summary-header">
        <div>
          <span className="aura-summary-eyebrow">
            PORTFOLIO OVERVIEW
          </span>

          <h1>
            Good evening, <span>User</span>
          </h1>

          <p>
            Here's a quick look at your portfolio and today's activity.
          </p>
        </div>

        <div className="aura-summary-date">
          <i className="fa-regular fa-calendar"></i>
          <span>Portfolio</span>
        </div>
      </section>


      {/* Portfolio Metrics */}
      <section className="aura-metrics-grid">

        <div className="aura-metric-card">
          <div className="aura-metric-top">
            <span>PORTFOLIO VALUE</span>

            <div className="aura-metric-icon">
              <i className="fa-solid fa-chart-pie"></i>
            </div>
          </div>

          <h2>₹31.43K</h2>

          <p>
            Current portfolio value
          </p>
        </div>


        <div className="aura-metric-card">
          <div className="aura-metric-top">
            <span>INVESTED</span>

            <div className="aura-metric-icon">
              <i className="fa-solid fa-coins"></i>
            </div>
          </div>

          <h2>₹29.88K</h2>

          <p>
            Total amount invested
          </p>
        </div>


        <div className="aura-metric-card aura-profit-card">
          <div className="aura-metric-top">
            <span>TOTAL P&L</span>

            <div className="aura-metric-icon">
              <i className="fa-solid fa-arrow-trend-up"></i>
            </div>
          </div>

          <h2>
            +₹1.55K
          </h2>

          <p>
            <span className="aura-positive">+5.20%</span>
            {" "}overall return
          </p>
        </div>


        <div className="aura-metric-card">
          <div className="aura-metric-top">
            <span>HOLDINGS</span>

            <div className="aura-metric-icon">
              <i className="fa-solid fa-briefcase"></i>
            </div>
          </div>

          <h2>13</h2>

          <p>
            Active investments
          </p>
        </div>

      </section>


      {/* Charts */}
      <section className="aura-summary-charts">

        <div className="aura-chart-card aura-performance-card">

          <div className="aura-chart-header">
            <div>
              <span className="aura-card-eyebrow">
                PORTFOLIO
              </span>

              <h3>
                Current portfolio value
              </h3>
            </div>

            <button
              type="button"
              onClick={() => navigate("/holdings")}
            >
              View holdings
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>

          <div className="aura-chart-wrapper">
            <VerticalGraph data={portfolioData} />
          </div>

        </div>


        <div className="aura-chart-card aura-allocation-card">

          <div className="aura-chart-header">
            <div>
              <span className="aura-card-eyebrow">
                ALLOCATION
              </span>

              <h3>
                Portfolio allocation
              </h3>
            </div>
          </div>

          <div className="aura-doughnut-wrapper">
            <DoughNut data={allocationData} />
          </div>

          <div className="aura-allocation-legend">

            <div>
              <span className="aura-legend-dot aura-invested-dot"></span>

              <span>
                Invested
              </span>

              <strong>
                ₹29.88K
              </strong>
            </div>

            <div>
              <span className="aura-legend-dot aura-available-dot"></span>

              <span>
                P&L
              </span>

              <strong>
                ₹1.55K
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* Quick Actions */}
      <section className="aura-quick-section">

        <div className="aura-section-heading">
          <div>
            <span className="aura-card-eyebrow">
              ACTIONS
            </span>

            <h3>
              Quick actions
            </h3>
          </div>
        </div>


        <div className="aura-actions-grid">

          <button
            type="button"
            onClick={() => navigate("/funds")}
            className="aura-action-card"
          >
            <span className="aura-action-icon">
              <i className="fa-solid fa-plus"></i>
            </span>

            <span>
              <strong>Add funds</strong>
              <small>Add money to your account</small>
            </span>

            <i className="fa-solid fa-arrow-right aura-action-arrow"></i>
          </button>


          <button
            type="button"
            className="aura-action-card"
          >
            <span className="aura-action-icon">
              <i className="fa-solid fa-arrow-up"></i>
            </span>

            <span>
              <strong>Buy stocks</strong>
              <small>Place a new order</small>
            </span>

            <i className="fa-solid fa-arrow-right aura-action-arrow"></i>
          </button>


          <button
            type="button"
            className="aura-action-card"
          >
            <span className="aura-action-icon">
              <i className="fa-solid fa-arrow-down"></i>
            </span>

            <span>
              <strong>Sell stocks</strong>
              <small>Manage your positions</small>
            </span>

            <i className="fa-solid fa-arrow-right aura-action-arrow"></i>
          </button>


          <button
            type="button"
            onClick={() => navigate("/orders")}
            className="aura-action-card"
          >
            <span className="aura-action-icon">
              <i className="fa-solid fa-list"></i>
            </span>

            <span>
              <strong>View orders</strong>
              <small>Check your order history</small>
            </span>

            <i className="fa-solid fa-arrow-right aura-action-arrow"></i>
          </button>

        </div>

      </section>


      {/* Aura Insight */}
      <section className="aura-insight-card">

        <div className="aura-insight-glow"></div>

        <div className="aura-insight-icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>

        <div className="aura-insight-content">

          <span>
            AURA INSIGHT
          </span>

          <h3>
            Your portfolio is currently in positive territory.
          </h3>

          <p>
            Your holdings are showing a total P&L of
            <strong> ₹1.55K (+5.20%)</strong>.
            You currently have 13 holdings with ₹29.88K invested.
          </p>

        </div>

        <div className="aura-insight-badge">
          <i className="fa-solid fa-arrow-trend-up"></i>
          Positive
        </div>

      </section>

    </div>
  );
};

export default Summary;