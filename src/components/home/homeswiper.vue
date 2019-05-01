<template>
  <swiper class="swiper" :scrollX="scrollX" @scrollEnd="scrollEnd">
    <div class="swiper-content">
      <img src="https://dimg04.c-ctrip.com/images/zg0s13000000udr6jAC7F.png" alt>
      <img src="https://dimg04.c-ctrip.com/images/zg0l13000000uf4qtAB08.png" alt>
      <img src="https://dimg04.c-ctrip.com/images/zg0213000000vaj19AB34.png" alt>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in 3" :key="index" :class="{active: currentPage === index}"></span>
    </div>
  </swiper>
</template>

<script>
import Swiper from '_c/base/swiper'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      scrollX: true,
      currentPage: 0
    }
  },
  methods: {
    scrollEnd (page) {
      this.currentPage = page
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper {
  overflow: hidden;
  height: 171.6px;
  position: relative;

  .swiper-content {
    height 100%
    width: 1875px;

    img {
      width: 375px;
      height: 100%;
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255,255,255, 0.2);

      &.active {
        width: 20px;
        border-radius: 5px;
        background: #fff;
      }
    }
  }
}
</style>
