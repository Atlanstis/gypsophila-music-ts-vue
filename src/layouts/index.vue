<template>
  <div>
    <div>主页</div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Index extends Vue {}
</script>
