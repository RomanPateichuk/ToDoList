<template>
  <div class="task new__task">
    <AddTaskBtn />
  </div>
</template>

<script>
export default {
  components: {
    AddTaskBtn: () => import("@/components/molecules/AddTaskBtn.vue"),
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.new__task {
  background: $new-task-bg;
  border: 1.5px dashed $task-remove;
  justify-content: center;
  margin: 1.5625rem 0;

  &:focus {
    ::placeholder {
      opacity: 1;
    }
  }

  &:focus-within {
    background: $main;
  }

  :last-child {
    margin-left: 0;
  }
}
</style>
