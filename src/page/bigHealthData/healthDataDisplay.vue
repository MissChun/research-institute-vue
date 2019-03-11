<template>
  <div>
    <div>大数据展示</div>
    <div>
      <div id="echarts-map-container"></div>
      <div id="echarts-gender-container"></div>
      <div id="echarts-age-container"></div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import chinaMap from "../../assets/js/china.js";
import anhui from "../../assets/js/province/anhui.js";
import beijing from "../../assets/js/province/beijing.js";
import fujian from "../../assets/js/province/fujian.js";
import gansu from "../../assets/js/province/gansu.js";
import guangdong from "../../assets/js/province/guangdong.js";
import guangxi from "../../assets/js/province/guangxi.js";
import guizhou from "../../assets/js/province/guizhou.js";
import hainan from "../../assets/js/province/hainan.js";
import hebei from "../../assets/js/province/hebei.js";
import heilongjiang from "../../assets/js/province/heilongjiang.js";
import henan from "../../assets/js/province/henan.js";
import hubei from "../../assets/js/province/hubei.js";
import hunan from "../../assets/js/province/hunan.js";
import jiangsu from "../../assets/js/province/jiangsu.js";
import jiangxi from "../../assets/js/province/jiangxi.js";
import jilin from "../../assets/js/province/jilin.js";
import liaoning from "../../assets/js/province/liaoning.js";
import neimenggu from "../../assets/js/province/neimenggu.js";
import ningxia from "../../assets/js/province/ningxia.js";
import qinghai from "../../assets/js/province/qinghai.js";
import shandong from "../../assets/js/province/shandong.js";
import shanghai from "../../assets/js/province/shanghai.js";
import shanxi from "../../assets/js/province/shanxi.js";
import shanxi1 from "../../assets/js/province/shanxi1.js";
import sichuan from "../../assets/js/province/sichuan.js";
import taiwan from "../../assets/js/province/taiwan.js";
import tianjin from "../../assets/js/province/tianjin.js";
import xianggang from "../../assets/js/province/xianggang.js";
import xinjiang from "../../assets/js/province/xinjiang.js";
import xizang from "../../assets/js/province/xizang.js";
import yunnan from "../../assets/js/province/yunnan.js";
import zhejiang from "../../assets/js/province/zhejiang.js";

export default {
  name: "healthDataDisplay",
  data() {
    return {
      mapChart: "",
      detailChart: "",
      provinceName: [
        "北京",
        "天津",
        "河北",
        "山西",
        "内蒙古",
        "辽宁",
        "吉林",
        "黑龙江",
        "上海",
        "江苏",
        "浙江省",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "广西",
        "海南",
        "重庆",
        "四川",
        "贵州",
        "云南",
        "西藏",
        "陕西",
        "甘肃省",
        "青海",
        "宁夏",
        "新疆",
        "台湾",
        "香港特别行政区",
        "澳门"
      ],
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
      ],
      option: {
        //backgroundColor: "#404a59",
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
          aspectScale: 0.75,
          left: "10%",
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
      },
      detailOption: {
        backgroundColor: "#404a59",
        series: []
      },
      diseaseRankData: [54, 65, 78, 99, 132, 143, 165, 170, 190, 200]
    };
  },
  methods: {
    registerMap() {
      chinaMap(echarts);
      anhui(echarts);
      beijing(echarts);
      fujian(echarts);
      gansu(echarts);
      guangdong(echarts);
      guangxi(echarts);
      guizhou(echarts);
      hainan(echarts);
      hebei(echarts);
      heilongjiang(echarts);
      henan(echarts);
      hubei(echarts);
      hunan(echarts);
      jiangsu(echarts);
      jiangxi(echarts);
      jilin(echarts);
      liaoning(echarts);
      neimenggu(echarts);
      ningxia(echarts);
      qinghai(echarts);
      shandong(echarts);
      shanghai(echarts);
      shanxi(echarts);
      shanxi1(echarts);
      sichuan(echarts);
      taiwan(echarts);
      tianjin(echarts);
      xianggang(echarts);
      xinjiang(echarts);
      xizang(echarts);
      yunnan(echarts);
      zhejiang(echarts);
    },
    initEchartsMap() {
      //initOption
      this.registerMap();
      let dom = document.getElementById("echarts-map-container");
      this.mapChart = echarts.init(dom);
      this.mapChart.setOption(this.option);
    },
    initEchartsDetail() {
      this.registerMap();
      let dom = document.getElementById("echarts-gender-container");
      this.detailChart = echarts.init(dom);
      let option = {
        baseOption: {
          timeline: {
            axisType: "category",
            autoPlay: true,
            playInterval: 2000,
            data: [
              "2002-01-01",
              "2003-01-01",
              "2004-01-01",
              "2005-01-01",
              {
                value: "2011-01-01",
                tooltip: {
                  formatter: function(params) {
                    return params.name + "GDP达到又一个高度";
                  }
                },
                symbol: "diamond",
                symbolSize: 18
              }
            ],
            label: {
              formatter: function(s) {
                return new Date(s).getFullYear();
              }
            }
          },
          title: {
            subtext: "体检男女比例"
          },
          tooltip: {},
          calculable: true,
          series: [
            {
              name: "1",
              type: "pie",
              center: ["20%", "35%"],
              radius: "50%",
              z: 100
            },
            {
              name: "2",
              type: "pie",
              center: ["40%", "35%"],
              radius: "50%",
              z: 100
            },
            {
              name: "3",
              type: "pie",
              center: ["60%", "35%"],
              radius: "50%",
              z: 100
            },
            {
              name: "4",
              type: "pie",
              center: ["80%", "35%"],
              radius: "50%",
              z: 100
            }
          ]
        },
        options: [
          {
            title: { text: "2002年男女比例" },
            series: [
              {
                data: [{ name: "男", value: 50 }, { name: "女", value: 50 }]
              },
              {
                data: [{ name: "男", value: 43 }, { name: "女", value: 57 }]
              },
              {
                data: [{ name: "男", value: 29 }, { name: "女", value: 71 }]
              },
              {
                data: [{ name: "男", value: 78 }, { name: "女", value: 22 }]
              }
            ]
          },
          {
            title: { text: "2003年男女比例" },
            series: [
              {
                data: [{ name: "男", value: 43 }, { name: "女", value: 57 }]
              },
              {
                data: [{ name: "男", value: 30 }, { name: "女", value: 70 }]
              },
              {
                data: [{ name: "男", value: 40 }, { name: "女", value: 60 }]
              },
              {
                data: [{ name: "男", value: 38 }, { name: "女", value: 62 }]
              }
            ]
          },
          {
            title: { text: "2004年男女比例" },
            series: [
              {
                data: [{ name: "男", value: 60 }, { name: "女", value: 40 }]
              },
              {
                data: [{ name: "男", value: 87 }, { name: "女", value: 13 }]
              },
              {
                data: [{ name: "男", value: 45 }, { name: "女", value: 55 }]
              },
              {
                data: [{ name: "男", value: 76 }, { name: "女", value: 24 }]
              }
            ]
          },
          {
            title: { text: "2005年男女比例" },
            series: [
              {
                data: [{ name: "男", value: 30 }, { name: "女", value: 70 }]
              },
              {
                data: [{ name: "男", value: 43 }, { name: "女", value: 57 }]
              },
              {
                data: [{ name: "男", value: 29 }, { name: "女", value: 71 }]
              },
              {
                data: [{ name: "男", value: 70 }, { name: "女", value: 30 }]
              }
            ]
          }
        ]
      };
      this.detailChart.setOption(option);
    },
    addMapBar(chart, data) {
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
            grid: grids,
            xAxis: xAxis,
            yAxis: yAxis,
            series: [...barSeries]
          };
        }
      }
      return newOption;
    },
    addDiseaseRankBar(chart) {
      let op = chart.getOption();
      console.log("op.grids", op);
      let xAxis = [...op.xAxis];
      let yAxis = [...op.yAxis];
      let grids = [...op.grid];
      let series = [...op.series];
      let xAxisLength = xAxis.length;
      let yAxisLength = yAxis.length;
      let gridsLength = grids.length;

      yAxis.push({
        gridIndex: gridsLength,
        type: "category",
        data: [
          "脂肪肝",
          "失眠",
          "颈椎病",
          "胃痛",
          "乳腺增生",
          "痛风",
          "高脂血症",
          "高血压",
          "子宫肌瘤",
          "抑郁症"
        ],
        z: 100
      });
      //生成y坐标系
      xAxis.push({
        type: "value",
        gridIndex: gridsLength,
        splitLine: {
          show: false
        },
        z: 100
      });
      grids.push({
        width: "20%",
        height: "80%",
        right: "10%",
        z: 100
      });
      series.push({
        type: "bar",
        xAxisIndex: xAxisLength,
        yAxisIndex: yAxisLength,
        //barCategoryGap: 0,
        data: this.diseaseRankData,
        z: 100
      });
      let newOption = {
        grid: grids,
        xAxis: xAxis,
        yAxis: yAxis,
        series: series
      };

      return newOption;
    },
    addAgeChart() {
      let option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["Walnut Brownie", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };
      let dom = document.getElementById("echarts-age-container");
      this.AgeChart = echarts.init(dom);
      this.AgeChart.on("updateAxisPointer", event => {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          this.AgeChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)"
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });

      this.AgeChart.setOption(option);
    },
    changeMap(params) {
      let option = this.mapChart.getOption();
      console.log("option", option, params);
      let mapName = params.name;
      if (
        params.componentType === "geo" &&
        this.provinceName.includes(params.name)
      ) {
        let newOption = Object.assign({}, this.option);
        newOption.geo.map = mapName;
        this.mapChart.setOption(newOption, true);
        console.log("this.mapChart", this.mapChart.getOption());
      }
    }
  },
  created() {},
  mounted() {
    this.initEchartsMap();
    this.mapChart.on("click", params => {
      console.log(params); //此处写点击事件内容
      if (params && params.componentType === "geo") {
        this.changeMap(params);
      }
    });
    setTimeout(() => {
      let newOption = this.addMapBar(this.mapChart, this.data);
      this.mapChart.setOption(newOption);
      let newOption1 = this.addDiseaseRankBar(this.mapChart);
      console.log("newOption1", newOption1);
      this.mapChart.setOption(newOption1);

      this.initEchartsDetail();

      this.addAgeChart();
    }, 1000);
  }
};
</script>
<style scoped>
#echarts-map-container {
  width: 100%;
  height: 600px;
  /* background-color: #404a59; */
}
#echarts-gender-container {
  width: 100%;
  height: 300px;
  /* background-color: #404a59; */
}
#echarts-age-container {
  width: 100%;
  height: 600px;
  /* background-color: #404a59; */
}
</style>

