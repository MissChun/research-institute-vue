<template>
  <div>
    <div>大数据展示</div>
    <div id="echarts-container"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import chinaMap from "../../assets/js/china.js";
import anhui from "../../assets/js/province/anhui.js";
export default {
  name: "healthDataDisplay",
  data() {
    return {
      mapChart: "",
      data: [
        {
          name: "西藏",
          gdp: [220.22, 7571.35, 10093.82, 17885.39],
          lnglat: [91.11, 30.97]
        },
        {
          name: "上海",
          gdp: [1965.18, 21194.61, 24091.57, 47251.36],
          lnglat: [121.48, 31.22]
        },
        {
          name: "福建",
          gdp: [4077.18, 34619.5, 38691.6, 77388.28],
          lnglat: [118.1, 27.46]
        },
        {
          name: "浙江",
          gdp: [109.47, 8406.28, 19662.9, 28178.65],
          lnglat: [119.96, 29.86]
        },
        {
          name: "广东",
          gdp: [2670.46, 4400.69, 8314.94, 15386.09],
          lnglat: [113.23, 24.16]
        },
        {
          name: "山西",
          gdp: [1498.52, 7004.95, 6273.33, 14776.8],
          lnglat: [112.53, 38.87]
        },
        {
          name: "云南",
          gdp: [2173.06, 8606.54, 11467.3, 22246.9],
          lnglat: [101.73, 25.04]
        },
        {
          name: "辽宁",
          gdp: [1637.39, 8553.63, 7937.08, 18128.1],
          lnglat: [123.38, 42.8]
        },
        {
          name: "吉林",
          gdp: [784.78, 5028.99, 7236.64, 13050.41],
          lnglat: [125.35, 44.88]
        },
        {
          name: "江西",
          gdp: [2195.11, 5690.16, 6903.15, 14788.42],
          lnglat: [115.89, 28.68]
        },
        {
          name: "海南",
          gdp: [115.78, 429.17, 606.46, 1151.41],
          lnglat: [109.51, 20.25]
        },
        {
          name: "广西",
          gdp: [983.39, 2515.56, 3701.42, 7200.37],
          lnglat: [108.74, 24.16]
        },
        {
          name: "内蒙古",
          gdp: [221.19, 1249.98, 1101.32, 2572.49],
          lnglat: [111.65, 42.42]
        },
        {
          name: "四川",
          gdp: [3492.81, 15256.93, 13320.71, 32070.45],
          lnglat: [104.06, 31.67]
        },
        {
          name: "陕西",
          gdp: [1648.97, 3647.01, 4353.72, 9649.7],
          lnglat: [108.95, 35.27]
        },
        {
          name: "江苏",
          gdp: [1693.85, 9490.72, 8215.02, 19399.59],
          lnglat: [119.78, 33.04]
        },
        {
          name: "贵州",
          gdp: [1846.19, 4669.53, 5261.01, 11776.73],
          lnglat: [106.71, 27.57]
        },
        {
          name: "北京",
          gdp: [3929.33, 13448.92, 15556.29, 32934.54],
          lnglat: [116.46, 41.92]
        },
        {
          name: "新疆",
          gdp: [1303.24, 7898.92, 8538.43, 17740.59],
          lnglat: [86.68, 41.77]
        },
        {
          name: "山东",
          gdp: [948.35, 905.95, 2198.9, 4053.2],
          lnglat: [118, 36.65]
        },
        {
          name: "甘肃",
          gdp: [2796.8, 8273.66, 7247.18, 18317.64],
          lnglat: [103.73, 37.03]
        },
        {
          name: "天津",
          gdp: [3694.37, 35109.66, 42050.88, 80854.91],
          lnglat: [117.2, 40.13]
        },
        {
          name: "河南",
          gdp: [3578.37, 13341.17, 14631.83, 31551.37],
          lnglat: [113.65, 34.76]
        },
        {
          name: "黑龙江",
          gdp: [3659.33, 14654.38, 14351.67, 32665.38],
          lnglat: [127.63, 47.75]
        },
        {
          name: "河北",
          gdp: [4286.21, 19275.82, 16909.76, 40471.79],
          lnglat: [115.48, 40.03]
        },
        {
          name: "湖南",
          gdp: [4929.13, 31343.67, 31751.69, 68024.49],
          lnglat: [112, 28.21]
        },
        {
          name: "安徽",
          gdp: [3492.81, 15256.93, 13320.71, 32070.45],
          lnglat: [117.27, 32.86]
        },
        {
          name: "湖北",
          gdp: [1904.53, 8829.54, 7764.93, 18499],
          lnglat: [112.31, 31.52]
        },
        {
          name: "青海",
          gdp: [2363.22, 14093.47, 12353.89, 28810.58],
          lnglat: [97.31, 37.03]
        },
        {
          name: "宁夏",
          gdp: [2567.72, 11821.58, 10018.32, 24407.62],
          lnglat: [106.31, 38.52]
        }
      ]
    };
  },
  methods: {
    initEchartsMap() {
      chinaMap(echarts);
      anhui(echarts);
      //initOption
      let option = {
        backgroundColor: "#404a59",
        title: {
          text: "2016年各省市GDP及各产业占比",
          left: "center",
          textStyle: {
            color: "black"
          }
        },
        legend: {
          data: ["第三产业", "第二产业", "第一产业"],
          orient: "vertical",
          top: "10%",
          left: "left",
          zlevel: 100
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (params.value) {
              return params.name + "<br/>" + "GDP: " + params.value + "亿元";
            }
          }
        },
        geo: {
          map: "china",
          roam: false,
          zoom: 0.7, // 地图初始大小
          //center: [110.366794, 23.400309], // 初始中心位置
          label: {
            emphasis: {
              show: false,
              areaColor: "#eee"
            }
          },
          // 地区块儿颜色
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: []
      };

      let dom = document.getElementById("echarts-container");
      this.mapChart = echarts.init(dom);
      this.mapChart.setOption(option);
    },
    addBar(chart, data) {
      var op = chart.getOption();
      var sd = op.series;

      var grids = [];
      var xAxis = [];
      var yAxis = [];
      var barSeries = [];

      for (var i = 0; i < data.length; i++) {
        var geoCoord = data[i].lnglat;

        if (geoCoord) {
          //生成x坐标系
          xAxis.push({
            gridIndex: i,
            show: false,
            type: "category",
            data: ["早", "中", "晚"],
            z: 100
          });
          //生成y坐标系
          yAxis.push({
            type: "value",
            show: false,
            gridIndex: i,
            z: 100
          });

          var coord = chart.convertToPixel("geo", geoCoord);

          var p = chart.convertToPixel(
            {
              seriesIndex: 0
            },
            geoCoord
          );
          //生成网格
          grids.push({
            width: 30,
            height: 30,
            left: coord[0] - 25,
            top: coord[1] - 25,
            z: 100
          });
          //生成series
          barSeries.push({
            type: "bar",
            xAxisIndex: i,
            yAxisIndex: i,
            barCategoryGap: 0,
            data: data[i].gdp.slice(0, 3),
            z: 100,
            itemStyle: {
              normal: {
                color: function(params) {
                  // 柱状图每根柱子颜色
                  var colorList = ["#60acfc", "#5bc49f", "#feb64d"];
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
          var newOption = {
            title: op.title,
            legend: op.legend,
            tooltip: op.tooltip,
            backgroundColor: op.backgroundColor,
            geo: op.geo,
            grid: grids,
            xAxis: xAxis,
            yAxis: yAxis,
            series: [...barSeries]
          };
        }
      }
      return newOption;
    }
  },
  created() {},
  mounted() {
    this.initEchartsMap();
    setTimeout(() => {
      let newOption = this.addBar(this.mapChart, this.data);
      this.mapChart.setOption(newOption);
    }, 1000);
  }
};
</script>
<style scoped>
#echarts-container {
  width: 100%;
  height: 600px;
}
</style>

