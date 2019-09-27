<template>
  <gy-container class="container-main">
    <gy-header>Header</gy-header>
    <gy-container>
      <gy-aside width="200px">Aside</gy-aside>
      <gy-container>
        <gy-main>Main</gy-main>
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

@Component({
  components: {
    GyContainer,
    GyHeader,
    GyMain,
    GyFooter,
    GyAside
  }
})
export default class Test extends Vue {}
</script>

<style lang="scss" scoped>
.container-main {
  height: 100%;
}
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
</style>
