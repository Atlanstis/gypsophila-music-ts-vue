<template>
  <gy-container class="home-layout">
    <gy-header height="50px">Header</gy-header>
    <gy-container>
      <gy-aside width="250px">
        <aside-menu />
      </gy-aside>
      <gy-container>
        <gy-main>
          <router-view></router-view>
        </gy-main>
      </gy-container>
    </gy-container>
    <gy-footer>Footer</gy-footer>
  </gy-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GyContainer from "@/components/container/container.vue";
import GyHeader from "@/components/container/header.vue";
import GyMain from "@/components/container/main.vue";
import GyFooter from "@/components/container/footer.vue";
import GyAside from "@/components/container/aside.vue";
import AsideMenu from "@/components/aside-menu/index.vue";

@Component({
  name: "home-layout",
  components: {
    GyContainer,
    GyHeader,
    GyMain,
    GyFooter,
    GyAside,
    AsideMenu
  }
})
export default class HomeLayout extends Vue {}
</script>

<style lang="scss" scoped>
.gy-header {
  background: #f9f9f9;
}
.gy-aside {
  background: #ededed;
}
.gy-main {
  background: #ffffff;
}
.gy-footer {
  background: #ffffff;
}
.home-layout {
  height: 100%;
}
</style>
