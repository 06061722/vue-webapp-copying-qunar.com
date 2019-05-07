<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
@import '~_s/varibles';

.search {
  height: 30px;
  background: $bgColor;
  text-align: center;

  .search-input {
    box-sizing border-box
    height: 26px;
    line-height 26px
    width: 97%;
    text-align: center;
    color #666
    border-radius: 3px
    border-width 0
    padding 0 5px
  }
}
</style>
