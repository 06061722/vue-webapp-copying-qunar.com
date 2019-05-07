<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '_c/city/cityheader'
import CitySearch from '_c/city/citysearch'
export default {
  components: {
    CityHeader,
    CitySearch
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
