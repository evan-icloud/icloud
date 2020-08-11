import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/Nav'
import Maps from '@/components/Maps'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      redirect: '/Maps/mapExample1'
    },
    {
      path: '/Maps',
      name: 'Maps',
      component: Nav,
      children: [
        {path: '/Maps/:id', name: 'Marker1', component: Maps}
      ]
    }
  ]
})
