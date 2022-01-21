<template>
  <div :class="$style.new">
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

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.new{
  @include Task;
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
