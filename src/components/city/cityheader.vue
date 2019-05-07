<template>
  <div class="header">
    <div class="header-left" @click="goHomePage">
      <svg class="icon icon-left" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <p>城市选择</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goHomePage () {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~_s/varibles';

.header {
  height: $headerHeight;
  line-height: $headerHeight;
  background: $bgColor;
  color: #fff;
  text-align: center;
  position relative
  .header-left {
    position absolute
    left 5px
    top 0
    font-size 20px
  }
}
</style>
