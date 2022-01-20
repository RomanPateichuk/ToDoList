<template>
  <label class="task__text">
    <input type="checkbox" class="task__done" />
    <span class="text">{{ TaskValue }}</span>
  </label>
</template>

<script>
export default {
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.task {
  .task__text {
    color: $task-text;
    padding: 0 1.4375rem 0 3rem;

    .text {
      &:before {
        content: "";
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background: $task-done;
        border-radius: 0.3125rem;
        position: absolute;
        top: 0.8125rem;
        left: 1.25rem;
      }

      &:after {
        content: "";
        display: block;
        width: 0.589375rem;
        height: 0.856875rem;
        border: 1px solid $main;
        border-left: none;
        border-top: none;
        position: absolute;
        transform: rotate(45deg);
        top: 0.9375rem;
        left: 1.75rem;
        opacity: 0;
      }
    }

    .task__done {
      appearance: none;
    }

    .task__done:checked {
      + .text {
        text-decoration: line-through;
        &:after {
          opacity: 1;
        }
      }
    }
  }

  &:not(:first-child) {
    margin: 1.5625rem 0 0 0;
  }

  :last-child {
    margin-left: auto;
  }
}
</style>
