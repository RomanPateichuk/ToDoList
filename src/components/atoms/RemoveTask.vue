<template>
  <button @click="removeTask(id)" :class="$style.remove">&times;</button>
</template>
<script>
export default {
  methods: {
    removeTask: function (id) {
      this.$emit("callRemoveTask", id);
    },
  },
  props: {
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.remove {
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
