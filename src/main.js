import Vue from 'vue'
import router from './router'

import App from './App.vue'

/*icon_公共文件*/
import '../src/common/fonts/iconfont.css'


new Vue({
  el: '#app',
  render: h => h(App),
  router
});
