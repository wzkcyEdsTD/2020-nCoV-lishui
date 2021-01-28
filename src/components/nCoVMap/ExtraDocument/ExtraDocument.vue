<template>
  <div class="extra-document">
    <!-- <top-count /> -->
    <DetailPopup />
  </div>
</template>

<script>
import TopCount from "./TopCount";
import DetailPopup from "./DetailPopup";
export default {
  name: "ExtraDocument",
  components: { TopCount, DetailPopup },
};
</script>

<style scoped lang="less">
.extra-document {
}
</style>
