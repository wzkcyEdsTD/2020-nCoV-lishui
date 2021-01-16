<template>
  <div class="Map">
    <div :id="id" class="arcgisMap"></div>
  </div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { OPTION, spatialReference, TDTZJ_cva, TDTZJ_vec } from "@/components/common/Tmap";
import { mapState } from "vuex";
import { doPointLayer, removeLayer } from "./Arcgis.js";

export default {
  name: "nCoVArcgis",
  data() {
    return {
      doFrame: false,
      doTl: true,
    };
  },
  props: ["id"],
  created() {
    window.featureMap = {};
  },
  async mounted() {
    await this.createMap();
    this.eventRegister();
    this.defaultLayers();
  },
  watch: {
    dataDone(n) {
      n && this.defaultLayers();
    },
  },
  methods: {
    /** once */
    defaultLayers() {
      this.$hub.$emit("arcgis-map-default");
    },
    eventRegister() {
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
      //  图例收缩
      this.$hub.$on("hide_click", (val) => {
        document.querySelector(".esri-ui-bottom-right").style.right = val ? 0 : "410px";
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
            "esri/layers/WebTileLayer", //  TileLayer
          ],
          OPTION
        ).then(([Map, MapView, Legend, WebTileLayer]) => {
          // map加载底图
          that.map = new Map({ spatialReference });
          //设置地图容器
          that.view = new MapView({
            container: that.$props.id,
            map: that.map,
            zoom: 13,
            center: [119.921786, 28.451993],
          });
          //  图例添加
          that.legend = new Legend({ view: that.view, style: "classic" });
          that.view.ui.add(that.legend, "bottom-right");
          // //  地图叠加
          var tiledLayer = new WebTileLayer(TDTZJ_vec);
          var tiledLayerAnno = new WebTileLayer(TDTZJ_cva);
          that.map.add(tiledLayer);
          that.map.add(tiledLayerAnno);
          resolve(true);
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
