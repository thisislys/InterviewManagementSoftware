<template>
  <header>
      <view class="section section_gap">
          <scroll-view class="scroll-view_H" scroll-x style="width: 100%">
            <text>首页</text>
            <text>美妆</text>
            <text>首页</text>
            <text>首页</text>
            <text>首页</text>
            <text>首页</text>
            <text>首页</text>
         </scroll-view>
     </view>
  </header>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
 
  },

  data () {
  
  },

  created () {

  }
}
</script>

<style>
header{
  width: 100%;
  height: 90rpx;
  line-height: 90rpx;
  background: pink;
}
.scroll-view_H{
  white-space: nowrap;
}
.scroll-view_H text{
  display: inline-block;
  margin: 0 90rpx;
}
</style>
