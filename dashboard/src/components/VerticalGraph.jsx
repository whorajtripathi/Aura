// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Holdings",
//     },
//   },
// };

// export function VerticalGraph({ data }) {
//   return <Bar options={options} data={data} />;
// }

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const options = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index",
    intersect: false,
  },

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

  scales: {
    x: {
      grid: {
        display: false,
      },

      ticks: {
        color: "#64748b",
        font: {
          size: 10,
        },
      },

      border: {
        display: false,
      },
    },

    y: {
      beginAtZero: false,

      grid: {
        color: "rgba(255,255,255,0.05)",
      },

      ticks: {
        color: "#64748b",
        font: {
          size: 10,
        },

        callback: (value) => {
          return `₹${(value / 1000).toFixed(0)}K`;
        },
      },

      border: {
        display: false,
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line
        options={options}
        data={data}
      />
    </div>
  );
}