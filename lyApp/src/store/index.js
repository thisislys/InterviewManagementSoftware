import Vue from 'vue';
import Vuex from 'vuex';
import CreateLogger from 'vuex/dist/logger';
import index from './modules';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    index
  },
  plugins: [CreateLogger()]
})


// import Vue from 'vue';
// import Vuex from 'vuex';
// //创建日志 记录操作
// import createLogger from 'vuex/dist/logger';

// // 挂载modules
// import index from './modules/index'

// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     index
//   },//子模块
//   plugins: [createLogger()]//插件
// })
