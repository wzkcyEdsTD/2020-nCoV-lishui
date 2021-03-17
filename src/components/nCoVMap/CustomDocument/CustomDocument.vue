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
        this.$refs.tree.setCheckedKeys(["theme_data@6"]);
        this.treeChangeCheck();
      });
    },
    renderContent(h, { node }) {
      return (
        <span
          class="custom-tree-node"
          class={[
            "label-node",
            node.isLeaf ? "" : "label-no-root",
            node.key.includes("@") ? "isMapServerSupported" : "",
          ]}
        >
          <span>{node.label}</span>
          {node.isLeaf ? (
            <span>（{node.data.amount || "-"}{node.data.unit || '例'}）</span>
          ) : undefined}
          {node.data.table ? (
            <button
              class="node-detail-button"
              onClick={() => this.showDetail(node.data)}
            >
            {"详情"}
            </button>
          ) : undefined}
        </span>
      );
    },
    treeChangeCheck() {
      this.$hub.$emit("document-checkbox", this.$refs.tree.getCheckedKeys());
    },

    // 展示详情
    showDetail(data) {
      this.$hub.$emit("set-detail-table", data);
    },
  },
};
</script>
<style scoped lang="less">
@import url("./CustomDocument.less");
</style>
<style lang="less">
.custom-document {
  // 详情按钮
  .node-detail-button {
    border: 0px solid #75c8f4;
    border-radius: 4px;
    color: #22569C;
    background: linear-gradient( #52FEB3,#1DF5E8);
    outline: none;
    padding: 1px 4px;
    margin-left: 6px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(14, 53, 106, 0.4);
  }
  .label-node {
    color: #ccc;
    font-weight: 300;
    font-size: 16px;
  }
  .label-no-root {
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  .isMapServerSupported {
    color: white;
    font-weight: bold;
  }
}
</style>
