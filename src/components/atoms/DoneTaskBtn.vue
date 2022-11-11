<template>
  <label :class="$style.task">
    <input
      type="checkbox"
      :class="$style.done"
      @click="$emit('complete')"
      v-model="isChecked"
    />
    <span :class="$style.text">{{ TaskValue }}</span>
  </label>
</template>

<script>
export default {
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.task {
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

  .done {
    appearance: none;
  }

  .done:checked {
    + .text {
      text-decoration: line-through;
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
