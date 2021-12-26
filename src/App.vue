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
@import "./src/assets/scss/fonts.scss";
@import "scss-reset/_reset.scss";
body {
  overflow: hidden;
  font: {
    family: "Inter", sans-serif;
    size: 20px;
  }
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
}
</style>
