import Vue from 'vue'
import VueRouter from 'vue-router'
import DragRace from '../views/DragRace.vue'
import Market from '../views/Market.vue'
import PowerPlant from '../views/PowerPlant.vue'
import WhitePaper from '../views/WhitePaper.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/white-paper',
    name: 'WhitePaper',
    component: WhitePaper
  },
  {
    path: '/market',
    name: 'Market',
    component: Market
  },
  {
    path: '/power-plant',
    name: 'PowerPlant',
    component: PowerPlant
  },
  {
    path: '/drag-race',
    name: 'DragRace',
    component: DragRace
  },
  {
    path: '/*',
    name: '404',
    component: PageNotFound
  },

]

const router = new VueRouter({
  routes
})

export default router
