<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommandList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommandList: [
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://youimg1.c-ctrip.com/target/tg/135/975/715/d01e9719537247439ff8916f14410883_D_650_366.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/style/mixins';

.title {
  line-height: 40px;
  text-indent: 10px;
  background: #ddd;
}

.item {
  border-bottom: 1px solid #ccc;
  // text-align center

  .item-img {
    width: 100vw;
    height: 30vw;
    margin 0 auto
  }

  .item-info {
    padding-left: 5px;
    padding-bottom: 5px;
    min-width: 0;

    .item-title {
      line-height: 27px;
      font-size: 16px;
      ellipsis();
    }

    .item-desc {
      line-height: 20px;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      margin-top: 7px;
      background: #ff9300;
      color: #fff;
      border-radius: 3px;
      border-width: 0;
    }
  }
}
</style>
