// import React, { useState, useContext } from "react";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const { closeBuyWindow } = useContext(GeneralContext);

//   const handleBuyClick = async () => {
//     try {
//       await axios.post("http://localhost:3002/newOrder", {
//         name: uid,
//         qty: stockQuantity,
//         price: stockPrice,
//         mode: "BUY",
//       });

//       closeBuyWindow();
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   const handleCancelClick = () => {
//     console.log("Cancel clicked");
//     closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>

//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               value={stockQuantity}
//               onChange={(e) => setStockQuantity(e.target.value)}
//             />
//           </fieldset>

//           <fieldset>
//             <legend>Price</legend>

//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               value={stockPrice}
//               onChange={(e) => setStockPrice(e.target.value)}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>

//         <div>
//           <button
//             className="btn btn-blue"
//             onClick={handleBuyClick}
//           >
//             Buy
//           </button>

//           <button
//             className="btn btn-grey"
//             onClick={handleCancelClick}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;

import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://aura-vcj1.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="buy-window-container" id="buy-window">

      {/* Header */}

      <div className="buy-window-header">
        <div>
          <span className="buy-window-eyebrow">
            <i className="fa-solid fa-arrow-trend-up"></i>
            BUY ORDER
          </span>

          <h2>{uid}</h2>

          <p>Place a new order for this instrument.</p>
        </div>

        <button
          className="buy-window-close"
          onClick={handleCancelClick}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>


      {/* Order Type */}

      <div className="buy-order-type">
        <span>ORDER TYPE</span>

        <div className="buy-order-type-value">
          <i className="fa-solid fa-bolt"></i>
          Regular order
        </div>
      </div>


      {/* Inputs */}

      <div className="buy-inputs">

        <div className="buy-field">

          <label htmlFor="qty">
            Quantity
          </label>

          <div className="buy-input-wrapper">

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />

            <span>Qty</span>

          </div>

        </div>


        <div className="buy-field">

          <label htmlFor="price">
            Price
          </label>

          <div className="buy-input-wrapper">

            <span className="currency">₹</span>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />

          </div>

        </div>

      </div>


      {/* Summary */}

      <div className="buy-order-summary">

        <div className="buy-summary-row">
          <span>Instrument</span>
          <strong>{uid}</strong>
        </div>

        <div className="buy-summary-row">
          <span>Quantity</span>
          <strong>{stockQuantity}</strong>
        </div>

        <div className="buy-summary-row">
          <span>Price</span>
          <strong>₹{Number(stockPrice).toFixed(2)}</strong>
        </div>

      </div>


      {/* Footer */}

      <div className="buy-window-footer">

        <div className="margin-info">
          <span>Margin required</span>
          <strong>₹140.65</strong>
        </div>

        <div className="buy-window-buttons">

          <button
            className="buy-confirm-btn"
            onClick={handleBuyClick}
          >
            <i className="fa-solid fa-check"></i>
            Buy
          </button>

          <button
            className="buy-cancel-btn"
            onClick={handleCancelClick}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default BuyActionWindow;