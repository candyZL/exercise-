<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item"
       :class="{on:'/home' === $route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-gouwo"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/classify' === $route.path}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-iconclassification"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/shopping' === $route.path}" @click="goTo('/shopping')">
      <span class="item_icon">
        <i class="iconfont icon-shop"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/mypet' === $route.path}" @click="goTo('/mypet')">
      <span class="item_icon">
        <i class="iconfont icon-face"></i>
      </span>
      <span>我的E宠</span>
    </a>
  </div>
</template>


<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #6CA774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px

</style>





