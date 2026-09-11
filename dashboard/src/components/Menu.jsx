import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Menu() {

    const [selectedMenu, setSelectedMenu] = useState(0);
    const [dropUserAccount, setDropUserAccount] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };

    const handleUserAccount = () => {
        setDropUserAccount(!dropUserAccount);
    };


    const handleLogout = async () => {
        try {
            const { data } = await axios.post(
                "http://localhost:3002/logout",
                {},
                {
                    withCredentials: true,
                }
            );

            if (data.success) {
                window.location.href = "http://localhost:5173/login";
            }
        } catch (error) {
            console.error("LOGOUT ERROR:", error);
        }
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return (
        <div className="menu-container">

            <img
                src="../images/AuraLogo.png"
                alt="Aura"
                style={{ width: "50px" }}
            />

            <div className="menus">

                <ul>

                    <li>
                        <Link
                            to="/"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(0)}
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/orders"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(1)}
                        >
                            Orders
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/holdings"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(2)}
                        >
                            Holdings
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/positions"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(3)}
                        >
                            Positions
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/funds"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(4)}
                        >
                            Funds
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/apps"
                            style={{ textDecoration: "none" }}
                            onClick={() => handleMenuClick(5)}
                        >
                            Apps
                        </Link>
                    </li>

                    <li>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </li>

                </ul>

                <hr />

                <div className="profile" onClick={() => handleUserAccount}>

                    <div className="avatar">
                        AU
                    </div>

                    <p className="username">
                        USERID
                    </p>

                </div>


            </div>

        </div>
    );
}

export default Menu;