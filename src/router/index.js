import { createRouter, createWebHashHistory } from 'vue-router'
import LogIndex from '@/pages/LogIndex'
import LogEdit from '@/pages/LogEdit'
import MountainSearch from '@/pages/MountainSearch'

const routes = [
  {
    path: '/',
    name: 'LogIndex',
    component: LogIndex
  },
  {
    path: '/edit/:id',
    name: 'LogEdit',
    component: LogEdit
  },
  {
    path: '/search',
    name: 'MountainSearch',
    component: MountainSearch 
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
