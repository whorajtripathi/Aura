// // import { holdings } from "../data/data";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";

// const Holdings = () => {

//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       setAllHoldings(res.data);
//     })
//   }, []);


//   const labels = allHoldings.map((stock) => stock.name);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Holdings Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//             const currVal = stock.price * stock.qty;
//             const isProfit = currVal - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";


//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{currVal.toFixed(2)}</td>
//                 <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             )
//           })}

//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>


//       <VerticalGraph data={data} />
//     </>
//   );
// };

// export default Holdings;


import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://aura-vcj1.onrender.com/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("HOLDINGS ERROR:", error);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Holdings Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(99, 102, 241, 0.45)",
        borderColor: "#6366f1",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="holdings-page">

      {/* Header */}

      <div className="holdings-heading">
        <div>
          <span className="holdings-eyebrow">
            <i className="fa-solid fa-briefcase"></i>
            PORTFOLIO
          </span>

          <h2>Holdings ({allHoldings.length})</h2>

          <p>View and manage your current investments.</p>
        </div>
      </div>


      {/* Holdings Table */}

      <div className="holdings-table-card">

        <div className="holdings-table-header">
          <div>
            <h3>Your holdings</h3>
            <span>Current portfolio positions</span>
          </div>
        </div>

        <div className="order-table holdings-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>

            <tbody>

              {allHoldings.map((stock, index) => {

                const currVal = stock.price * stock.qty;

                const pnl =
                  currVal - stock.avg * stock.qty;

                const isProfit = pnl >= 0;

                const profClass = isProfit
                  ? "profit"
                  : "loss";

                const dayClass = stock.isLoss
                  ? "loss"
                  : "profit";

                return (
                  <tr key={index}>

                    <td>
                      <div className="holding-instrument">

                        <div className="holding-symbol">
                          {stock.name.substring(0, 2)}
                        </div>

                        <div>
                          <strong>{stock.name}</strong>
                          <span>NSE</span>
                        </div>

                      </div>
                    </td>

                    <td>{stock.qty}</td>

                    <td>
                      ₹{stock.avg.toFixed(2)}
                    </td>

                    <td className="holding-ltp">
                      ₹{stock.price.toFixed(2)}
                    </td>

                    <td>
                      ₹{currVal.toFixed(2)}
                    </td>

                    <td className={profClass}>
                      {isProfit ? "+" : ""}
                      ₹{pnl.toFixed(2)}
                    </td>

                    <td className={profClass}>
                      {stock.net}
                    </td>

                    <td className={dayClass}>
                      {stock.day}
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>
      </div>


      {/* Portfolio Summary */}

      <div className="holdings-summary">

        <div className="holdings-summary-card">

          <span>Total investment</span>

          <h4>
            29,875.<small>55</small>
          </h4>

        </div>


        <div className="holdings-summary-card">

          <span>Current value</span>

          <h4>
            31,428.<small>95</small>
          </h4>

        </div>


        <div className="holdings-summary-card">

          <span>Total P&L</span>

          <h4 className="profit">
            +1,553.40
          </h4>

          <small className="profit">
            +5.20%
          </small>

        </div>

      </div>


      {/* Chart */}

      <div className="holdings-chart-card">

        <div className="holdings-chart-header">

          <div>
            <span className="holdings-eyebrow">
              PERFORMANCE
            </span>

            <h3>Holdings overview</h3>
          </div>

          <span className="chart-period">
            Current
          </span>

        </div>

        <div className="holdings-chart">
          <VerticalGraph data={data} />
        </div>

      </div>

    </div>
  );
};

export default Holdings;