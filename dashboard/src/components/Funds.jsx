// import React from "react";
// import { Link } from "react-router-dom";

// const Funds = () => {
//   return (
//     <>
//       <div className="funds">
//         <p>Instant, zero-cost fund transfers with UPI </p>
//         <Link className="btn btn-green">Add funds</Link>
//         <Link className="btn btn-blue">Withdraw</Link>
//       </div>

//       <div className="row">
//         <div className="col">
//           <span>
//             <p>Equity</p>
//           </span>

//           <div className="table">
//             <div className="data">
//               <p>Available margin</p>
//               <p className="imp colored">4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Used margin</p>
//               <p className="imp">3,757.30</p>
//             </div>
//             <div className="data">
//               <p>Available cash</p>
//               <p className="imp">4,043.10</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>4,043.10</p>
//             </div>
//             <div className="data">
//               <p>Opening Balance</p>
//               <p>3736.40</p>
//             </div>
//             <div className="data">
//               <p>Payin</p>
//               <p>4064.00</p>
//             </div>
//             <div className="data">
//               <p>SPAN</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Delivery margin</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Exposure</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Options premium</p>
//               <p>0.00</p>
//             </div>
//             <hr />
//             <div className="data">
//               <p>Collateral (Liquid funds)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Collateral (Equity)</p>
//               <p>0.00</p>
//             </div>
//             <div className="data">
//               <p>Total Collateral</p>
//               <p>0.00</p>
//             </div>
//           </div>
//         </div>

//         <div className="col">
//           <div className="commodity">
//             <p>You don't have a commodity account</p>
//             <Link className="btn btn-blue">Open Account</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Funds;


import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-page">

      {/* Header */}

      <div className="funds-heading">

        <div>
          <span className="funds-eyebrow">
            <i className="fa-solid fa-wallet"></i>
            ACCOUNT
          </span>

          <h2>Funds</h2>

          <p>
            Manage your available funds and account balance.
          </p>
        </div>

        <div className="funds-actions">
          <Link className="funds-add-btn">
            <i className="fa-solid fa-plus"></i>
            Add funds
          </Link>

          <Link className="funds-withdraw-btn">
            Withdraw
          </Link>
        </div>

      </div>


      {/* UPI message */}

      <div className="funds-upi-banner">

        <div className="funds-upi-icon">
          <i className="fa-solid fa-bolt"></i>
        </div>

        <div>
          <strong>Instant fund transfers</strong>

          <span>
            Zero-cost transfers with UPI
          </span>
        </div>

      </div>


      {/* Main content */}

      <div className="funds-grid">

        {/* Equity */}

        <div className="funds-card">

          <div className="funds-card-header">

            <div>
              <span className="funds-card-label">
                EQUITY
              </span>

              <h3>Available balance</h3>
            </div>

            <div className="funds-balance-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>

          </div>


          <div className="funds-main-balance">
            <span>Available margin</span>

            <strong>₹4,043.10</strong>
          </div>


          <div className="funds-details">

            <div className="funds-detail-row">
              <span>Used margin</span>
              <strong>₹3,757.30</strong>
            </div>

            <div className="funds-detail-row">
              <span>Available cash</span>
              <strong className="colored">
                ₹4,043.10
              </strong>
            </div>

          </div>


          <div className="funds-divider"></div>


          <div className="funds-details">

            <div className="funds-detail-row">
              <span>Opening balance</span>
              <strong>₹4,043.10</strong>
            </div>

            <div className="funds-detail-row">
              <span>Opening balance</span>
              <strong>₹3,736.40</strong>
            </div>

            <div className="funds-detail-row">
              <span>Payin</span>
              <strong>₹4,064.00</strong>
            </div>

            <div className="funds-detail-row">
              <span>SPAN</span>
              <strong>₹0.00</strong>
            </div>

            <div className="funds-detail-row">
              <span>Delivery margin</span>
              <strong>₹0.00</strong>
            </div>

            <div className="funds-detail-row">
              <span>Exposure</span>
              <strong>₹0.00</strong>
            </div>

            <div className="funds-detail-row">
              <span>Options premium</span>
              <strong>₹0.00</strong>
            </div>

          </div>


          <div className="funds-divider"></div>


          <div className="funds-details">

            <div className="funds-detail-row">
              <span>Collateral (Liquid funds)</span>
              <strong>₹0.00</strong>
            </div>

            <div className="funds-detail-row">
              <span>Collateral (Equity)</span>
              <strong>₹0.00</strong>
            </div>

            <div className="funds-detail-row total-row">
              <span>Total collateral</span>
              <strong>₹0.00</strong>
            </div>

          </div>

        </div>


        {/* Commodity */}

        <div className="commodity-card">

          <div className="commodity-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>

          <span className="funds-card-label">
            COMMODITY
          </span>

          <h3>
            No commodity account
          </h3>

          <p>
            You don't have a commodity account yet.
            Open one to access commodity trading.
          </p>

          <Link className="commodity-btn">
            Open Account
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Funds;