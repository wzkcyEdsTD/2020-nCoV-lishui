<template>
<div class="form" v-if="list.length">
  <head>
    <span class="title">{{ title != "" ? `[ ${title} ] - 员工详情` : "企业员工详情" }}</span>
    <span id="close" @click="()=>{list = []}">x</span>
  </head>
  <div>
    <div class="list">
      <div>
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="goLocation(item)">
            <span>{{++index}}. {{ item.attributes.姓名?`${item.attributes.姓名.trim().substr(0,1)}*${item.attributes.姓名.trim().substr(-1,1)}`:"无" }}, {{item.attributes.性别}}, {{item.attributes.籍贯}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "queryForm",
  data() {
    return {
      title: "",
      list: []
    };
  },
  mounted() {},
  methods: {
    goLocation(item) {
      item.geometry && this.$parent.$refs.macroArcgis.goloaction(item);
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  position: absolute;
  width: 400px;
  height: 720px;
  background: #24386a;
  border: 1px solid #04ecff;
  border-radius: 6px;
  z-index: 30;
  top: 18%;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: all 1s;

  head {
    display: block;
    box-sizing: border-box;
    padding: 5px;
    height: 60px;
    font-size: 20px;
  }
  #close {
    position: absolute;
    right: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  .imgDiv {
    text-align: center;

    span {
      line-height: 40px;
      font-size: 17px;
      font-weight: bolder;
    }
    img {
      width: 100%;
    }
  }

  > div {
    flex: 1;
    .list {
      height: 640px;
      overflow: auto;
      text-align: left;

      div .type {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 17px;
        font-weight: bolder;
      }

      ul {
        li {
          padding: 10px 0;
          background: #122960;
          text-align: left;
          padding-left: 15px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          cursor: pointer;
        }
        li:nth-child(even) {
          background: #081942;
        }
      }
    }
    .list::-webkit-scrollbar {
      display: block;
      width: 6px;
      background-color: rgb(50, 95, 245);
      border-radius: 3px;
    }
    .list::-webkit-scrollbar-thumb {
      width: 6px;
      background-color: rgb(32, 28, 243);
      border-radius: 3px;
    }
  }
}
</style>