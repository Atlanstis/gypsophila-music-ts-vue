module.exports = {
  vueTemplate: componentName => {
    let arr = componentName.split("-");
    let newComponentName = "";
    for (let name of arr) {
      name = name.replace(/\b\w+\b/g, function(word) {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
      });
      newComponentName += name;
    }
    return `<template>
  <div class="${componentName}"></div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "${componentName}"
})
export default class ${newComponentName} extends Vue {}
</script>
<style lang="scss" scoped>
.${componentName} {}
</style>
`;
  }
};
