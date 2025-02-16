import { createMemoryHistory, createRouter } from 'vue-router'

import HelloWorldVue from './components/HelloWorld.vue'

const routes = [
  { path: '/Hello', component: HelloWorldVue },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})