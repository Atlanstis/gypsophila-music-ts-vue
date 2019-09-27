<template>
  <footer class="gy-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "gy-footer"
})
export default class Footer extends Vue {
  @Prop({
    type: String,
    default: "60px"
  })
  readonly height!: String;
}
</script>

<style lang="scss" scoped>
.gy-footer {
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
