<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from '_c/home/homeheader'
import HomeSwiper from '_c/home/homeswiper'
import HomeIcons from '_c/home/homeicons'
import HomeRecommend from '_c/home/homerecommend'
import HomeWeekend from '_c/home/homeweekend'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped></style>
