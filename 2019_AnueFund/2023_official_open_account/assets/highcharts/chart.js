var pieColors = (function () {
  var colors = [],
    base = Highcharts.getOptions().colors[0],
    i;
  for (i = 0; i < 10; i += 1) {
    colors.push(
      Highcharts.color(base)
        .brighten((i - 3) / 7)
        .get()
    );
  }
  return colors;
})();
Highcharts.chart("chart", {
  chart: {
    type: "pie",
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    height: 250
  },
  title: {
    text: null,
  },
  tooltip: {
    shared: true,
    headerFormat: "",
    pointFormat: "<b>{point.name}</b><br>{point.percentage:.1f}%",
  },
  series: [
    {
      innerSize: "50%",
      data: [
        { name: "母基金", y: 73.5 },
        { name: "子基金", y: 26.5 },
      ],
    },
  ],
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      showInLegend: true,
      colors: ["#64b5f6", "#1976d2"],
      dataLabels: {
        enabled: false,
      },
    },
  },
  legend: {
    title: {
      text: "交易類型現況",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    labelFormat: "{name} {percentage:.1f}%",
    align: "right",
    verticalAlign: "middle",
    itemStyle: {
      fontSize: "16px",
      fontFamily: "Microsoft JhengHei",
      fontWeight: "normal",
    },
    itemMarginBottom: 8,
    symbolRadius:0
  },
  credits: {
    enabled: false,
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false,
      },
    },
  },
});
