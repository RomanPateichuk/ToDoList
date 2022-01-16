<template>
  <button class="task__remove">&times;</button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.task__remove {
  display: flex;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid $task-remove;
  color: $task-remove;
  border-radius: 0.3125rem;

  &:hover {
    border: 1.5px solid $task-remove-hover;
    color: $task-remove-hover;
    cursor: pointer;
  }
}
</style>
