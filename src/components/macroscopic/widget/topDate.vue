<template>
  <div id="topDateDiv">
    <ul>
      <li>
        <h4>
          较上日
          <span style="color:#ff283a">{{$window.nCov_luchengData.macroscopic.lc.add_qzbl}}</span>
        </h4>
        <h3 style="color:#ff283a">{{$window.nCov_luchengData.macroscopic.lc.qzbl}} 人</h3>
        <p>确诊病例</p>
      </li>
      <li>
        <h4>
          较上日
          <span style="color:#fcc659">{{$window.nCov_luchengData.macroscopic.lc.add_zzbl}}</span>
        </h4>
        <h3 style="color:#fcc659">{{$window.nCov_luchengData.macroscopic.lc.zzbl}} 人</h3>
        <p>疑似病例</p>
      </li>
      <li>
        <h4>
          较上日
          <span style="color:#f6e31b">{{$window.nCov_luchengData.macroscopic.add_death}}</span>
        </h4>
        <h3 style="color:#f6e31b">{{$window.nCov_luchengData.macroscopic.death}} 人</h3>
        <p>死亡人数</p>
      </li>
      <li>
        <h4>
          较上日
          <span style="color:#1eff95">{{$window.nCov_luchengData.macroscopic.add_cure}}</span>
        </h4>
        <h3 style="color:#1eff95">{{$window.nCov_luchengData.macroscopic.cure}} 人</h3>
        <p>治愈人数</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#topDateDiv {
  position: absolute;
  top: 90px;
  width: 100%;
  z-index: 20;

  ul li {
    width: 5%;
    margin: auto;
    display: inline-block;
    background-color: #1b45a7;
    border: 1px solid #07e2e8;
    margin-left: 10px;
    padding: 5px 9px;
    color: #07e2e8;
  }
}
</style>