<template>
  <input type="text" :class="$style.add__task" placeholder="Add a new task" />
</template>

<style lang="scss" module>
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
