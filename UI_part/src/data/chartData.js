export const lineChartData = [
  {
    name: "Revenue",
    data: [50, 64, 48, 66, 49, 68],
  },
  //   {
  //     name: "Profit",
  //     data: [30, 40, 24, 46, 20, 46],
  //   },
];
export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#e0a46a",
    },
  },
  colors: ["#FF5733"], // Change this to your desired color
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#FF5733", // Match with the line color
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
    width: 3, // Adjust thickness if needed
    colors: ["#FF5733"], // Ensure line color is updated
  },
  xaxis: {
    type: "numeric",
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    labels: {
      style: {
        colors: "#e0a46a",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      opacity: 0.5,
    },
  },
};


export const barChartData = [
  {
    name: "Attendance",
    data: [21, 18, 25, 22, 20, 23, 19], // Example attendance values
  },
];

export const barChartOptions = {
 // colors: ["#e0a46a"], // Customize as needed
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // Days of the week
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    title: {
      text: "Employees Attended",
    },
    labels: {
      show: true,
      style: {
        colors: "#9aaeb5",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    theme: "dark",
  },
};
export const salesLineChartData = [
  {
    name: "Marketing Sales",
    data: [50, 64, 48, 24, 49, 68],
  },
  {
    name: "Cases Sales",
    data: [70, 25, 76, 46, 20, 46],
  },
];

export const salesLineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },

  colors: ["#4318FF", "#fd4332"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#e0a46a",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    labels: {
      style: {
        colors: "#e0a46a",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#e0a46a",
        fontSize: "14px",
      },
    },
  },
  legend: {
    position: "top",
    offsetY: 0,
    colors: "#e0a46a",
  },
  grid: {
    show: false,
    column: {
      color: ["#e0a46a", "#e0a46a"],
      opacity: 0.5,
    },
  },
  color: ["#e0a46a", "#e0a46a"],
};

export const dailyVisitsBarChartData = [
  {
    name: "Mobile Browser",
    data: [44, 55, 57, 56],
  },
  {
    name: "Desktop",
    data: [76, 85, 101, 98],
  },
];

export const dailyVisitsBarChartOptions = {
  chart: {
    type: "bar",
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Sep", "Oct", "Nov", "Dec"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    labels: {
      show: true,
      style: {
        colors: "#e0a46a",
        fontSize: "14px",
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};

export const salesReportPieChartData = [63, 25];

export const salesReportPieChartOptions = {
  labels: ["Online Sales", "Offline Sales"],
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },

  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["rgba(100, 39, 255, 0.5)", "rgba(196, 156, 26, 0.5)"],
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};

export const productSalesDognutChartData = [63, 25, 74, 53, 67, 56];

export const productSalesDognutChartOptions = {
  labels: [
    "Mobile Phone",
    "Furniture",
    "Clothing",
    "Watches",
    "Smart TVs",
    "Drinks",
  ],
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },

  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  colors: ["#a288ec", "#ffa071", "#fc424a", "#0b0f19", "#99d1a6", "#f88"],
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
};
