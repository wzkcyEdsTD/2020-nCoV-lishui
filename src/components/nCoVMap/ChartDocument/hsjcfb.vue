<template>
  <div class="hsjcfbData">
    <div class="titleLine">
      <div class="title">核酸检测分布情况</div>
      <div class="lineImg" />
    </div>
    <div class="data">
      <div class="unit">单位：个</div>
      <div id="hsjcCharts" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 核酸检测分布
    hsjcfb() {
      const that = this;
      const chart = this.$echarts.init(document.getElementById("hsjcCharts"));
      chart.setOption({
        grid: {
          top: "0%",
          left: "15%",
          //   right: '4%',
          bottom: "20%",
        },
        xAxis: {
          type: "value",
          max: 600,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            fontFamily:"youshebiaotihei",
            fontSize:14
          },
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2,
            },
          },
          axisTick: {
            //刻度线
            show: false,
          },
          splitLine: {
            //网格线
            show: false,
          },
        },
        yAxis: {
          type: "category",
          data: [
            "景宁县",
            "庆元县",
            "云和县",
            "松阳县",
            "遂昌县",
            "缙云县",
            "青田县",
            "莲都区",
            "龙泉市",
          ],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
            fontFamily:"PingFang",
            fontSize:14
          },
          axisLine: {
            lineStyle: {
              color: "#9fdbfd",
              width: 2,
            },
          },
          axisTick: {
            //刻度线
            show: false,
          },
        },
        dataZoom: [
          {
            type: "inside",
            show: true,
            yAxisIndex: 0,
            start: 100,
            end: 60,
            width: "3%",
            height: "80%",
            left: "0%",
            borderColor: "#fff",
            fillerColor: "#fff",
            textStyle:false,
            zoomOnMouseWheel:false,  //滚轮是否触发缩放
            moveOnMouseMove:true,  //鼠标滚轮触发滚动
            moveOnMouseWheel:true
          },
        ],
        series: [
          {
            name: "hsjcfb",
            type: "bar",
            stack: "total",
            label: {
              show: true,
              position:"right",
              textStyle:{
                color:"#fff"
              },
              fontFamily:"PingFang",
              fontSize:14
            },
            itemStyle: {
              normal:{
                color: function(params){
                  if(params.name==name){
                    return  new that.$echarts.graphic.LinearGradient(
                      1,0,0,0,
                      [
                            {offset: 0, color: '#FF8C4C'},
                            {offset: 1, color: '#FEDB76'},
                      ]
                    )
                  }else{
                    return  new that.$echarts.graphic.LinearGradient(
                      1,0,0,0,
                      [
                            {offset: 1, color: '#16DCE9'},
                            {offset: 0, color: '#00B7FC'},
                      ]
                    )
                  }
  
                } 
              },
              // color: "#00B7FC",
            },
            // barGap:'80%',
            // barCategoryGap:'50%',
            barWidth: 25, //柱图宽度
            data: [320, 302, 301, 334, 390, 330, 320, 320, 320],
          },
        ],
      });

      chart.on('click', function(params) {
          let name = params.name ;
          console.log(name);
          chart.setOption({
            grid: {
              top: "0%",
              left: "15%",
              //   right: '4%',
              bottom: "20%",
            },
            xAxis: {
              type: "value",
              max: 600,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
                fontFamily:"youshebiaotihei",
                fontSize:14
              },
              axisLine: {
                lineStyle: {
                  color: "#9fdbfd",
                  width: 2,
                },
              },
              axisTick: {
                //刻度线
                show: false,
              },
              splitLine: {
                //网格线
                show: false,
              },
            },
            yAxis: {
              type: "category",
              data: [
                "景宁县",
                "庆元县",
                "云和县",
                "松阳县",
                "遂昌县",
                "缙云县",
                "青田县",
                "莲都区",
                "龙泉市",
              ],
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
                fontFamily:"PingFang",
                fontSize:14
              },
              axisLine: {
                lineStyle: {
                  color: "#9fdbfd",
                  width: 2,
                },
              },
              axisTick: {
                //刻度线
                show: false,
              },
            },
            dataZoom: [
              {
                type: "inside",
                show: true,
                yAxisIndex: 0,
                // start: 0,
                // end: 20,
                width: "3%",
                height: "80%",
                left: "0%",
                borderColor: "#fff",
                fillerColor: "#fff",
                textStyle:false,
                zoomOnMouseWheel:false,  //滚轮是否触发缩放
                moveOnMouseMove:true,  //鼠标滚轮触发滚动
                moveOnMouseWheel:true
              },
            ],
            series: [
              {
                name: "hsjcfb",
                type: "bar",
                stack: "total",
                label: {
                  show: true,
                  position:"right",
                  textStyle:{
                    color:"#fff"
                  },
                  fontFamily:"PingFang",
                  fontSize:14
                },
                itemStyle: {
                  normal:{
                    color: function(params){
                      if(params.name==name){
                       return  new that.$echarts.graphic.LinearGradient(
                          1,0,0,0,
                          [
                                {offset: 0, color: '#FF8C4C'},
                                {offset: 1, color: '#FEDB76'},
                          ]
                        )
                      }else{
                       return  new that.$echarts.graphic.LinearGradient(
                          1,0,0,0,
                          [
                                {offset: 1, color: '#16DCE9'},
                                {offset: 0, color: '#00B7FC'},
                          ]
                        )
                      }
      
                    } 
                  },
                  // color: "#00B7FC",
                },
                // barGap:'80%',
                // barCategoryGap:'50%',
                barWidth: 25, //柱图宽度
                data: [320, 302, 301, 334, 390, 330, 320, 320, 320],
              },
            ],
          });
      })
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
  },
  created() {},
  mounted() {
    const that = this;
    that.hsjcfb();
  },
};
</script>

<style lang="less" scoped>
.hsjcfbData {
  width: 100%;
  height: 35%;
  padding-left: 20px;
  .titleLine {
    .title {
      text-align: left;
      font-family: youshebiaotihei;
      font-size: 2.2vh;
      color: #ffffff;
      width: 100%;
      height: 3vh;
    }
    .lineImg {
      background-image: url("~@/components/nCoVMap/img/lineImg.png");
      background-size: 100% 100%;
      width: 90%;
      height: 0.5vh;
    }
  }
  .data {
    // display: flex;

    #hsjcCharts {
      width: 37vh;
      height: 25vh;
    }
  }
  .unit {
    font-family: PingFang;
    color: #ffffff;
    position: relative;
    right: 2vh;
    top: 1vh;
    font-size: 1.2vh;
    text-align: right;
  }
}
</style>
