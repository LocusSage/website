export default {
  path: 'support',
  name: 'Support',
  redirect: { name: 'SupportHome' },
  component: () => import('@/views/pages/support'),
  children: [
    {
      path: 'home',
      name: 'SupportHome',
      component: () => import('@/views/pages/support/home')
    },
    {
      path: 'knowledge-base',
      name: 'KnowledgeBase',
      component: () => import('./knowledge-base')
    },
    {
      path: 'knowledge-base/:id/:title',
      name: 'KnowledgeBasePost',
      component: () => import('./knowledge-base-post')
    }
  ]
}