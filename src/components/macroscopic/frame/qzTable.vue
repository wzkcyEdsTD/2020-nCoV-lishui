<template>
  <div
    id="qzTable"
    style="position: absolute;width:600px;height: 300px;background: rgba(36, 57,104, 0.9);border: 1px solid #04ecff;z-index: 20;top: 18%;overflow: hidden;overflow-y: auto;"
    v-show="qzTableShow"
  >
    <span style="font-size: 20px;margin-top: 2px;display: inline-block;">圈主信息</span>
    <span
      id="close"
      @click="()=>{this.qzTableShow=false}"
      style="float: right;padding: 0px 5px;font-size: 17px;cursor: pointer;"
    >x</span>
    <div id="qztableCentent">
      <table border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th>街道联系人</th>
            <td>张三：2957596759</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>街道负责人</th>
            <td>张三：2957596759</td>
          </tr>
          <tr>
            <th>责任民警</th>
            <td>张三：2957596759</td>
          </tr>
          <tr>
            <th>社区负责人</th>
            <td>张三：2957596759</td>
          </tr>
          <tr>
            <th>卫检负责人</th>
            <td>张三：2957596759</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qzTableShow: false //弹出框默认隐藏
    };
  },
  methods: {
    qzTableFun() {
      this.qzTableShow = true; //弹出框默认隐藏
    }
  }
};
</script>

<style>
#qzTable {
  transition: all 1s;
}

#qztableCentent {
  width: 94%;
  margin-top: 2%;
  margin-left: 3%;
}
#qztableCentent p {
  width: 87%;
  padding: 5px 12px;
  text-align: left;
  /* border-bottom: 1px dashed #fff; */
}

#qztableCentent table {
  width: 100%;
}

#qztableCentent td {
  text-align: left;
}
#qztableCentent tr:nth-child(even) {
  background-color: #081942;
}
#qztableCentent tr:nth-child(odd) {
  background-color: #243968;
}
#qztableCentent th {
  border-right: 3px solid rgba(0, 0, 0, 0.1);
}
#qztableCentent td,
#qztableCentent th {
  /* border: 1px solid #fff; */
  padding: 10px 10px;
}
</style>