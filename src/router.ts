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
        }
      ]
    },
    {
      path: "/test",
      name: "Test",
      component: () =>
        import(/* webpackChunkName: "Test" */ "./views/test/index.vue")
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
