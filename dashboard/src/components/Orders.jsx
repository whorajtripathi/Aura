// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;
    

import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders-page">

      <div className="orders-heading">
        <span className="orders-eyebrow">
          <i className="fa-solid fa-receipt"></i>
          ACTIVITY
        </span>

        <h2>Orders</h2>

        <p>
          Keep track of your orders and trading activity.
        </p>
      </div>

      <div className="orders-empty-card">

        <div className="orders-icon">
          <i className="fa-solid fa-receipt"></i>
        </div>

        <h3>No orders yet</h3>

        <p>
          You haven't placed any orders today.
          <br />
          Your recent orders will appear here.
        </p>

        <Link to="/" className="orders-start-btn">
          Get started
          <i className="fa-solid fa-arrow-right"></i>
        </Link>

      </div>

    </div>
  );
};

export default Orders;