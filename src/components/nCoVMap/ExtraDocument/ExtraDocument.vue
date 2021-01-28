<template>
  <div class="extra-document">
    <BottomBtn v-if="mapDone" />
    <DetailPopup />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BottomBtn from "./bottomBtn";
import DetailPopup from "./DetailPopup";
export default {
  name: "ExtraDocument",
  components: { BottomBtn, DetailPopup },
  computed: {
    ...mapState(["mapDone"]),
  },
};
</script>

<style scoped lang="less">
.extra-document {
}
</style>
