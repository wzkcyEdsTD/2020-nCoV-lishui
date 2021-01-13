<template>
  <div id="app">
    <div class="app_container">
      <router-view ref="router" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {};
  },
  async created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
@import url("~@/components/common/css/common-login.less");
</style>
