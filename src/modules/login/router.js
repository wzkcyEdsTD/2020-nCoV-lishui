/**
 * vue-cli router config
 * add by eds 2019/7/6
 */
import Vue from "vue";
import Router from "vue-router";
import Login from '@/components/login/Login'
// pages modules
Vue.use(Router);
export const routesMap = [{
  path: '/',
  name: 'Login',
  component: Login
},]

export default new Router({
  mode: 'hash', // history hash
  scrollBehavior: () => ({
    y: 0
  }),
  routes: routesMap
})