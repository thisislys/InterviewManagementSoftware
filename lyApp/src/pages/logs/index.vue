<template>
  <div>
     
     <ul class="footer">
        <li>首页</li>
        <li>推荐</li>
        <li>搜索</li>
        <li>我的</li>
     </ul>
  </div>
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
  .footer{
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom:0;
    left:0;
    background:#888;
    color:#fff;
  }
  .footer li {
    width:25%;
    display: flex;
    justify-content: center;
  }
</style>
