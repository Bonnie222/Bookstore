// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*引入vue-resource*/
import VueResource from 'vue-resource'
/*引入mintUI*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
/*import './../static/style/iconfont.css'*/

Vue.use(VueResource);
Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
