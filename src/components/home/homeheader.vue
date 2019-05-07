<template>
  <div class="header">
    <div class="header-left">
      <svg class="icon icon-left" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="header-input">
      <svg class="icon icon-input" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right" @click="GoCityPage">
      <span>城市</span>
      <svg class="icon icon-right" aria-hidden="true">
        <use xlink:href="#icon-jiantouxia"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    GoCityPage () {
      this.$router.push('/city')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~_s/varibles'
.header {
  line-height: $headerHeight;
  display: flex;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 32px;
    float: left;
    text-align center
    .icon-left {
      font-size 20px
    }
  }

  .header-input {
    flex: 1;
    height: 32px;
    line-height: 32px;
    margin-top: 6px;
    margin-left: 10px;
    padding-left: 10px;
    background: #fff;
    border-radius: 5px;
    color: #ccc;
  }

  .header-right {
    width: 64px;
    float: right;
    text-align: center;
    .icon-right {
      margin-left 4px
      font-size 12px
    }
  }
}
</style>
