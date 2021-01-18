<template>
  <div id="top-date">
    <ul class="four-kind-people">
      <li>
        <h4>
          较上日
          <span style="color: #ff283a">{{
            $window.nCov_luchengData.macroscopic.lc.add_qzbl
          }}</span>
        </h4>
        <h3 style="color: #ff283a">
          <p>确诊病例</p>
          {{ $window.nCov_luchengData.macroscopic.lc.qzbl }} 人
        </h3>
      </li>
      <li>
        <h4>
          较上日
          <span style="color: #fcc659">{{
            $window.nCov_luchengData.macroscopic.lc.add_zzbl
          }}</span>
        </h4>
        <h3 style="color: #fcc659">
          <p>疑似病例</p>
          {{ $window.nCov_luchengData.macroscopic.lc.zzbl }} 人
        </h3>
      </li>
      <li>
        <h4>
          较上日
          <span style="color: #f6e31b">{{
            $window.nCov_luchengData.macroscopic.add_death
          }}</span>
        </h4>
        <h3 style="color: #f6e31b">
          <p>死亡人数</p>
          {{ $window.nCov_luchengData.macroscopic.death }} 人
        </h3>
      </li>
      <li>
        <h4>
          较上日
          <span style="color: #1eff95">{{
            $window.nCov_luchengData.macroscopic.add_cure
          }}</span>
        </h4>
        <h3 style="color: #1eff95">
          <p>治愈人数</p>
          {{ $window.nCov_luchengData.macroscopic.cure }} 人
        </h3>
      </li>
    </ul>
    <ul class="three-kind-area">
      <li>
        <h3 style="color: #ff283a">
          <p>高风险地区</p>
          {{ $window.nCov_luchengData.macroscopic.lc.qzbl }} 人
        </h3>
      </li>
      <li>
        <h3 style="color: #fcc659">
          <p>中风险地区</p>
          {{ $window.nCov_luchengData.macroscopic.lc.zzbl }} 人
        </h3>
      </li>
      <li>
        <h3 style="color: #1eff95">
          <p>低风险地区</p>
          {{ $window.nCov_luchengData.macroscopic.death }} 人
        </h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#top-date {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  z-index: 20;
  font-size: 15px;
  ul li {
    display: inline-block;
    border-radius: 6px;
    background-color: #1b45a7;
    border: 1px solid #07e2e8;
    margin-left: 10px;
    padding: 4px 8px;
    color: #07e2e8;
    &:first-child {
      margin-left: 0px;
    }
    > h4 {
      font-size: 14px;
    }
    > h3 {
      * {
        display: inline;
      }
    }
  }
  .four-kind-people > li {
    width: 126px;
  }
  .three-kind-area {
    margin-top: 8px;
    > li {
      width: 140px;
    }
  }
}
</style>
