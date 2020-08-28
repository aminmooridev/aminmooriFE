
const routes = [
  {
    path: '/',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/about.vue') }
    ]
  },
  {
    path: '/portfolio',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/portfolio.vue') }
    ]
  },
  {
    path: '/contact',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/contact.vue') }
    ]
  },
  {
    path: '/blog',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/blog.vue') }
    ]
  },
  {
    path: '/single',
    component: () => import('layouts/main.vue'),
    children: [
      { path: '', component: () => import('pages/single.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/admin.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/admin/dashboard.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
