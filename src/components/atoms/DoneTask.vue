<template>
  <div :class="$style.wrapper">
    <input
      :id="id"
      type="checkbox"
      :class="$style.done"
      v-on:click="completeTask(id)"
      :checked="getCheckedValue(id)"
    />
    <label :for="id" :class="$style.chbEmptyLabel"></label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCheckedValue"]),
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: {
    completeTask: function (id) {
      this.$store.commit("completeTask", id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.wrapper {
  .chbEmptyLabel {
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
    &:checked {
      + .chbEmptyLabel {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
