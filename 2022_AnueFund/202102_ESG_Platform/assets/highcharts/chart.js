
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
      { name: '互聯網和直銷零售', y: 26.6 },
      { name: '娛樂', y: 19.9 },
      { name: '酒店、餐館與休閒', y: 18.8 },
      { name: '互動媒體與服務', y: 7.7 },
      { name: '專營零售', y: 7.1 },
      { name: '食品與主要用品零售', y: 3.4 },
      { name: '不動產投資信託', y: 3.2 },
      { name: '家庭耐用消費品', y: 3.0 },
      { name: '其他(含現金)', y: 10.3 },
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
      colors: ['#1f497d', '#2c67ae', '#5891c8', '#68a8e6','#89baea', '#99d0f4', '#d2d2d2', '#b2b2b2', '#979797'],
      showInLegend: true,
      dataLabels: {
        useHTML:true,
        enabled: true,
        format: '{point.percentage:.1f}%',
        distance: -65,
        style: {
          fontSize: '13px',
          fontFamily: 'Microsoft JhengHei',
          fontWeight: 'bold'
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

Highcharts.chart('chart02', {
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
      { name: 'A信評以上', y: 31.3 },
      { name: 'BBB', y: 56.4 },
      { name: 'BB', y: 9.5 },
      { name: '現金', y: 2.8 },
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
      colors: ['#1f497d', '#2c67ae', '#5891c8','#979797'],
      // showInLegend: true,
      dataLabels: {
        useHTML:true,
        enabled: true,
        format: '<b>{point.name}</b><br>{point.percentage:.1f}%',
        distance: -70,
        style: {
          fontSize: '12px',
          fontFamily: 'Microsoft JhengHei',
          fontWeight: 'bold'
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