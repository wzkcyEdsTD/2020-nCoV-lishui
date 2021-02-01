<template>
  <div class="extra-document">
    <BottomBtn v-if="mapDone" />
    <DetailPopup />
    <PopVideo v-if="popVideo" :videoData="popVideo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BottomBtn from "./BottomBtn";
import DetailPopup from "./DetailPopup";
import PopVideo from "./PopVideo";
export default {
  name: "ExtraDocument",
  data() {
    return { popVideo: undefined };
  },
  components: { BottomBtn, DetailPopup, PopVideo },
  computed: {
    ...mapState(["mapDone"]),
  },
  mounted() {
    this.eventRegister();
  },
  methods: {
    eventRegister() {
      this.$hub.$on("arcgis-popup-video", (attributes) => {
        this.popVideo = attributes;
      });
    },
  },
};
</script>

<style scoped lang="less">
.extra-document {
}
</style>
