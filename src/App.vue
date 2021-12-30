<template>
  <ToDoList />
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    ToDoList,
  },
};
</script>

<style lang="scss">
@import "scss-reset/_reset.scss";
@import "./src/assets/scss/variabels.scss";
body {
  overflow: hidden;
  font: {
    family: "Inter", sans-serif;
    size: 20px;
  }
  background: $wrapper;
}
</style>
