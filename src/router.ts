import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/index/discovery"
    },
    {
      path: "/index",
      name: "index",
      component: () =>
        import(/* webpackChunkName: "layoutIndex" */ "./layouts/index.vue"),
      children: [
        {
          path: "discovery",
          name: "discovery",
          component: () =>
            import(
              /* webpackChunkName: "discovery" */ "./views/discovery/index.vue"
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
