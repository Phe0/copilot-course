var incomeIds = [
  "income-january",
  "income-february",
  "income-march",
  "income-april",
  "income-may",
  "income-june",
  "income-july",
  "income-august",
  "income-september",
  "income-october",
  "income-november",
  "income-december",
];

var expenseIds = [
  "expenses-january",
  "expenses-february",
  "expenses-march",
  "expenses-april",
  "expenses-may",
  "expenses-june",
  "expenses-july",
  "expenses-august",
  "expenses-september",
  "expenses-october",
  "expenses-november",
  "expenses-december",
];

function getInputValue(id) {
  return document.getElementById(id).value;
}

function getIncomeData() {
  return incomeIds.map((id) => Number(getInputValue(id)));
}

function getExpensesData() {
  return expenseIds.map((id) => Number(getInputValue(id)));
}

function updateChart(chart) {
  chart.data.datasets[0].data = getIncomeData();
  chart.data.datasets[1].data = getExpensesData();
  chart.update();
}

window.onload = function () {
  document.getElementById("download").addEventListener("click", function () {
    downloadCanvasAsImage();
  });

  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  document
    .querySelector('a[href="#chart"]')
    .addEventListener("click", function () {
      updateChart(myChart);
    });
};

function downloadCanvasAsImage() {
  var canvas = document.getElementById("myChart");
  var link = document.createElement("a");
  link.download = "chart.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
