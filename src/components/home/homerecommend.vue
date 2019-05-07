<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="(item, index) in recommandList" :key="index">
        <div>
          <img class="item-img" :src="item.imgUrl" alt>
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
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
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
          title: '上海2日+浙江4日玩法',
          desc: '闲逛拈花湾小镇，自然禅趣、诗意生活'
        },
        {
          id: '0001',
          imgUrl: 'https://dimg03.c-ctrip.com/images/fd/tg/g1/M02/7A/2F/CghzfVWwsViAYT0jABTkte-Z7lI968_D_265_265.jpg',
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
@import '~_s/mixins';

.title {
  line-height: 40px;
  text-indent: 10px;
  background: #ddd;
}

.item {
  display: flex;
  height: 90px;
  // background: red;
  border-bottom: 1px solid #ccc;

  .item-img {
    width: 80px;
    height: 80px;
    padding: 5px;
  }

  .item-info {
    flex: 1;
    padding: 5px;
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
