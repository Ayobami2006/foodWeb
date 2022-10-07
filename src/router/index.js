import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from '@/components/HomeComponent'
import ContactUs from '@/components/ContactUs'
import services from '@/components/services'
import AboutUs from '@/components/AboutUs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'homeComponent',
      component: HomeComponent
    },
    {
      path: '/contact-us',
      name: 'contact Us',
      component: ContactUs
    },
    {
      path: '/services',
      name: 'Services',
      component: services
    },
    {
      path: '/about-us',
      name: 'Aboutus',
      component: AboutUs
    }
  ]
})
