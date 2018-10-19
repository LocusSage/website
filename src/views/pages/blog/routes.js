export default {
  name: 'Blog',
  path: 'blog',
  component: () => import('@/views/pages/blog'),
  children: [
    {
      name: 'Index',
      path: 'blog',
      component: () => import('@/views/pages/blog/index')
    },
    {
      name: 'Post',
      path: 'post',
      component: () => import('@/views/pages/blog/post')
    }
    // {
    //   name: 'Tags',
    //   path: 'tags',
    //   component: () => import('@/views/pages/blog/tags')
    // }
  ]
}
