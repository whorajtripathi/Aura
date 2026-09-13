// import { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Menu() {

//     const [selectedMenu, setSelectedMenu] = useState(0);
//     const [dropUserAccount, setDropUserAccount] = useState(false);

//     const handleMenuClick = (index) => {
//         setSelectedMenu(index);
//     };

//     const handleUserAccount = () => {
//         setDropUserAccount(!dropUserAccount);
//     };


//     const handleLogout = async () => {
//         try {
//             const { data } = await axios.post(
//                 "http://localhost:3002/logout",
//                 {},
//                 {
//                     withCredentials: true,
//                 }
//             );

//             if (data.success) {
//                 window.location.href = "http://localhost:5173/login";
//             }
//         } catch (error) {
//             console.error("LOGOUT ERROR:", error);
//         }
//     };

//     const menuClass = "menu";
//     const activeMenuClass = "menu selected";

//     return (
//         <div className="menu-container">

//             <img
//                 src="../images/AuraLogo.png"
//                 alt="Aura"
//                 style={{ width: "50px" }}
//             />

//             <div className="menus">

//                 <ul>

//                     <li>
//                         <Link
//                             to="/"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(0)}
//                         >
//                             Dashboard
//                         </Link>
//                     </li>

//                     <li>
//                         <Link
//                             to="/orders"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(1)}
//                         >
//                             Orders
//                         </Link>
//                     </li>

//                     <li>
//                         <Link
//                             to="/holdings"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(2)}
//                         >
//                             Holdings
//                         </Link>
//                     </li>

//                     <li>
//                         <Link
//                             to="/positions"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(3)}
//                         >
//                             Positions
//                         </Link>
//                     </li>

//                     <li>
//                         <Link
//                             to="/funds"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(4)}
//                         >
//                             Funds
//                         </Link>
//                     </li>

//                     <li>
//                         <Link
//                             to="/apps"
//                             style={{ textDecoration: "none" }}
//                             onClick={() => handleMenuClick(5)}
//                         >
//                             Apps
//                         </Link>
//                     </li>

//                     <li>
//                         <button onClick={handleLogout}>
//                             Logout
//                         </button>
//                     </li>

//                 </ul>

//                 <hr />

//                 <div className="profile" onClick={() => handleUserAccount}>

//                     <div className="avatar">
//                         AU
//                     </div>

//                     <p className="username">
//                         USERID
//                     </p>

//                 </div>


//             </div>

//         </div>
//     );
// }

// export default Menu;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Menu() {
  const [collapsed, setCollapsed] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "https://aura-vcj1.onrender.com/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (data.success) {
        window.location.href = "https://aura-henna-kappa.vercel.app/login";
      }
    } catch (error) {
      console.error("LOGOUT ERROR:", error);
    }
  };

  const navigationItems = [
    {
      path: "/",
      label: "Dashboard",
      icon: "fa-solid fa-house",
    },
    {
      path: "/orders",
      label: "Orders",
      icon: "fa-solid fa-receipt",
    },
    {
      path: "/holdings",
      label: "Holdings",
      icon: "fa-solid fa-briefcase",
    },
    {
      path: "/positions",
      label: "Positions",
      icon: "fa-solid fa-chart-line",
    },
    {
      path: "/funds",
      label: "Funds",
      icon: "fa-solid fa-wallet",
    },
  ];

  return (
    <aside
      className={`aura-sidebar ${
        collapsed ? "aura-sidebar-collapsed" : ""
      }`}
    >

      {/* Brand */}
      <div className="aura-sidebar-brand">

        <img
          src="/images/AuraLogo.png"
          alt="Aura"
          className="aura-sidebar-logo"
        />

        <button
          className="aura-sidebar-toggle"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
        >
          <i
            className={`fa-solid ${
              collapsed
                ? "fa-angles-right"
                : "fa-angles-left"
            }`}
          ></i>
        </button>

      </div>


      {/* Navigation */}
      <nav className="aura-sidebar-navigation">

        <div className="aura-sidebar-label">
          MENU
        </div>

        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `aura-sidebar-link ${
                isActive ? "aura-sidebar-link-active" : ""
              }`
            }
          >
            <span className="aura-sidebar-icon">
              <i className={item.icon}></i>
            </span>

            <span className="aura-sidebar-text">
              {item.label}
            </span>
          </NavLink>
        ))}


        <div className="aura-sidebar-separator"></div>


        <div className="aura-sidebar-label">
          MORE
        </div>

        <NavLink
          to="/apps"
          className={({ isActive }) =>
            `aura-sidebar-link ${
              isActive ? "aura-sidebar-link-active" : ""
            }`
          }
        >
          <span className="aura-sidebar-icon">
            <i className="fa-solid fa-grid-2"></i>
          </span>

          <span className="aura-sidebar-text">
            Apps
          </span>
        </NavLink>

      </nav>


      {/* Bottom Section */}
      <div className="aura-sidebar-bottom">

        {/* Profile */}
        <div className="aura-profile-wrapper">

          {profileOpen && !collapsed && (
            <div className="aura-profile-dropdown">

              <div className="aura-profile-dropdown-header">
                <span className="aura-profile-avatar aura-profile-avatar-large">
                  AU
                </span>

                <div>
                  <strong>USERID</strong>
                  <small>Active account</small>
                </div>
              </div>

              <div className="aura-profile-dropdown-divider"></div>

              <button type="button">
                <i className="fa-regular fa-user"></i>
                Profile
              </button>

              <button type="button">
                <i className="fa-solid fa-gear"></i>
                Settings
              </button>

              <button type="button">
                <i className="fa-solid fa-shield-halved"></i>
                Security
              </button>

            </div>
          )}

          <button
            className="aura-sidebar-profile"
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <span className="aura-profile-avatar">
              AU
            </span>

            <span className="aura-profile-details">
              <strong>USERID</strong>
              <small>Active account</small>
            </span>

            {!collapsed && (
              <i className="fa-solid fa-ellipsis"></i>
            )}
          </button>

        </div>


        {/* Logout */}
        <button
          className="aura-logout-button"
          type="button"
          onClick={handleLogout}
        >
          <span className="aura-sidebar-icon">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </span>

          <span className="aura-sidebar-text">
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Menu;