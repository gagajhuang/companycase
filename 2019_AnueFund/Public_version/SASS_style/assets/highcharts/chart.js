
var pieColors = (function () {
  var colors = [],
    base = Highcharts.getOptions().colors[0],
    i;
  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
  }
  return colors;
}());

// Build the chart
Highcharts.chart('chart01', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    backgroundColor: null,
    
  },
  title: {
    text: null
  },
  tooltip: {
    shared: true,
    pointFormat: '{point.percentage:.1f}%',
    style: {            
      fontSize: "12px",
      fontWeight: "blod",
      fontFamily: "Microsoft JhengHei"
    }
  },
  series: [{
    data: [
      { name: '電子零組件', y: 41},
      { name: '新興市場債', y: 20 },
      { name: '其他資產', y: 20 },
      {
				name: '證券化資產',
				y: 10,
				dataLabels: {
					distance: -60 
				}
			},
      // { name: '證券化資產', y: 10 },
    ]
  }],
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      // colors: pieColors,
      colors: ['#1f497d', '#5891c8', '#99d0f4', '#d2d2d2', '#b2b2b2', '#979797'],
      // showInLegend: true,
      dataLabels: {
        useHTML:true,
        enabled: true,
        format: '{point.percentage:.1f}%',
        // format: '<b>{point.name}</b><br>{point.percentage:.f}%',
        distance: -90,
        // distance: '-50%',
        style: {
          fontSize: '16px',
          fontFamily: 'Microsoft JhengHei',
          fontWeight: 'bold',
          textAlign: 'center'
        }
      }
    }
  },

  credits: {
    enabled: false,
  },
  exporting: {
    buttons: {
      contextButton: {
        enabled: false
      }    
    }
  },
});
