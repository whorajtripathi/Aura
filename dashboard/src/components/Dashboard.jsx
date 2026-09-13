// import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
// import Funds from "./Funds";
// import Holdings from "./Holdings";
// import Orders from "./Orders";
// import Positions from "./Positions";
// import Summary from "./Summary";
// import WatchList from "./WatchList";
// import { GeneralContextProvider } from "./GeneralContext";

// const Dashboard = () => {
//   return (
//     <GeneralContextProvider>
//       <div className="dashboard-container">

//         <WatchList />

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Summary />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/holdings" element={<Holdings />} />
//             <Route path="/positions" element={<Positions />} />
//             <Route path="/funds" element={<Funds />} />
//             <Route path="/apps" element={<Apps />} />
//           </Routes>
//         </div>

//       </div>
//     </GeneralContextProvider>
//   );
// };

// export default Dashboard;

import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Menu from "./Menu";
import TopBar from "./TopBar";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <div className="aura-dashboard">

        {/* Sidebar */}
        <Menu />

        {/* Main Area */}
        <div className="aura-main">

          {/* Top Navigation */}
          <TopBar />

          {/* Workspace */}
          <div className="aura-workspace">

            {/* Watchlist */}
            <aside className="aura-watchlist-panel">
              <WatchList />
            </aside>

            {/* Page Content */}
            <main className="aura-content">
              <Routes>
                <Route path="/" element={<Summary />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
                <Route path="/apps" element={<Apps />} />
              </Routes>
            </main>

          </div>
        </div>

      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;