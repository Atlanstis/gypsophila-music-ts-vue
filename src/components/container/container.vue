<template>
  <section class="gy-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

enum ContainerType {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical"
}

@Component({
  name: "gy-ontainer"
})
export default class Container extends Vue {
  @Prop({
    type: String
  })
  readonly direction!: ContainerType;

  private get isVertical(): Boolean {
    if (this.direction === ContainerType.VERTICAL) {
      return true;
    } else if (this.direction === ContainerType.HORIZONTAL) {
      return false;
    }
    return this.$slots && this.$slots.default
      ? this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === "gy-header" || tag === "gy-footer";
        })
      : false;
  }
}
</script>

<style lang="scss" scoped>
.gy-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  &.is-vertical {
    flex-direction: column;
  }
}
</style>
