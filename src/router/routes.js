
const routes = [
  {
    path: '',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/',  component: () => import('components/Home.vue') },
      { path: '/login',  component: () => import('components/Login.vue') },
      { path: '/orderpage/', component: () => import('components/OrderPage.vue')},
    //  { path: '/orderpage/:counter',name:'orderpage',  component: () => import('components/OrderPage.vue'),props:true },
      { path: '/starters',  component: () => import('components/Starters.vue') },
      { path: '/maincourse', component: () => import('components/MainCourse.vue')},
      { path: '/checkout', component: () => import('components/CheckOut.vue')},
      { path: '/payment', component: () => import('components/Payment.vue')},
      { path: '/about', component: () => import('components/About.vue')},
      //{ path: '/newuser', component: () => import('components/NewUser.vue')},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
