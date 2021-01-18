<template>
  <div class="Com_content nCoVMap">
    <ExtraDocument />
    <div class="Com_map">
      <commonArcgis id="macroArcgis" ref="macroArcgis" />
    </div>
    <ChartDocument ref="rightChart" />
    <CustomDocument ref="leftMenu" />
  </div>
</template>

<script>
import commonArcgis from "./Arcgis/Arcgis.vue";
import ExtraDocument from "./ExtraDocument/ExtraDocument";
import ChartDocument from "./ChartDocument/ChartDocument";
import CustomDocument from "./CustomDocument/CustomDocument";
import { mapState, mapActions } from "vuex";
export default {
  name: "nCoVMap",
  components: {
    commonArcgis,
    CustomDocument,
    ChartDocument,
    ExtraDocument,
  },
  computed: { ...mapState([]) },
  async created() {},
  mounted() {
    this.eventRegister();
  },
  methods: {
    ...mapActions([]),
    eventRegister() {},
  },
};
</script>
<style scoped lang="less">
@import url("./nCoVMap.less");
</style>
