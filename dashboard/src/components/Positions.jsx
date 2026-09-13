
// import { useState, useEffect } from "react";
// // import { positions } from "../data/data";
// import axios from "axios";

// const Positions = () => {

//   const [allPostions,setAllPostions]=useState([]);
  
//   useEffect(()=>{
//     axios.get("http://localhost:3002/allPositions").then((res)=>{
//       setAllPostions(res.data);
//     })
//   },[]);

//   return (
//     <>
//       <h3 className="title">Positions ({allPostions.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Product</th>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg.</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Chg.</th>
//           </tr>

//           {allPostions.map((stock, index) => {
//             const currVal = stock.price * stock.qty;
//             const isProfit = currVal - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";


//             return (
//               <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             )
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;


import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPostions, setAllPostions] = useState([]);

  useEffect(() => {
    axios
      .get("https://aura-vcj1.onrender.com/allPositions")
      .then((res) => {
        setAllPostions(res.data);
      })
      .catch((error) => {
        console.error("POSITIONS ERROR:", error);
      });
  }, []);

  return (
    <div className="positions-page">

      {/* Header */}

      <div className="positions-heading">
        <div>
          <span className="positions-eyebrow">
            <i className="fa-solid fa-chart-line"></i>
            TRADING
          </span>

          <h2>Positions ({allPostions.length})</h2>

          <p>
            View your current open trading positions.
          </p>
        </div>
      </div>


      {/* Positions Table */}

      <div className="positions-table-card">

        <div className="positions-table-header">
          <div>
            <h3>Open positions</h3>
            <span>Current trading positions</span>
          </div>
        </div>

        <div className="order-table positions-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg.</th>
                <th>LTP</th>
                <th>P&L</th>
                <th>Chg.</th>
              </tr>
            </thead>

            <tbody>

              {allPostions.map((stock, index) => {

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
                      <span className="position-product">
                        {stock.product}
                      </span>
                    </td>

                    <td>
                      <div className="position-instrument">

                        <div className="position-symbol">
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

                    <td className="position-ltp">
                      ₹{stock.price.toFixed(2)}
                    </td>

                    <td className={profClass}>
                      {isProfit ? "+" : ""}
                      ₹{pnl.toFixed(2)}
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

    </div>
  );
};

export default Positions;