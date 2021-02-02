<template>
  <div class="Map">
    <div :id="id" class="arcgisMap"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION, spatialReference, TDTZJ_cva, TDTZJ_vec } from "@/components/common/Tmap";
import { mapMutations } from "vuex";
import {
  doPointLayer,
  removeLayer,
  doImage,
  doImageAll,
  fetchFeatureByXhr,
} from "./Arcgis.js";

export default {
  name: "nCoVArcgis",
  data() {
    return {};
  },
  props: ["id"],
  created() {
    window.featureMap = {};
  },
  async mounted() {
    await this.createMap();
    this.mapEventRegister();
    this.eventRegister();
    this.defaultLayers();
    this.domUpdate();
    this.updateMapState(true);
  },
  methods: {
    ...mapMutations(["updateMapState"]),
    domUpdate() {
      $(".esri-mytitle").remove();
      $(".esri-legend").prepend(
        '<div class="esri-legend__message esri-mytitle">图例</div>'
      );
    },
    /** once */
    defaultLayers() {
      setTimeout(() => {
        this.$hub.$emit("arcgis-map-default");
        doImageAll(this);
      }, 500);
    },
    eventRegister() {
      //  菜单点击
      this.$hub.$on("document-checkbox", (arr) => {
        arr.map((v) => {
          doPointLayer(this, v);
          window.featureMap[v] = true;
        });
        Object.keys(window.featureMap).map((v) => {
          !~arr.indexOf(v) && removeLayer(this, v);
          window.featureMap[v] = false;
        });
      });
      //  底图切换
      this.$hub.$on("arcgis-map-image-change", (obj) => doImage(this, obj));
      //  图例收缩
      this.$hub.$on("hide_click", (val) => {
        document.querySelector(".esri-ui-bottom-right").style.right = val ? 0 : "410px";
        document.getElementById("btnDiv").style.right = val ? "200px" : "600px";
      });
      //  表格点击定位
      this.$hub.$on("set-detail-location", ({ config, row }) => {
        fetchFeatureByXhr(this, config, row);
      });
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
            "esri/layers/WebTileLayer",
          ],
          OPTION
        ).then(([Map, MapView, Legend, WebTileLayer]) => {
          // map加载底图
          that.map = new Map({
            spatialReference,
          });
          //设置地图容器
          that.view = new MapView({
            container: that.$props.id,
            map: that.map,
            zoom: 14,
            center: [119.921786, 28.461993],
          });
          that.view.constraints = { maxZoom: 18, minZoom: 4 };
          //  地图叠加
          const tiledLayer = new WebTileLayer(TDTZJ_vec);
          const tiledLayerAnno = new WebTileLayer(TDTZJ_cva);
          that.map.add(tiledLayer);
          that.map.add(tiledLayerAnno);
          //  图例添加
          that.legend = new Legend({ label: "图例", view: that.view });
          that.view.ui.add(that.legend, "bottom-right");
          resolve(true);
        });
      });
    },
    mapEventRegister() {
      this.view.when(() => {
        this.view.popup.watch("selectedFeature", (graphic) => {
          if (graphic) {
            const graphicTemplate = graphic.getEffectivePopupTemplate();
            if (graphicTemplate.actions)
              graphicTemplate.actions.items[0].visible = graphic.attributes.video_url;
          }
        });
      });
      this.view.when(() => {
        const popup = this.view.popup;
        popup.viewModel.on("trigger-action", (event) => {
          if (event.action.id === "feature-video-overview") {
            this.$hub.$emit(
              "arcgis-popup-video",
              popup.viewModel.selectedFeature.attributes
            );
          }
        });
      });
    },
  },
};
</script>
<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.Map {
  width: 100%;
  height: 100%;
  .arcgisMap {
    width: 100%;
    height: 100%;
  }
}
</style>
