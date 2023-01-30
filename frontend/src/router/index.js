import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import TV_Shows from '../views/TV_Shows.vue'
import About from '../views/AboutView.vue'
import movieDetail from '../views/movie/movieDetail.vue'
import Notfound from '../views/404NotFound'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/TV-Shows',
    name:'TV-Shows',
    component:TV_Shows
  },
  {
    path:'/about',
    name:'about',
    component:About
  },
  {
    path:'/movie/:slug',
    name:'movie-detail',
    component:movieDetail,
    props:true
  },
  {
    path:'/home',
    redirect:'/'
  },
  {
    path:"/:catchAll(.*)",
    name:'404',
    component:Notfound
  },
  // {
  //   path: '/about',
  //   name: 'about',
    
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
