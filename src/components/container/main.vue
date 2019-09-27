<template>
  <main class="gy-main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "gy-main"
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.gy-main {
  // IE11 supports the <main> element partially https://caniuse.com/#search=main
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
}
</style>
