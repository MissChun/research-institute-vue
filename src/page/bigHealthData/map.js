var myChart = echarts.init(document.getElementById('map'));
// 省坐标，因为全国34个省固定不变，写死即可
var geoCoordMap = {
  西藏: [91.11, 30.97],
  上海: [121.48, 31.22],
  福建: [118.1, 27.46],
  浙江: [119.96, 29.86],
  广东: [113.23, 24.16],
  山西: [112.53, 38.87],
  云南: [101.73, 25.04],
  辽宁: [123.38, 42.8],
  吉林: [125.35, 44.88],
  江西: [115.89, 28.68],
  海南: [109.51, 20.25],
  广西: [108.74, 24.16],
  内蒙古: [111.65, 42.42],
  四川: [104.06, 31.67],
  陕西: [108.95, 35.27],
  江苏: [119.78, 33.04],
  贵州: [106.71, 27.57],
  北京: [116.46, 41.92],
  新疆: [86.68, 41.77],
  山东: [118, 36.65],
  甘肃: [103.73, 37.03],
  天津: [117.2, 40.13],
  河南: [113.65, 34.76],
  黑龙江: [127.63, 47.75],
  河北: [115.48, 40.03],
  湖南: [112, 28.21],
  安徽: [117.27, 32.86],
  湖北: [112.31, 31.52],
  青海: [97.31, 37.03],
  重庆: [107.31, 30.52],
  宁夏: [106.31, 38.52],
  香港: [114.31, 23.02],
  澳门: [114.01, 22.52],
  台湾: [120.81, 25.02]
};

var rawData = [];
var max1 = 0;
// 后台获取早中晚登录的人数
$.post('${ctx}/main/ajax_echarts_login_info_detail.do', function(data) {
  for (i = 0; i < data.loginAfternoon.length; i++) {
    var row = [];
    row.push(data.province[i]);
    row.push(data.loginMorning[i]);
    row.push(data.loginAfternoon[i]);
    row.push(data.loginEvening[i]);
    rawData.push(row);
  }
  // console.info(rawData);

  // 找出数组中的最大值，用来设置柱状图Y轴的最大值
  // 新建一个数组，将各个数据都放进去，然后查找最大值
  var arr = [];
  for (i = 0; i < 34; i++) {
    arr.push(rawData[i][1]);
    arr.push(rawData[i][2]);
    arr.push(rawData[i][3]);
  }
  // 查找数组中最大值

  for (i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
      max1 = arr[i];
    }
  }

  // 产生地图数据
  function makeMapData(rawData) {
    var mapData = [];
    for (var i = 0; i < rawData.length; i++) {
      var geoCoord = geoCoordMap[rawData[i][0]];
      if (geoCoord) {
        mapData.push({
          name: rawData[i][0],
          value: geoCoord.concat(rawData[i].slice(1))
        });
      }
    }
    return mapData;
  }
  option = {
    animation: false,
    tooltip: {
      trigger: 'axis'
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 0.7, // 地图初始大小
      center: [110.366794, 23.400309], // 初始中心位置
      label: {
        emphasis: {
          show: false,
          areaColor: '#eee'
        }
      },
      // 地区块儿颜色
      itemStyle: {
        normal: {
          areaColor: '#55C3FC',
          borderColor: '#fff'
        },
        emphasis: {
          areaColor: '#21AEF8'
        }
      }
    },
    series: []
  };

  function renderEachCity() {
    var option = {
      xAxis: [],
      yAxis: [],
      grid: [],
      series: [],
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'none'
        }
      }
    };

    echarts.util.each(rawData, function(dataItem, idx) {
      // console.info(idx);
      var geoCoord = geoCoordMap[dataItem[0]];
      var coord = myChart.convertToPixel('geo', geoCoord);
      idx += '';

      inflationData = [];
      for (var k = 1; k < 4; k++) {
        inflationData.push(dataItem[k]);
      }
      option.xAxis.push({
        id: idx,
        gridId: idx,
        type: 'category',
        name: dataItem[0],
        nameLocation: 'middle',
        nameGap: 3,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#666'
          }
        },
        // data: xAxisCategory,
        data: ['早', '中', '晚'],
        z: 100
      });
      option.yAxis.push({
        id: idx,
        gridId: idx,
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#1C70B6'
          }
        },
        splitLine: {
          show: false
        },
        min: 0,
        max: max1,
        z: 100
      });
      option.grid.push({
        id: idx,
        width: 30,
        height: 40,
        left: coord[0] - 15,
        top: coord[1] - 15,
        z: 100
      });
      option.series.push({
        id: idx,
        type: 'bar',
        xAxisId: idx,
        yAxisId: idx,
        barGap: 0,
        barCategoryGap: 0,
        // data: inflationData,
        data: inflationData,
        z: 100,
        itemStyle: {
          normal: {
            color: function(params) {
              // 柱状图每根柱子颜色
              var colorList = ['red', 'green', 'yellow'];
              return colorList[params.dataIndex];
            }
          },
          emphasis: {
            label: {
              show: false
            }
          }
        }
      });
    });

    myChart.setOption(option);
  }

  setTimeout(renderEachCity, 0);

  myChart.setOption(option);
});
