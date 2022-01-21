<template>
  <ToDoList />
</template>

<script>
export default {
  name: "App",
  components: {
    ToDoList: () => import("@/components/pages/ToDoList.vue"),
  },
};
</script>

<style lang="scss">
@import "scss-reset/_reset.scss";
@import "@/assets/scss/main.scss";
body {
  overflow: hidden;
  background: $wrapper;
  font: {
    family: "Inter", sans-serif;
    size: 20px;
  }
}
</style>
