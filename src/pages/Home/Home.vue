<template>

  <div class="warp">
  <!--头部位置-->
  <div class="top">
    <!--头部注册-->
    <div class="overflow xiazaiApp" style="display: block;">
      <div class="overflow rela">
        <span class="clsoebtn"><img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png"></span>
        <div class="appdowimg">
          <a href="https://wap.epet.com/download.html?do=market&amp;utm_content=mob%E5%AE%A0%E7%89%A9%E7%94%A8%E5%93%81%E8%AF%8D%E4%B8%93%E5%8D%96%E5%BA%97&amp;utm_type=content" style="display: block;">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
          </a>
        </div>
      </div>
    </div>


    <!--搜索-->
    <div class="search_commodity_bind">
      <!--狗狗 地址-->
      <div class="dogLocation" >
        <a href="javascript:;" style="text-decoration: none">
          <span class="dog_address">狗狗</span>
          <span>|</span>
          <span class="myAddress ">重庆</span>
          <i class="iconfont icon-xiaosanjiaodown"></i>
        </a>
      </div>
      <!--搜索商品和品牌-->
      <div class="search">
        <a href="javascript:;">
          <input class="bind_search" type="text" placeholder="搜索商品和品牌">
          <span class="icon_search iconfont icon-sousuo"></span>
          <span class="information "></span>
        </a>
      </div>
        <a href="javascript:;" class="icon_information" style="text-decoration: none">
          <i class="iconfont icon-xiaoxi"></i>
        </a>
    </div>

    <!--导航列表-->
    <div class="Dog_nav">
      <nav class="Dog_navList">
        <ul class="dog_List">
          <li class="dog_Li active" >
            <a href="" class="font_Color active_font">
              首页
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              狗狗主粮
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              零食
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              医疗保健
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              玩具
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              外出
            </a>
            <i class="shift_Color"></i>
          </li>

          <li class="dog_Li">
            <a href="" class="font_Color">
              服饰城
            </a>
            <i class="shift_Color"></i>
          </li>
        </ul>
      </nav>
    </div>
  </div>

    <!--内容区域-->
    <div class="content">

      <!--轮播图-->
      <div class="banner">
        <a href="" class="dog_img">
          <img class="banner_img" src="./images/1.jpg" alt="">
        </a>
      </div>


      <!--品牌图片-->
      <div class="content_lists">
        <ul class="content_list">
          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>

          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>


          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>

          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>

          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>


          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>

          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="./images/7.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>

     <!--限购图-->
      <div class="banner_item">
        <a href="">
          <img src="./images/banner_item.gif" alt="">
        </a>
      </div>


      <!--每日疯抢-->
      <div class="day_time">
        <div class="day_rush">
          <img class="day_img" src="./images/day.png" alt="">
        </div>

        <div class="day_end_time">
          <span>本场结束</span>
          <span>15</span>
          <span>:</span>
          <span>00</span>
        </div>

        <div class="day_more">
          <img src="./images/duo.jpg" alt="">
        </div>
      </div>


      <!--奶粉-->
      <div class="time_list">
        <ul class="time_moeny_list">
          <li>
            <img src="./images/naifen.jpg" alt="">
            <p class="moeny_list">￥33.6</p>
            <p class="original">省78.4</p>
          </li>
          <li>
            <img src="./images/naifen.jpg" alt="">
            <p class="moeny_list">￥33.6</p>
            <p class="original">省78.4</p>
          </li>
          <li>
            <img src="./images/naifen.jpg" alt="">
            <p class="moeny_list">￥33.6</p>
            <p class="original">省78.4</p>
          </li>
          <li>
          <img src="./images/naifen.jpg" alt="">
          <p class="moeny_list">￥33.6</p>
          <p class="original">省78.4</p>
        </li>
        </ul>

      </div>





     </div>





</div>


</template>


<script>
  export default {


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
//包裹器
  .warp
    width 100%
    height 1500px
    background #ffffff
    //头部部分
    .top
      width 100%
      height 140px
      .xiazaiApp
        position relative
        width 100%
        height 56px
        display none
        z-index 102
     .rela
      background pink
      #close_down_bar
        position absolute
        top 9px
        left 6px
        width 20px
        height 20px
        background-size 100%
      .appdowimg img
        display block
        width 100%
        height 56px
        background-size 100%
     .search_commodity_bind
       width 100%
       height 50px
       padding: 8px;
      .dogLocation
        display inline-block
        text-align center
        padding-left: 10px;
        margin-top: 6px;
      .dogLocation span
        color  #898989
        font-size 13px
     .search
       position relative
       display inline-block
       padding-right: 9px;
      .bind_search
        outline:none;
        width 221px
        height 22px
        background #e9e9e9
        border-radius 4px
        color #bcbcbc
        text-indent 10px
        font-size 13px
      .icon_search
        position: absolute;
        top 4px
        left 200px
       .icon_information
         width 20px
         height 20px
         display inline-block
      //导航部分
    .Dog_nav
        width 100%
        height 32px
      .Dog_navList
        box-sizing border-box
        float left
       .dog_List
          white-space nowrap
          float left
        .dog_Li
          display inline-block
          height 30px
          line-height 30px
          padding 0 18px
          .font_Color
            color #666
            font-size 14px
        .active
          .active_font
            color #72CE90
          .shift_Color
             position absolute
             left 19px
             bottom 597px
             display inline-block
             height 2px
             width 25px
             background #72CE90
   .content
     width 100%
     height 1000px
     border 1px solid black
         //轮播图部分
     .banner
       width 100%
       height 180px
      .banner_img
        width 100%
        height 180px
        display block
     .content_lists
        width 100%
        height 204px
      .content_list
        width 100%
        height 204px
        background pink
       .content_list li
          float left
          width 20%
        .content_list li img
          width 84px
          height 102px
          display block
     .banner_item
       width 100%
       height 132px
      .banner_item img
        width 412px
        height 132px
        display block
      .day_time
        width 100px
        height 30px
        margin-top 4px
      .day_rush
        width 100px
        height 30px
        margin-left 5px
       .day_img
        display block
        width 85px
        height 20px
      .day_end_time
        position absolute
        left 220px
        bottom 58px
      .day_more img
        position absolute
        bottom 37px
        right -1px
        display block
        width 51px
        height 56px
        background-size 100%
      .time_list
        width 100%
        height 142px
       .time_moeny_list
         width 100%
         height 142px
       .time_moeny_list li
         width 20%
         float: right;
         margin 7px 10px
       .time_moeny_list img
         display block
         width 96px
         height 96px
        .moeny_list
          color red
          font-weight 400
          text-align center
          margin-top 10px
         .original
           color #6a6a6a
           text-align center
           font-size 12px
           margin-top 8px








</style>









