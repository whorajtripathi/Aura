// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(
//   ArcElement,
//   Tooltip,
//   Legend
// );

// export function DoughNut({ data }) {
//   return (
//     <Doughnut data={data} />
//   );
// }

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip
);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  cutout: "72%",

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      backgroundColor: "#11182a",
      titleColor: "#ffffff",
      bodyColor: "#cbd5e1",

      borderColor: "rgba(255,255,255,0.08)",
      borderWidth: 1,

      padding: 12,

      callbacks: {
        label: (context) => {
          return ` ₹${Number(context.raw).toLocaleString("en-IN")}`;
        },
      },
    },
  },
};

export function DoughNut({ data }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
}