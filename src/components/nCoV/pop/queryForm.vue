<template>
<div class="form" v-if="list.length">
  <head>
    <span class="title">{{ title != "" ? `[ ${title} ] - 防疫空间分析` : "空间查询结果" }}</span>
    <span id="close" @click="()=>{list = []}">x</span>
  </head>
  <div>
    <div class="list">
      <div class="imgDiv" v-if="imgHash[title]">
        <span>卡点照片</span>
        <img
          v-for="index of imgHash[title]"
          :key="index"
          :src="`${server}/icon/卡点照片/${title}/${index}.jpg`"
        />
      </div>
      <div v-for="(item,index) in list" :key="index" v-show="item.value && item.value.length">
        <div class="type">{{item.type}}</div>
        <ul v-if="item.type != '集中医学观察点'">
          <li v-for="(_item,_index) in item.value" :key="_index" @click="goLocation(_item)">
            <span>{{++_index}}. {{_item.attributes.Name?`${_item.attributes.Name.substr(0,1)}*${_item.attributes.Name.substr(-1,1)}`:(_item.attributes.NAME?`${_item.attributes.NAME.substr(0,1)}*${_item.attributes.NAME.substr(-1,1)}`:"**")}}, {{_item.attributes.Country}}, {{_item.attributes.Address}}</span>
          </li>
        </ul>

        <ul v-else>
          <li v-for="(_item,_index) in item.value" :key="_index" @click="goLocation(_item)">
            <span>{{++_index}}. {{_item.attributes.Name}}, {{_item.attributes.Address}}, {{_item.attributes.Address}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
const server = "http://172.20.89.88:5001/s";
import { imgHash } from "../config/hash";
export default {
  name: "queryForm",
  data() {
    return {
      server,
      imgHash,
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
    height: 45px;
    font-size: 20px;

    .title {
      margin-left: 17px;
    }
  }
  #close {
    float: right;
    padding: 0px 5px;
    font-size: 17px;
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
      height: 660px;
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