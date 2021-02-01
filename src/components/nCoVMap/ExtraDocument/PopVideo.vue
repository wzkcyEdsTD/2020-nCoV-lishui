<template>
  <div class="videoDemoPlayer">
    <p>{{ videoData.mc }}</p>
    <span class="release-video" @click="releaseVideo">x</span>
    <div :id="id" class="frequency-pic" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: undefined,
    };
  },
  props: ["videoData"],
  created() {
    this.id = "videoData" + this.$props.videoData.objectid;
  },
  beforeDestroy() {
    this.video && this.video.dispose();
  },
  async mounted() {
    await this.initRtmp();
  },
  methods: {
    initRtmp() {
      return new Promise((resolve) => {
        this.video = new window.Aliplayer(
          {
            id: this.id,
            source: this.videoData.video_url,
            width: "100%",
            height: "100%",
            autoplay: true,
            controlBarVisibility: "hover",
            isLive: true,
            muted: true,
          },
          (player) => {
            player.mute();
            player.play();
            resolve(true);
          }
        );
      });
    },
    releaseVideo() {
      this.$hub.$emit("arcgis-popup-video", undefined);
    },
  },
};
</script>
<style lang="less" scoped>
.videoDemoPlayer {
  position: fixed;
  width: 1000px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  > p {
    color: white;
    line-height: 50px;
  }
  .frequency-pic {
    flex: 1;
    border-radius: 10px;
    overflow: hidden;
  }
  .release-video {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
}
</style>
