<template>
  <div id="btnDiv">
    <ul>
      <li @click="doImage('qx')" :class="{ active: qx }">区县</li>
      <li @click="doImage('jd')" :class="{ active: jd }">乡镇街道</li>
      <li @click="doImage('cs')" :class="{ active: cs }">行政村社区</li>
      <li @click="doImage('wg')" :class="{ active: wg }">网格</li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
const hash = { qx: 0, jd: 1, cs: 2, wg: 3 };

export default {
  name: "bottomBtn",
  data() {
    return { qx: false, jd: false, cs: false, wg: false };
  },
  mounted() {
    this.doImage("qx");
  },
  methods: {
    doImage(key) {
      const id = hash[key];
      //  反选
      this[key] = !this[key];
      this.$nextTick(() => {
        this.$hub.$emit("arcgis-map-image-change", { key, id, boolean: this[key] });
      });
    },
  },
};
</script>

<style lang="less" scoped>
#btnDiv {
  position: absolute;
  bottom: 30px;
  right: 600px;
  z-index: 2;
  transition: all 1s;
  > ul {
    > li {
      position: relative;
      height: 40px;
      line-height: 40px;
      list-style: none;
      float: left;
      background-color: #243968;
      border: 1px solid #05fff8;
      margin-left: 5px;
      padding: 0 10px;
      cursor: pointer;
      overflow: hidden;
    }

    .active {
      background-color: #0754e2;
      color: #fff;
    }

    .hover {
      width: 140px;
      .subList {
        li:hover {
          background-color: #0754e2;
          color: #fff;
        }
      }
    }

    .hover:hover {
      overflow: visible;
    }
  }
}
</style>
