import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import courses from '../views/courses.vue'
import contact from '../views/contact.vue'
import faq from '../views/faq.vue'
import instructors from '../views/instructors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
        path: '/faq',
        name: 'faq',
        component: faq
    },
    {
        path: '/instructors',
        name: 'instructors',
        component: instructors
      },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})

export default router
