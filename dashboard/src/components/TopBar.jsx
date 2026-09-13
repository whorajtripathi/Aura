// import axios from "axios";
// import Menu from "./Menu";



// const TopBar = () => {
//   return (
//     <div className="topbar-container">
//       <div className="indices-container">
//         <div className="nifty">
//           <p className="index">NIFTY 50</p>
//           <p className="index-points">{100.2} </p>
//           <p className="percent"> </p>
//         </div>
//         <div className="sensex">
//           <p className="index">SENSEX</p>
//           <p className="index-points">{100.2}</p>
//           <p className="percent"></p>
//         </div>
//       </div>

//       <Menu />
//     </div>
//   );
// };

// export default TopBar;


import { useNavigate } from "react-router-dom";

const TopBar = () => {

  const navigate = useNavigate();

  return (
    <header className="aura-topbar">

      {/* Market Indicators */}
      <div className="aura-market-indicators">

        <div className="aura-market-item">
          <div>
            <span className="aura-market-name">
              NIFTY 50
            </span>

            <span className="aura-market-value">
              100.2
            </span>
          </div>

          <span className="aura-market-change aura-positive">
            +0.42%
          </span>
        </div>

        <div className="aura-market-divider"></div>

        <div className="aura-market-item">
          <div>
            <span className="aura-market-name">
              SENSEX
            </span>

            <span className="aura-market-value">
              100.2
            </span>
          </div>

          <span className="aura-market-change aura-positive">
            +0.31%
          </span>
        </div>

      </div>


      {/* Right Controls */}
      <div className="aura-topbar-actions">

        {/* Search */}
        <div className="aura-search">
          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            placeholder="Search stocks, orders..."
          />

          <span className="aura-search-shortcut">
            Ctrl K
          </span>
        </div>


        {/* Notification */}
        <button
          className="aura-icon-button"
          type="button"
          aria-label="Notifications"
        >
          <i className="fa-solid fa-bell"></i>
          <span className="aura-notification-dot"></span>
        </button>


        {/* Profile */}
        <button
          className="aura-topbar-profile"
          type="button"
          onClick={() => navigate("/")}
        >
          <span className="aura-profile-avatar">
            AU
          </span>

          <span className="aura-profile-name">
            USERID
          </span>

          <i className="fa-solid fa-chevron-down"></i>
        </button>

      </div>

    </header>
  );
};

export default TopBar;