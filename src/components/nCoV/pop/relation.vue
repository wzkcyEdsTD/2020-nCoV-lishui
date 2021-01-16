<template>
<div class="relation">
  <head>
    <span>[ {{ title }} ] - 密切接触者</span>
    <span id="close" @click="close()">x</span>
  </head>
  <div>
    <div class="list">
      <div id="relationChart"></div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import "echarts/lib/chart/graph";
import "echarts/lib/component/tooltip";
export default {
  name: "relation",
  data() {
    return {
      title: "",
      list: [],
      chart: undefined
    };
  },
  mounted() {},
  methods: {
    doChart(list) {
      this.chart = this.$echarts.init(document.getElementById("relationChart"));
      this.chart.setOption({
        legend: {
          orient: "vertical",
          left: "10",
          bottom: "20",
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 1,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            force: {
              repulsion: list.length > 20 ? 260 : 800,
              initLayout: "circular",
              layoutAnimation: false
            },
            edgeSymbol: ["", "arrow"],
            edgeLabel: {
              normal: {
                show: true,
                formatter: "{c}",
                color: "#fff"
              }
            },
            categories: [
              {
                name: "非鹿城",
                itemStyle: {
                  normal: {
                    color: "#00f"
                  }
                },
                label: {
                  normal: {
                    color: "#00f"
                  }
                }
              },
              {
                name: "鹿城内已解除隔离",
                itemStyle: {
                  normal: {
                    color: "#0f0"
                  }
                },
                label: {
                  normal: {
                    color: "#0f0"
                  }
                }
              },
              {
                name: "鹿城内未解除隔离",
                itemStyle: {
                  normal: {
                    color: "#f00"
                  }
                },
                label: {
                  normal: {
                    color: "#f00"
                  }
                }
              }
            ],
            data: [
              {
                name: this.title,
                label: {
                  color: "#0fd",
                  fontSize: 15
                }
              },
              ...this.list
                .filter((item, index) => {
                  return index < 90;
                })
                .map(item => {
                  return {
                    name: item.attributes.NAME,
                    category:
                      item.attributes.ZTLB && Number(item.attributes.ZTLB),
                    label: {
                      fontSize: 14,
                      fontWeight: "bolder"
                    }
                  };
                })
            ],
            links: this.list
              .filter((item, index) => {
                return index < 90;
              })
              .map(item => {
                return {
                  source: this.title,
                  target: item.attributes.NAME,
                  value: item.attributes.Relation
                    ? item.attributes.Relation
                    : ""
                };
              })
          }
        ]
      });
    },
    close() {
      this.$parent.relationShow = false;
    }
  },
  watch: {
    list(newV, oldV) {
      this.$nextTick(() => {
        newV.length && this.doChart(newV);
      });
    }
  }
};
</script>

<style lang="less" scoped>
.relation {
  position: absolute;
  width: 600px;
  height: 400px;
  background: #24386a;
  border: 1px solid #04ecff;
  z-index: 40;
  top: 0;
  margin: auto;
  left: 360px;
  bottom: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  head {
    display: block;
    box-sizing: border-box;
    padding: 5px;
    height: 40px;
  }
  #close {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }
  > div {
    flex: 1;

    .list {
      height: 360px;

      #relationChart {
        height: 100%;
        margin: 0px 5px;
      }
    }
  }
}
</style>