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
  font: {
    family: "Inter", sans-serif;
    size: 20px;
  }
  background: $wrapper;

  .tasks__wrapper {
    margin: 1.875rem 0 0 0;
    .task {
      display: flex;
      background: $task;
      border-radius: 0.625rem;
      padding: 0 1.25rem;
      height: 3.125rem;
      justify-content: flex-start;
      align-items: center;
      position: relative;
    }
  }
}
</style>
