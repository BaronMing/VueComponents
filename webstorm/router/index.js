import Vue from 'vue'
import Router from 'vue-router'

/* 结合Vue-template.vue的设置，可以使模块的文件名称和路由的名称相同 */
import * as xxxModule from './xxxModule'

/* xxxModule对象中ooo模块的二级路由 */
import * as oooModule from './oooModule'

/* 设置一级路由 */
let routes = []
for (let key in xxxModule) {
  routes.push({
    path: '/' + key,
    component: xxxModule[key]
  })
}

/* 设置二级路由 */
routes.forEach((v, i, a) => {
  if (~v.path.indexOf('ooo')) {
    let children = a[i].children = []
    for (let key in oooModule) {
      children.push({
        path: key,
        component: oooModule[key]
      })
    }
  }
})

/* 设置根路径的重定向 */
routes.push({
  path: '/',
  redirect: routes[0]
})

Vue.use(Router)

export default new Router({
  routes
})
