<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '_c/home/homeheader'
import HomeSwiper from '_c/home/homeswiper'
import HomeIcons from '_c/home/homeicons'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped></style>
