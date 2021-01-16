<template>
  <div class="Map">
    <div :id="id" class="arcgisMap"></div>
  </div>
</template>

<script>
/* eslint-disable */
const server = "http://172.20.89.88:5001/s";
import {
  addQZLinkFeature,
  mjChartUpdate,
  addQZLinkFeature_gj,
  mjChartUpdate_gj,
} from "./frame/mjArcgis";
import {
  getGLDList,
  getHMGLDList,
  getHQGLDList,
  getKFGLDList,
  getNJQYList,
} from "./frame/gldArcgis";
import { linkCPFeatures } from "./frame/streetArcgis";
import { linkXQFeatures, linkXQ_ENTERFeatures, xqDetail } from "./frame/xqArcgis";
import { loadModules } from "esri-loader";
import {
  OPTION,
  spatialReference,
  QHMB,
  IMAGELAYER,
  TDTIMAGE2017,
  TDTDSJ,
} from "@/components/common/Tmap";
import { tipHash, Hash } from "./config/hash.js";

export default {
  name: "MacroscopicArcgis",
  data() {
    return {};
  },
  props: ["id"],
  created() {},
  async mounted() {
    const that = this;
    /**init map**/
    await this.createMap();
    // 添加图例标题
    $(".esri-mytitle").remove();
    $(".esri-legend").prepend(
      '<div class="esri-legend__message esri-mytitle">图例</div>'
    );
  },
  watch: {},
  methods: {
    /**
     * 初始化地图对象,带上底图
     * @param {Function} fn 回调函数
     */
    createMap(fn) {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(
          [
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Legend",
            "esri/layers/VectorTileLayer",
            "esri/layers/TileLayer",
          ],
          OPTION
        ).then(([Map, MapView, Legend, VectorTileLayer]) => {
          // map加载底图
          that.map = new Map({
            spatialReference,
          });
          //设置地图容器
          that.view = new MapView({
            container: that.$props.id,
            spatialReference,
            map: that.map,
            zoom: 13,
            center: [120.67819448808013, 28.039695289562555],
          });
          const layer = new VectorTileLayer({
            url: IMAGELAYER,
          });
          that.map.add(layer);
          that.legend = new Legend({
            label: "图例",
            view: that.view,
          });
          that.view.ui.add(that.legend, "bottom-left");
          that.view.on("click", function (evt) {});
          resolve(true);
        });
      });
    },
    addFeatures(item, _id_) {
      const id = _id_.replace(/yt_/g, "");
      const that = this;
      const { url } = item;
      const shallYT = this.$parent.$refs.leftOptions.tabIndex == 1;
      return new Promise((resolve, reject) => {
        loadModules(
          ["esri/layers/FeatureLayer", "esri/layers/MapImageLayer"],
          OPTION
        ).then(([FeatureLayer, MapImageLayer]) => {
          const option = { url, id: _id_, outFields: "*" };
          if (tipHash[id] && Hash[tipHash[id]]) {
            const _hash_ = Hash[tipHash[id]];
            option.popupTemplate = {
              content: `${
                id == "xq"
                  ? xqDetail(true)
                  : `<table class="esri-widget__table" summary="属性和值列表"><tbody>
            ${_hash_
              .map((k) => {
                return `<tr>
                    <th class="esri-feature__field-header">${k.label}</th>
                    <td class="esri-feature__field-data">{${k.fieldName}}</td>
                  </tr>`;
              })
              .join("")}
          </tbody></table>`
              }
          ${
            id == "qzbl"
              ? `<div class="bottomBtn mj_btn" data-val="{Name}">密切接触者分布</div>`
              : ``
          }
          ${
            id == "chanyePlate"
              ? `<div class="bottomBtn cp_btn" data-val="{名称}">相关信息分布</div>`
              : ``
          }
          ${
            id == "gld"
              ? `<div class="bottomBtn gld_btn" data-val="{Name}" data-val2="{Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "hmgld"
              ? `<div class="bottomBtn hmgld_btn" data-val="{Name}" data-val2="{Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "hqgld"
              ? `<div class="bottomBtn hqgld_btn" data-val="{Name}" data-val2="{Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "kfgld"
              ? `<div class="bottomBtn kfgld_btn" data-val="{Name}" data-val2="{Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "glmd"
              ? `<div class="bottomBtn gjmj_btn" data-val="{Name}">密切接触者分布</div>`
              : ``
          }
          ${
            id == "nj_qy"
              ? `<div class="bottomBtn njqy_btn" data-val="{CompanyName}">企业员工详情</div>`
              : ``
          }`,
            };
          }
          const _layers_ = item.isImg ? MapImageLayer : FeatureLayer;
          if (item.sublayers) {
            if (item.isImg) {
              option.sublayers = [{ id: item.sublayers }];
            } else {
              option.url = option.url + "/" + item.sublayers;
            }
          }

          if (id == "people_type_9") {
            option.definitionExpression = `IsOpening = '是'`;

            item.icon &&
              (option.renderer = {
                type: "simple",
                symbol: {
                  type: "picture-marker",
                  url: `${server}/icon/other/${item.icon}.png`,
                  width: "30px",
                  height: "32px",
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0],
              });

            const feature = new _layers_(option);
            that.map.add(feature);

            that.legend.layerInfos.push({
              title: "",
              layer: feature,
            });

            option.id = "people_type_9_2";

            option.definitionExpression = `IsOpening = '否'`;

            item.icon2 &&
              (option.renderer = {
                type: "simple", // autocasts as new SimpleRenderer()
                symbol: {
                  type: "picture-marker",
                  url: `${server}/icon/other/${item.icon2}.png`,
                  width: "30px",
                  height: "32px",
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0],
              });

            const feature2 = new _layers_(option);
            that.map.add(feature2);

            that.legend.layerInfos.push({
              title: "",
              layer: feature2,
            });
          } else {
            if (item.definitionExpression || shallYT) {
              const d = [];
              item.definitionExpression && d.push(item.definitionExpression);
              shallYT && item.ytd && d.push(item.ytd);
              if (item.isImg) {
                d.length && (option.sublayers[0].definitionExpression = d.join(" and "));
              } else {
                d.length && (option.definitionExpression = d.join(" and "));
              }
            }

            item.icon &&
              (option.renderer = {
                type: "simple",
                symbol: {
                  type: "picture-marker",
                  url: `${server}/icon/other/${item.icon}.png`,
                  width: "30px",
                  height: "32px",
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0],
              });

            const feature = new _layers_(option);
            that.map.add(feature);

            if (id != "wg" && id != "xq") {
              that.legend.layerInfos.push({
                title: "",
                layer: feature,
              });
            }
          }
          resolve(true);
        });
      });
    },
  },
};
</script>
<style scoped lang="less">
.Map {
  width: 100%;
  height: 100%;
  .arcgisMap {
    width: 100%;
    height: 100%;
  }
}
</style>
