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
  mjChartUpdate_gj
} from "./frame/mjArcgis";
import {
  getGLDList,
  getHMGLDList,
  getHQGLDList,
  getKFGLDList,
  getNJQYList
} from "./frame/gldArcgis";
import { linkCPFeatures } from "./frame/streetArcgis";
import {
  linkXQFeatures,
  linkXQ_ENTERFeatures,
  xqDetail
} from "./frame/xqArcgis";
import { loadModules } from "esri-loader";
import {
  OPTION,
  spatialReference,
  QHMB,
  IMAGELAYER,
  TDTIMAGE2017,
  TDTDSJ
} from "@/components/common/Tmap";
import { tipHash, Hash } from "./config/hash.js";
import { noShowFields } from "./config/field.js";

export default {
  name: "MacroscopicArcgis",
  data() {
    return {};
  },
  components: {},
  props: {
    id: String,
    leftOptions: Array
  },

  created() {},
  async mounted() {
    const that = this;
    /**init map**/
    await this.createMap();
    // await this.addQh();
    // await this.addmbk();
    await this.addChanyePlate();

    // 添加图例标题
    $(".esri-mytitle").remove();
    $(".esri-legend").prepend(
      '<div class="esri-legend__message esri-mytitle">图例</div>'
    );

    this.$props.leftOptions &&
      this.$props.leftOptions.map(_item => {
        _item.children.map(item => {
          item.id && that.doFun(item);
        });
      });
    this.jQueryBind();
    this.spaceQuery();
    this.polygonQuery();
  },
  watch: {
    leftOptions: {
      handler(newVal, val) {
        const that = this;
        if (!that.map) return;
        newVal.map(_item => {
          _item.children.map(item => {
            item.id && that.doFun(item);
          });
        });
      },
      deep: true
    }
  },
  methods: {
    /**
     * 数、组勾选触发图层寻找
     * @param {Object} item 单个元素
     */
    doFun(item) {
      const shallYT = this.$parent.$refs.leftOptions.tabIndex == 1;
      const _id_ = (shallYT ? "yt_" : "") + item.id;
      if (item.check) {
        this.map && this.map.findLayerById(_id_)
          ? (this.map.findLayerById(_id_).visible = true)
          : this.addFeatures(item, _id_);
        this.map && this.map.findLayerById("fangkong")
          ? (this.map.findLayerById("fangkong").visible = false)
          : null;
      } else {
        this.map && this.map.findLayerById(item.id)
          ? (this.map.findLayerById(item.id).visible = false)
          : null;
        this.map && this.map.findLayerById("yt_" + item.id)
          ? (this.map.findLayerById("yt_" + item.id).visible = false)
          : null;
        if (item.id == "qzbl") {
          this.map &&
            this.map.findLayerById("mj_link") &&
            this.map.remove(this.map.findLayerById("mj_link"));
        }
        if (item.id == "chanyePlate") {
          ["cp_qzbl", "cp_zzbl", "cp_mj"].map(_id_ => {
            this.map &&
              this.map.findLayerById(_id_) &&
              this.map.remove(this.map.findLayerById(_id_));
          });
        }
        if (item.id == "xq") {
          ["xq_qzbl", "xq_zzbl", "xq_mj"].map(_id_ => {
            this.map &&
              this.map.findLayerById(_id_) &&
              this.map.remove(this.map.findLayerById(_id_));
          });
        }
        // 农贸市场
        if (item.id == "people_type_9") {
          ["people_type_9", "people_type_9_2"].map(_id_ => {
            this.map &&
              this.map.findLayerById(_id_) &&
              this.map.remove(this.map.findLayerById(_id_));
          });
        }
      }
    },
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
            "esri/layers/TileLayer"
          ],
          OPTION
        ).then(([Map, MapView, Legend, VectorTileLayer]) => {
          // map加载底图
          that.map = new Map({
            spatialReference
          });
          //设置地图容器
          that.view = new MapView({
            container: that.$props.id,
            spatialReference,
            map: that.map,
            zoom: 13,
            center: [120.67819448808013, 28.039695289562555]
          });
          const layer = new VectorTileLayer({
            url: IMAGELAYER
          });
          that.map.add(layer);
          that.legend = new Legend({
            label: "图例",
            view: that.view
          });
          that.view.ui.add(that.legend, "bottom-left");
          that.view.on("click", function(evt) {});
          resolve(true);
        });
      });
    },
    jQueryBind() {
      const context = this;
      //  密切接触者详情
      $("body").on("click", ".mj_btn", function() {
        const val = $(this).attr("data-val");
        addQZLinkFeature(context, val);
        mjChartUpdate(context, val);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  街道疫情分布
      $("body").on("click", ".cp_btn", function() {
        const val = $(this).attr("data-val");
        linkCPFeatures(context, val);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  国际专题密接
      $("body").on("click", ".gjmj_btn", function() {
        const val = $(this).attr("data-val");
        addQZLinkFeature_gj(context, val);
        mjChartUpdate_gj(context, val);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  小区卡口分布
      $("body").on("click", ".xq_enter_btn", function() {
        const val = $(this).attr("data-val");
        linkXQ_ENTERFeatures(context, val);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  隔离点人员详情
      $("body").on("click", ".gld_btn", function() {
        const name = $(this).attr("data-val");
        const bid = $(this).attr("data-val2");
        getGLDList(context, name, bid);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  红码隔离点人员详情
      $("body").on("click", ".hmgld_btn", function() {
        const name = $(this).attr("data-val");
        const bid = $(this).attr("data-val2");
        // console.log(name, bid);
        getHMGLDList(context, name, bid);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  华侨隔离点人员详情
      $("body").on("click", ".hqgld_btn", function() {
        const name = $(this).attr("data-val");
        const bid = $(this).attr("data-val2");
        // console.log(name, bid);
        getHQGLDList(context, name, bid);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  康复隔离点人员详情
      $("body").on("click", ".kfgld_btn", function() {
        const name = $(this).attr("data-val");
        const bid = $(this).attr("data-val2");
        // console.log(name, bid);
        getKFGLDList(context, name, bid);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
      //  三返企业员工
      $("body").on("click", ".njqy_btn", function() {
        const val = $(this).attr("data-val");
        getNJQYList(context, val);
        context.$parent.leftHidden();
        context.$parent.legend();
      });
    },
    //  添加区划图
    addQh() {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(["esri/layers/MapImageLayer"], OPTION).then(
          ([MapImageLayer]) => {
            const qh = new MapImageLayer({
              url: QHMB,
              id: "lcjjdt",
              sublayers: [{ id: 3 }, { id: 0 }]
            });
            that.map.add(qh, 4);
            resolve(true);
          }
        );
      });
    },
    // 定位
    goloaction({
      id,
      attributes,
      geometry,
      fieldAliases,
      highWayList,
      qzblList,
      mjList
    }) {
      const that = this;
      let x = geometry.x,
        y = geometry.y;
      if (geometry.rings) {
        let x_ = 0,
          y_ = 0;
        geometry.rings[0].map(item => {
          x_ += item[0];
          y_ += item[1];
        });
        x = x_ / geometry.rings[0].length;
        y = y_ / geometry.rings[0].length;
      }
      that.view.goTo({
        center: [x, y + 0.04],
        zoom: 13
      });
      that.view.popup = {
        title: "",
        content: `${
          id == "xq"
            ? xqDetail(false, attributes)
            : `<table class="esri-widget__table" summary="属性和值列表"><tbody>
            ${Object.keys(attributes)
              .filter(k => {
                if (id == "clinic_type_3" || id == "clinic_type_5") {
                  return ~["SHORTNAME", "ADDRESS", "TYPE", "PHONE"].indexOf(k);
                } else {
                  return noShowFields.indexOf(k) < 0;
                }
              })
              .map(k => {
                return `<tr>
                  <th class="esri-feature__field-header">${
                    fieldAliases[k] == "Phone"
                      ? "联系方式"
                      : fieldAliases[k] == "Name"
                      ? "名称"
                      : fieldAliases[k] == "Country"
                      ? "街道"
                      : fieldAliases[k] == "Address"
                      ? "地址"
                      : fieldAliases[k] == "Note"
                      ? "备注"
                      : fieldAliases[k] == "GLD"
                      ? "隔离点"
                      : fieldAliases[k]
                  }</th>
                  <td class="esri-feature__field-data">${attributes[k] ||
                    ""}</td>
                </tr>`;
              })
              .join("")}
          </tbody></table>`
        }
          ${
            id == "qzbl"
              ? `<div class="bottomBtn mj_btn" data-val="${attributes.Name}">密切接触者分布</div>`
              : ``
          }
          ${
            id == "chanyePlate"
              ? `<div class="bottomBtn cp_btn" data-val="${attributes.名称}">疫情信息分布</div>`
              : ``
          }
          ${
            id == "gld"
              ? `<div class="bottomBtn gld_btn" data-val="${attributes.Name}" data-val2="${attributes.Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "hmgld"
              ? `<div class="bottomBtn hmgld_btn" data-val="${attributes.Name}" data-val2="${attributes.Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "hqgld"
              ? `<div class="bottomBtn hqgld_btn" data-val="${attributes.Name}" data-val2="${attributes.Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "kfgld"
              ? `<div class="bottomBtn kfgld_btn" data-val="${attributes.Name}" data-val2="${attributes.Bid}">观察点人员详情</div>`
              : ``
          }
          ${
            id == "glmd"
              ? `<div class="bottomBtn gjmj_btn" data-val="${attributes.Name}">密切接触者分布</div>`
              : ``
          }
          ${
            id == "nj_qy"
              ? `<div class="bottomBtn njqy_btn" data-val="${attributes.CompanyName}">企业员工详情</div>`
              : ``
          }
          ${
            // id == "xq"
            //   ? `<div class="bottomBtn xq_btn" data-val="${attributes.name}">进出人员统计</div>`
            //   : ``··
            ``
          }
          ${
            // 街镇病例额外添加
            qzblList
              ? qzblList
                  .map(item => {
                    return `<div><p>${
                      item.attributes.Name
                    }</p><table class="esri-widget__table" summary="值班表"><tbody>
            ${Object.keys(item.attributes)
              .filter(k => {
                return ["Bid", "OBJECTID", "Name"].indexOf(k) < 0;
              })
              .map(k => {
                return `<tr>
                  <th class="esri-feature__field-header">${item.fieldAliases[
                    k
                  ] || k}</th>
                  <td class="esri-feature__field-data">${item.attributes[k] ||
                    "无"}</td>
                </tr>`;
              })
              .join("")}
            </tbody></table></div>`;
                  })
                  .join("")
              : ``
          }`,
        location: [x, y]
      };
      that.view.popup.alignment = "top-center";
      that.view.popup.visible = true;
    },
    // 蒙白
    addmbk() {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(["esri/layers/MapImageLayer"], OPTION).then(
          ([MapImageLayer]) => {
            const mbk = new MapImageLayer({
              url: QHMB,
              id: "mbk",
              sublayers: [{ id: 1 }]
            });
            that.map.add(mbk, 4);
            resolve(true);
          }
        );
      });
    },
    //产业板块
    addChanyePlate() {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(["esri/layers/MapImageLayer"], OPTION).then(
          ([MapImageLayer]) => {
            const chanyePlate = new MapImageLayer({
              url:
                "http://172.20.89.7:6082/arcgis/rest/services/lucheng/xzjd_ws/MapServer",
              id: "chanyePlate",
              opacity: 1
            });
            //  优先级置顶
            that.map.add(chanyePlate, 2);
            that.legend.layerInfos.push({
              title: "五色风险评估",
              layer: chanyePlate
            });
            resolve(true);
          }
        );
      });
    },
    romoveLayer() {
      this.map.findLayerById("chanyePlate").visible = !this.map.findLayerById(
        "chanyePlate"
      ).visible;
    },
    // 影像图
    yxt() {
      const that = this;
      if (this.map.findLayerById("dsj")) {
        this.map.findLayerById("dsj").visible = false;
      }
      if (this.map.findLayerById("img")) {
        this.map.findLayerById("img").visible = !this.map.findLayerById("img")
          .visible;
      } else {
        return new Promise((resolve, reject) => {
          loadModules(["esri/layers/TileLayer"], OPTION).then(([TileLayer]) => {
            const imgLayer = new TileLayer({
              url: TDTIMAGE2017,
              id: "img"
            });
            //  优先级置顶
            that.map.add(imgLayer, 1);
            that.legend.layerInfos.push({
              layer: imgLayer
            });
            resolve(true);
          });
        });
      }
    },
    // 矢量图
    slt() {
      if (this.map.findLayerById("dsj")) {
        this.map.findLayerById("dsj").visible = false;
      }
      if (this.map.findLayerById("img")) {
        this.map.findLayerById("img").visible = false;
      }
    },
    // 夜光图
    ygt() {
      const that = this;
      if (this.map.findLayerById("img")) {
        this.map.findLayerById("img").visible = false;
      }
      if (this.map.findLayerById("dsj")) {
        this.map.findLayerById("dsj").visible = !this.map.findLayerById("dsj")
          .visible;
      } else {
        return new Promise((resolve, reject) => {
          loadModules(["esri/layers/VectorTileLayer"], OPTION).then(
            ([VectorTileLayer]) => {
              const vecLayer = new VectorTileLayer({
                url: TDTDSJ,
                id: "dsj"
              });
              //  优先级置顶
              that.map.add(vecLayer, 1);
              that.legend.layerInfos.push({
                layer: vecLayer
              });
              resolve(true);
            }
          );
        });
      }
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
              .map(k => {
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
          }`
            };
          }

          // ${
          //   id == "xq"
          //     ? `<div class="bottomBtn xq_btn" data-val="{name}">相关信息分布</div>`
          //     : ``
          // }

          const _layers_ = item.isImg ? MapImageLayer : FeatureLayer;
          if (item.sublayers) {
            if (item.isImg) {
              option.sublayers = [{ id: item.sublayers }];
            } else {
              option.url = option.url + "/" + item.sublayers;
            }
          }
          /* if (item.definitionExpression || shallYT) {
            const d = [];
            item.definitionExpression && d.push(item.definitionExpression);
            shallYT && item.ytd && d.push(item.ytd);
            if (item.isImg) {
              d.length &&
                (option.sublayers[0].definitionExpression = d.join(" and "));
            } else {
              d.length && (option.definitionExpression = d.join(" and "));
            }
          } */

          if (id == "people_type_9") {
            option.definitionExpression = `IsOpening = '是'`;

            item.icon &&
              (option.renderer = {
                type: "simple",
                symbol: {
                  type: "picture-marker",
                  url: `${server}/icon/other/${item.icon}.png`,
                  width: "30px",
                  height: "32px"
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0]
              });

            const feature = new _layers_(option);
            that.map.add(feature);

            that.legend.layerInfos.push({
              title: "",
              layer: feature
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
                  height: "32px"
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0]
              });

            const feature2 = new _layers_(option);
            that.map.add(feature2);

            that.legend.layerInfos.push({
              title: "",
              layer: feature2
            });
          } else {
            if (item.definitionExpression || shallYT) {
              const d = [];
              item.definitionExpression && d.push(item.definitionExpression);
              shallYT && item.ytd && d.push(item.ytd);
              if (item.isImg) {
                d.length &&
                  (option.sublayers[0].definitionExpression = d.join(" and "));
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
                  height: "32px"
                },
                label:
                  item.name != "-1"
                    ? `${item.name}`.split(" ")[0]
                    : `${item.ytname}`.split(" ")[0]
              });

            const feature = new _layers_(option);
            that.map.add(feature);

            if (id != "wg" && id != "xq") {
              that.legend.layerInfos.push({
                title: "",
                layer: feature
              });
            }
          }
          resolve(true);
        });
      });
    },

    // 点击面查询
    polygonQuery() {
      const that = this;
      that.view.on("click", function(evt) {
        that.cleanQuery();
        if (
          (that.map.findLayerById("wg") &&
            that.map.findLayerById("wg").visible) ||
          (that.map.findLayerById("xq") && that.map.findLayerById("xq").visible)
        ) {
          that.view.hitTest(evt).then(function(response) {
            const spaceGraphicsLayer = that.map.findLayerById("spaceLayer");

            const ds = response.results[0].graphic;

            that.$parent.$refs.queryForm.title = ds.attributes.Name
              ? ds.attributes.Name + "社区"
              : ds.attributes.name;

            that.queryAll(spaceGraphicsLayer, ds);
          });
        }
      });
    },
    //  监听热力图
    changeHeat(id, checked) {
      if (!this.map) return;
      if (id == "jjgl") {
        this.map && this.map.findLayerById("heat7")
          ? (this.map.findLayerById("heat7").visible = checked)
          : checked == false
          ? null
          : this.addHeat(7);
      } else if (id == "hbhw") {
        this.map && this.map.findLayerById("heat9")
          ? (this.map.findLayerById("heat9").visible = checked)
          : checked == false
          ? null
          : this.addHeat(9);
      }
    },
    // 添加热力图
    addHeat(sublayers) {
      const that = this;
      loadModules(
        ["esri/layers/FeatureLayer", "esri/renderers/HeatmapRenderer"],
        OPTION
      ).then(([FeatureLayer, HeatmapRenderer]) => {
        const heatmapRenderer = new HeatmapRenderer({
          blurRadius: 6,
          colorStops: [
            { ratio: 0, color: "rgba(0, 255, 0, 0)" },
            { ratio: 0.02, color: "rgb(34, 151, 143)" },
            { ratio: 0.04, color: "rgb(0, 255, 0)" },
            { ratio: 0.06, color: "rgb(50, 255, 0)" },
            { ratio: 0.08, color: "rgb(250, 255, 0)" },
            { ratio: 0.1, color: "rgb(255, 205, 0)" },
            { ratio: 0.12, color: "rgb(255, 150, 0)" },
            { ratio: 0.14, color: "rgb(255, 95, 0)" },
            { ratio: 0.16, color: "rgb(255, 40, 0)" },
            { ratio: 0.2, color: "rgb(255, 0, 0)" }
          ],
          maxPixelIntensity: 100,
          minPixelIntensity: 1
        });
        const heat = new FeatureLayer({
          url: `http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/${sublayers}`,
          id: `heat${sublayers}`,
          renderer: heatmapRenderer,
          opacity: 0.7
        });
        that.map.add(heat, 4);
      });
    },
    // 移除热力图
    removeHeat() {
      const that = this;
      that.map &&
        that.map.findLayerById("heat7") &&
        that.map.remove(that.map.findLayerById("heat7"));
      that.map &&
        that.map.findLayerById("heat9") &&
        that.map.remove(that.map.findLayerById("heat9"));
    },
    // 空间查询
    spaceQuery() {
      const that = this;
      loadModules(
        [
          "esri/Graphic",
          "esri/widgets/Sketch/SketchViewModel",
          "esri/layers/GraphicsLayer",
          "esri/geometry/Circle",
          "esri/geometry/Point"
        ],
        OPTION
      ).then(([Graphic, SketchViewModel, GraphicsLayer, Circle, Point]) => {
        let spaceGraphicsLayer = that.map.findLayerById("spaceLayer");
        if (!spaceGraphicsLayer) {
          spaceGraphicsLayer = new GraphicsLayer({
            id: "spaceLayer"
          });
          that.map.add(spaceGraphicsLayer);
        }
        // 绘制多边形
        that.sketchViewModel = new SketchViewModel({
          updateOnGraphicClick: false,
          view: that.view,
          layer: spaceGraphicsLayer,
          polylineSymbol: {
            type: "simple-line",
            color: "#0000ff",
            width: "1",
            style: "dash"
          },
          polygonSymbol: {
            type: "simple-fill",
            color: "rgba(0, 0, 255, 0.2)",
            style: "solid",
            outline: {
              color: "white",
              width: 1
            }
          }
        });
        that.sketchViewModel.on("create", function(event) {
          if (
            event.tool == "polyline" &&
            event.graphic.geometry.paths[0].length == 3
          ) {
            event.graphic.geometry.paths[0].length = 2;
            that.sketchViewModel.complete();
            const p1 = event.graphic.geometry.paths[0][0];
            const p2 = event.graphic.geometry.paths[0][1];
            const circleCenter = new Point({
              x: p1[0],
              y: p1[1]
            });
            const circle = new Circle({
              center: circleCenter,
              radius:
                Math.sqrt(
                  Math.pow(p2[0] - p1[0], 2) + Math.pow(p2[1] - p1[1], 2)
                ) * 111000
            });
            const circleGraphic = new Graphic({
              geometry: circle,
              symbol: {
                type: "simple-fill",
                color: [0, 0, 255, 0.2],
                outline: {
                  color: [255, 255, 255],
                  width: 2
                }
              }
            });
            spaceGraphicsLayer.add(circleGraphic);
            that.queryAll(spaceGraphicsLayer, circleGraphic);
          }
          if (event.tool == "polygon" && event.state === "complete") {
            that.queryAll(spaceGraphicsLayer, event.graphic);
          }
        });
      });
    },
    // 多边形查询
    doSpaceQuery() {
      this.cleanQuery();
      this.$parent.$refs.queryForm.list = [];
      this.sketchViewModel.create("polygon");
    },
    // 圆形查询
    doCircleQuery() {
      this.cleanQuery();
      this.$parent.$refs.queryForm.list = [];
      this.sketchViewModel.create("polyline");
    },
    // 清除空间查询图层
    cleanQuery() {
      this.map.findLayerById("spaceLayer") &&
        this.map.findLayerById("spaceLayer").removeAll();
    },
    // 查询全部
    queryAll(spaceGraphicsLayer, graphic) {
      const that = this;
      that.$parent.$refs.queryForm.list = [];
      const queryHash = {
        确诊病例: [
          "确诊病例",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/0"
        ],
        疑似病例: [
          "疑似病例",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/1"
        ],
        集中医学观察点: [
          "治愈",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/2"
        ],
        集中医学观察点人员名单: [
          "治愈",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/paiban/MapServer/5"
        ],
        密切接触者: [
          "密接",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/5"
        ],
        居家隔离人员: [
          "死亡",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/7"
        ],
        湖北回鹿人员信令: [
          "湖北回温",
          "http://172.20.89.7:6082/arcgis/rest/services/lucheng/fangkong/MapServer/9"
        ]
      };

      Object.entries(queryHash).map(item => {
        const type = item[0];
        const icon = item[1][0];
        const url = item[1][1];
        that.querySingle(type, url, icon, spaceGraphicsLayer, graphic);
      });

      that.$parent.leftHidden();
      that.$parent.legend();
    },
    // 单独查询
    querySingle(type, url, icon, spaceGraphicsLayer, graphic) {
      const that = this;
      return new Promise((resolve, reject) => {
        loadModules(
          ["esri/tasks/QueryTask", "esri/tasks/support/Query", "esri/Graphic"],
          OPTION
        ).then(([QueryTask, Query, Graphic]) => {
          const queryTask = new QueryTask({
            url: url
          });
          const query = new Query();
          query.outFields = ["*"];
          query.where = "1=1";
          query.extent = graphic.geometry.extent;
          query.geometry = graphic.geometry;
          query.returnGeometry = true;
          queryTask.execute(query).then(res => {
            const fieldAliases = {};
            res.fields.map(item => {
              fieldAliases[item.name] = item.alias;
            });
            res.features.length &&
              res.features.map(item => {
                const pointGraphic = new Graphic({
                  geometry: item.geometry,
                  symbol: {
                    type: "picture-marker",
                    url: `${server}/icon/other/${icon}.png`,
                    width: "30px",
                    height: "32px",
                    yoffset: 10
                  }
                });
                spaceGraphicsLayer.add(pointGraphic);
                item.fieldAliases = fieldAliases;
                return item;
              });

            if (res.features.length) {
              that.$parent.$refs.queryForm.list.push({
                type: type,
                value: [...res.features]
              });
            }

            resolve(true);
          });
        });
      });
    }
  }
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