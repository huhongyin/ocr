import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ocr from '@/views/Ocr'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ocr',
      component: Ocr
    }
  ]
})
