<template>
  <input type="text" class="add__task" placeholder="Add a new task" />
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.add__task {
  color: $task-remove;
  width: 100%;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: inherit;
    text-align: center;
  }
}
</style>
