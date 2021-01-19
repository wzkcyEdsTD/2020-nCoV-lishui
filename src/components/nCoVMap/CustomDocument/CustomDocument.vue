<template>
  <div
    class="custom-document animated"
    :class="[hideVisible ? 'slideOutLeft' : 'slideInLeft']"
  >
    <el-tabs v-model="tabActive" class="my-tabs">
      <el-tab-pane label="精密智控" name="jmzk" />
    </el-tabs>
    <div class="custom-document-content">
      <el-tree
        class="my-tree"
        :data="tabsMenuData"
        show-checkbox
        :default-expanded-keys="['inside']"
        accordion
        node-key="id"
        ref="tree"
        :render-content="renderContent"
        @check="treeChangeCheck"
      >
      </el-tree>
    </div>
    <span class="hide_button" @click="hideVisible = !hideVisible"></span>
  </div>
</template>
<script type="text/jsx">
import { mapState, mapActions } from "vuex";
import { xmMenu } from "@/components/nCoVMap/config/enums";
export default {
  name: "custom-document",
  data() {
    return {
      tabActive: "jmzk",
      tabsMenuData: [],
      hideVisible: false,
    };
  },
  computed: {
    ...mapState([]),
  },
  created() {
    xmMenu.length && (this.tabsMenuData = xmMenu);
  },
  mounted() {
    this.eventRegister();
  },
  methods: {
    ...mapActions([]),
    eventRegister() {
      this.$hub.$on("arcgis-map-default", () => {
        this.$refs.tree.setCheckedKeys(["close_contact@0"]);
        this.treeChangeCheck();
      });
    },
    renderContent(h, { node }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          {node.isLeaf ? (
            <span style="font-weight:bolder;">
              （{~node.data.id.indexOf("@") ? "6" : "-"}例）
            </span>
          ) : undefined}
        </span>
      );
    },
    treeChangeCheck() {
      this.$hub.$emit("document-checkbox", this.$refs.tree.getCheckedKeys());
    },
  },
};
</script>
<style scoped lang="less">
@import url("./CustomDocument.less");
</style>
