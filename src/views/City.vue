<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from '_c/city/cityheader'
import CitySearch from '_c/city/citysearch'
import CityList from '_c/city/citylist'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
</style>
