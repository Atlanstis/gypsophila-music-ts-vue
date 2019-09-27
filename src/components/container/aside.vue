<template>
  <aside class="gy-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({
  name: "gy-aside"
})
export default class Aside extends Vue {
  @Prop({
    type: String,
    default: "60px"
  })
  readonly width!: String;
}
</script>

<style lang="scss" scoped>
.gy-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
