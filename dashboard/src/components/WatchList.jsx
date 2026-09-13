// import { Tooltip, Grow } from "@mui/material";
// import { watchlist } from "../data/data";
// import { useContext, useState } from "react";

// import {
//   KeyboardArrowDown,
//   KeyboardArrowUp,
//   BarChartOutlined,
//   MoreHoriz,
// } from "@mui/icons-material";

// import GeneralContext from "./GeneralContext";
// // import { DoughNut } from "./DoughNut";

// const WatchList = () => {
//   // Stock names for Doughnut chart
//   const labels = watchlist.map((stock) => stock.name);

//   // Data for Doughnut chart
//   const data = {
//     labels: labels,

//     datasets: [
//       {
//         label: "Price",

//         data: watchlist.map((stock) => stock.price),

//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//           "rgba(255, 99, 71, 0.2)",
//           "rgba(46, 204, 113, 0.2)",
//           "rgba(155, 89, 182, 0.2)",
//           "rgba(52, 152, 219, 0.2)",
//         ],

//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//           "rgba(255, 99, 71, 1)",
//           "rgba(46, 204, 113, 1)",
//           "rgba(155, 89, 182, 1)",
//           "rgba(52, 152, 219, 1)",
//         ],

//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className="watchlist-container">

//       <div className="search-container">
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
//           className="search"
//         />

//         <span className="counts">
//           {watchlist.length} / 50
//         </span>
//       </div>

//       <ul className="list">
//         {watchlist.map((stock, index) => {
//           return (
//             <WatchListItem
//               stock={stock}
//               key={index}
//             />
//           );
//         })}
//       </ul>

//       <DoughNut data={data} />

//     </div>
//   );
// };

// const WatchListItem = ({ stock }) => {

//   const [showWatchListActions, setShowWatchListActions] =
//     useState(false);

//   const handleMouseEnter = () => {
//     setShowWatchListActions(true);
//   };

//   const handleMouseLeave = () => {
//     setShowWatchListActions(false);
//   };

//   return (
//     <li
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >

//       <div className="item">

//         <p className={stock.isDown ? "down" : "up"}>
//           {stock.name}
//         </p>

//         <div className="itemInfo">

//           <span className="percent">
//             {stock.percent}
//           </span>

//           {stock.isDown ? (
//             <KeyboardArrowDown className="down" />
//           ) : (
//             <KeyboardArrowUp className="up" />
//           )}

//         </div>

//         <p className="price">
//           {stock.price}
//         </p>

//       </div>

//       {showWatchListActions && (
//         <WatchListAction
//           stockName={stock.name}
//         />
//       )}

//     </li>
//   );
// };

// const WatchListAction = ({ stockName }) => {

//   const { openBuyWindow } = useContext(GeneralContext);

//   const handleBuy = () => {
//     console.log("Buy clicked");
//     console.log("Stock Name:", stockName);

//     openBuyWindow(stockName);
//   };

//   return (
//     <span className="actions">

//       <span>

//         <Tooltip
//           title="Buy (B)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button
//             className="buy"
//             onClick={handleBuy}
//           >
//             Buy
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="Sell (S)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="sell">
//             Sell
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="Analytics (A)"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="action">
//             <BarChartOutlined className="icon" />
//           </button>
//         </Tooltip>

//         <Tooltip
//           title="More"
//           placement="top"
//           arrow
//           TransitionComponent={Grow}
//         >
//           <button className="action">
//             <MoreHoriz className="icon" />
//           </button>
//         </Tooltip>

//       </span>

//     </span>
//   );
// };

// export default WatchList;

import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import { useContext, useState } from "react";

import GeneralContext from "./GeneralContext";
import { DoughNut } from "./DoughNut";

const WatchList = () => {
  const labels = watchlist.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(99, 102, 241, 0.18)",
          "rgba(139, 92, 246, 0.18)",
          "rgba(59, 130, 246, 0.18)",
          "rgba(34, 197, 94, 0.18)",
          "rgba(168, 85, 247, 0.18)",
          "rgba(14, 165, 233, 0.18)",
          "rgba(236, 72, 153, 0.18)",
          "rgba(20, 184, 166, 0.18)",
          "rgba(124, 58, 237, 0.18)",
          "rgba(6, 182, 212, 0.18)",
        ],
        borderColor: [
          "#6366f1",
          "#8b5cf6",
          "#3b82f6",
          "#22c55e",
          "#a855f7",
          "#0ea5e9",
          "#ec4899",
          "#14b8a6",
          "#7c3aed",
          "#06b6d4",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">

      {/* Search */}

      <div className="search-container">
        <div className="watchlist-search-box">
          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search stocks, indices..."
            className="search"
          />

          <span className="counts">
            {watchlist.length} / 50
          </span>
        </div>
      </div>


      {/* Watchlist */}

      <div className="watchlist-section-header">
        <span>Watchlist</span>

        <i className="fa-solid fa-ellipsis"></i>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
          />
        ))}
      </ul>


      {/* Chart */}

      <div className="watchlist-chart-card">

        <div className="watchlist-chart-header">
          <div>
            <span className="watchlist-chart-eyebrow">
              MARKET OVERVIEW
            </span>

            <h4>Watchlist distribution</h4>
          </div>

          <i className="fa-solid fa-chart-pie"></i>
        </div>

        <div className="watchlist-chart">
          <DoughNut data={data} />
        </div>

      </div>

    </div>
  );
};


const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] =
    useState(false);

  const handleMouseEnter = () => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchListActions(false);
  };

  return (
    <li
      className="watchlist-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="item">

        {/* Stock */}

        <div className="stock-name-wrapper">
          <span
            className={`stock-indicator ${
              stock.isDown ? "down-bg" : "up-bg"
            }`}
          ></span>

          <p className={stock.isDown ? "down" : "up"}>
            {stock.name}
          </p>
        </div>


        {/* Percentage */}

        <div className="itemInfo">

          <span className={stock.isDown ? "down" : "up"}>
            {stock.percent}
          </span>

          {stock.isDown ? (
            <i className="fa-solid fa-caret-down down"></i>
          ) : (
            <i className="fa-solid fa-caret-up up"></i>
          )}

        </div>


        {/* Price */}

        <p className="price">
          {stock.price}
        </p>

      </div>


      {/* Hover Actions */}

      {showWatchListActions && (
        <WatchListAction
          stockName={stock.name}
        />
      )}

    </li>
  );
};


const WatchListAction = ({ stockName }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuy = () => {
    openBuyWindow(stockName);
  };

  return (
    <div className="actions">

      <div className="watchlist-action-buttons">

        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="buy"
            onClick={handleBuy}
          >
            <i className="fa-solid fa-plus"></i>
            Buy
          </button>
        </Tooltip>


        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">
            <i className="fa-solid fa-minus"></i>
            Sell
          </button>
        </Tooltip>


        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <i className="fa-solid fa-chart-line"></i>
          </button>
        </Tooltip>


        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
        </Tooltip>

      </div>

    </div>
  );
};

export default WatchList;