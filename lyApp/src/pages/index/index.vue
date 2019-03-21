<template>
  <div @click="clickHandle" class="wrap">
    <!-- 首页地图模块 -->
    <map
      id="map"
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      scale="14"
      show-location
      show-compass
      :markers="markers"
      @markertap="markertap"
      @regionchange="regionChange"
    ></map>
    <!-- 重新定位图标 -->
    <cover-view class="current" @tap="goCurrent">
      <cover-image class="img" src="/static/images/location.png"/>
    </cover-view>
   <button class="jump" @click="jump">按钮</button>
  </div>
</template>

<script>
import card from "@/components/card";
import { getLocation, getAuth } from "@/utils/index.js";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      // 用户当前位置
      location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
      markers: [
        {
          iconPath: "/static/images/job.png",
          id: 0,
          latitude: 23.099994,
          longitude: 113.32452,
          width: 50,
          height: 50
        }
      ]
    };
  },
  computed: {
    ...mapState({
      state: state => state.index.name
    })
  },
  components: {
    card
  },

  methods: {
jump(){
 wx.navigateTo({
    url: '/pages/logs/main'
  });
},
    btnClick(type){
      this.change(type);
    },
    regionChange(e) {},
    // 点击标注物
    marketTap(e) {},
    // 重新定位
    goCurrent() {
      getAuth("scope.userLocation", async () => {
        let location = await getLocation();
        wx.setStorageSync("location", location);
        this.location = location;
      });
    }
  },

  created() {
    let location = wx.getStorageSync("location");
    this.location = location;
  }
};
</script>

<style lang="scss" scoped>
.jump{
  height: 50rpx;;
  width: 100rpx;
  background: red;
  position: fixed;
  bottom: 100rpx;
  right: 0;
}
.wrap {
  height: 100%;
}
map {
  // display: none;
  width: 100%;
  height: 100%;
}
.current {
  position: fixed;
  bottom: 100rpx;
  width: 80rpx;
  height: 80rpx;
  left: 20rpx;
}
</style>
