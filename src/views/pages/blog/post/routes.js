export default {
  path: 'post/:id/:slug',
  name: 'Blog-Post',
  component: () => import('@/views/pages/blog/post')
}
