<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";

@Component({
  name: "app"
})
export default class App extends Vue {
  created() {
    UserModule.Login();
  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
