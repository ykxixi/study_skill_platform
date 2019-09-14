import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {getRequest} from "./utils/api";
import {postRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios;
Vue.prototype.getRequest = getRequest();
Vue.prototype.postRequest = postRequest();
Vue.prototype.deleteRequest = deleteRequest();
Vue.prototype.putRequest = putRequest();


Vue.config.productionTip = false;
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
