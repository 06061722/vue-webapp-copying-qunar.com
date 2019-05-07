<template>
  <swiper class="list">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <ul class="item-list">
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
          <li class="item">阿拉尔</li>
        </ul>
      </div>
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
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.list {
  position: absolute;
  top: 73px;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    background: #eee;
    padding-left: 10px;
    line-height: 22px;
  }

  .button-list {
    padding: 5px 30px 5px 5px;
    overflow: hidden;

    .button {
      box-sizing: border-box;
      float: left;
      width: 30%;
      padding: 4px 0;
      margin: 5px;
      border: 1px solid #ccc;
      text-align: center;
      border-radius: 3px;
    }
  }

  .item-list {
    .item {
      line-height: 30px;
      padding-left: 10px;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>
