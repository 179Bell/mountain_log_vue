
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Edit from '@/pages/Edit'
import Search from '@/pages/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/search',
    name: 'Search',
    component: Search 
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hitstory',
  routes,
  base: process.env.BASE_URL
})

export default router
