import { createMemoryHistory, createRouter } from 'vue-router'
import { articlesRouters } from './lib/utils'


const routes = [
  { path: '/', component:  () => import('./components/Home.vue') },
  { path: '/docs', component:  () => import('./components/Docs.vue') },
  { path: '/about', component:  () => import('./components/About.vue') },
  { 
    path: '/Blog/:id', 
    component: () => import('./components/BlogView.vue'),
    props: true,
    children:articlesRouters

  },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})