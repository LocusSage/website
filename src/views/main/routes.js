export default {
  path: '/',
  redirect: {name: 'Home'},
  component: () => import('@/views/main'),
  children: []
}
