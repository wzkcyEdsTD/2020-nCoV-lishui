import Vue from "vue";
import App from "./App.vue";
import util from "@/components/common/util.js";
import router from "./router";
import store from "@/store";
// import "./components/common/_iconfont/iconfont.js";
import "@/components/common/_iconfont/iconfont.css";
import echarts from "echarts/lib/echarts";
import { doAccess_fetchUser } from "@/api/userAPI"
import ElementUI from "element-ui";

Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.prototype.$util = util;
Vue.prototype.$window = window;

/**
 * 生产环境入口页面:9003上跳转内部页面:5001带token
 * 若有token获取token存放并重定向
 */
const tokenCatch = () => {
  const {
    access_token
  } = Vue.prototype.$util.fetchQuerys();
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    window.location.href = "/#/";
  }
};
tokenCatch();

/**
 * app init
 */
const app = async fn => {
  try {
    const { isValidToken, userInfo } = await doAccess_fetchUser();
    if (!isValidToken) {
      window.location.href = "/login.html"
    } else {
      window.userInfo = userInfo;
      fn && fn()
    }
  } catch (e) {
    window.location.href = "/login.html";
  }

};
app(() => {
  window.indexVue = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});