import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home/discovery"
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import(
          /* webpackChunkName: "homeIndex" */ "./layouts/home-layout/index.vue"
        ),
      children: [
        {
          path: "discovery",
          name: "discovery",
          component: () =>
            import(
              /* webpackChunkName: "discovery" */ "./views/discovery/index.vue"
            )
        },
        {
          path: "playlists",
          name: "playlists",
          component: () =>
            import(
              /* webpackChunkName: "discovery" */ "./views/playlists/index.vue"
            )
        },
        {
          path: "songs",
          name: "songs",
          component: () =>
            import(/* webpackChunkName: "songs" */ "./views/songs/index.vue")
        },
        {
          path: "mvs",
          name: "mvs",
          component: () =>
            import(/* webpackChunkName: "mvs" */ "./views/mvs/index.vue")
        },
        {
          path: "playlist/:id",
          name: "playlist",
          component: () =>
            import(
              /* webpackChunkName: "playlist" */ "./views/playlist/index.vue"
            )
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
