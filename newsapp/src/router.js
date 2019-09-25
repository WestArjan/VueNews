import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import DetailPage from './views/DetailPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/Category/:category',
      name:'Category',
      component: Category
    },
    {
      path: '/search',
      name: 'seach',
      component: Search
    },
    {
      path:'/detail/',
      name:'detailpage',
      component: DetailPage,
    }
  ]
})
