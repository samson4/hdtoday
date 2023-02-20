import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Movie from '../views/movie/movie.vue'
import TV_Shows from '../views/TV_Shows.vue'
import Top from '../views/Top-IMDB.vue'
import About from '../views/AboutView.vue'
import movieDetail from '../views/movie/movieDetail.vue'
import Profile from '../views/user/Profile.vue'
import AllUsers from '../views/allUsers.vue'
import Favorite from '../views/user/Favorite.vue'
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
    path:'/movie',
    name:'movie',
    component:Movie
  },
  {
    path:'/tv-show',
    name:'tv-show',
    component:TV_Shows
  },
  {
    path:'/top-imdb',
    name:'top',
    component:Top
  },
  {
    path:'/movie/:id',
    name:'movie-detail',
    component:movieDetail,
    props:true
  },
  {
    path:'/user/favorite',
    name:'favorite',
    component:Favorite
  },
  {
    path:'/user/profile',
    name:'profile',
    component:Profile
  },
  {
    path:'/user/all',
    name:'allUsers',
    component:AllUsers
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
