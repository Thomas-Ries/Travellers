import { createRouter, createWebHistory, } from "vue-router";
// import store from "../store";
import Home from "../views/Home.vue";


const routes = [
  
  {
    path: "/",
    name: "home",
    component: Home
  },

  {
    path: "/homeheader",
    name: "homeheader",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Headers/HomeHeader.vue")
  },

  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },


  {
    path: "/logout",
    name: "logout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/logout.vue")
  },

  {
    path: "/signin",
    name: "signin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signin.vue")
  },

  {
    path: "/pays",
    name: "pays",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pays.vue")
  },

  {
    path: "/espace-personnel/:id",
    name: "espace-personnel",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/espace-personnel.vue"),

      // meta: {
      //   requiresAuth: true,
      // }
  },

  {
    path: "/article",
    name: "article",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Articles/Article.vue")
  },

  {
    path: "/affichage-articles",
    name: "affichagearticles",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Articles/AffichageArticles.vue")
  },

  {
    path: "/redaction-article",
    name: "RedactionArticle",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/EspacePersonnel/RedactionArticle.vue")
  },

  {
    path: "/follow",
    name: "Follow",

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/EspacePersonnel/Follow.vue")
  },

  {
    path: "/affichagecommentaires",
    name: "affichagecommentaires",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Commentaires/AffichageCommentaires.vue")
  },

  {
    path: "/about-us",
    name: "about-us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutUs.vue")
  },

  {
    path: "/join-us",
    name: "join-us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JoinUs.vue")
  },

  {
    path: "/footer",
    name: "footer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Footer.vue")
  },

  {
    path: "/cgu",
    name: "cgu",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cgu.vue")
  },

  {
    path: "/mentions-legales",
    name: "mentions-legales",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/mentions-legales.vue")
  },
  

{ // new route for our admin page
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'), // Vue we just created
},
{ // new route for our users list  admin dashboard page
  path: '/userslist',
  name: 'userslist',
  component: () => import('../views/UsersList.vue'), // Vue we just created
},

{ // new route for our articles list page in admin dashboard
  path: '/articleslist',
  name: 'articleslist',
  component: () => import('../views/ArticlesList.vue'), // Vue we just created
},

{ // new route for our comments list page in admin dashboard
  path: '/commentslist',
  name: 'commentslist',
  component: () => import('../views/CommentsList.vue'), // Vue we just created
},

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  
  routes

});

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if(!store.getters.loggedIn) {
//       next({
//         name: 'login',
//       })
//     } else {
//       next()
//     }
//   }
// })

export default router;
