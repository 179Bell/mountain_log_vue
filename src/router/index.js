
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/Index'
import Edit from '@/pages/Edit'
import Search from '@/pages/Search'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/edit/id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/search',
    name: 'search',
    component: Search 
  }
]

const router = new VueRouter({
  routes
})

export default router
