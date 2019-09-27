<template>
  <header class="gy-header" :style="{ height }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "gy-header"
})
export default class Header extends Vue {
  @Prop({
    type: String,
    default: "60px"
  })
  readonly height!: String;
}
</script>

<style lang="scss" scoped>
.gy-header {
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
