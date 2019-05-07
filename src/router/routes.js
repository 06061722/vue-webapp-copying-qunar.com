export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/City.vue')
  }
]
