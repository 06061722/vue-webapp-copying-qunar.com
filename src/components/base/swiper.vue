<template>
  <div ref="wrapper">
    <slot>
      <span>swiper</span>
    </slot>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) return
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        scrollX: this.scrollX,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          easing: {
            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fn: function (t) {
              return t * (2 - t)
            }
          }
        }
      })
      if (this.scrollX) {
        this.scroll.on('scrollEnd', () => {
          this.$emit('scrollEnd', this.scroll.getCurrentPage().pageX)
          clearTimeout(this.timer)
          this.play()
        })
      }
    },
    play () {
      this.timer = setTimeout(() => {
        this.scroll.next()
      }, 2000)
    }
  },
  mounted () {
    this.initScroll()
    if (this.scrollX) this.play()
  }
}
</script>
<style lang="stylus" scoped></style>
