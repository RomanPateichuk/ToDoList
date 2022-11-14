<template>
  <div :class="$style.task">
    <DoneTaskBtn :TaskValue="TaskValue" :isChecked="isChecked" :id="id" />
    <RemoveTaskBtn :id="id" />
  </div>
</template>

<script>
export default {
  components: {
    RemoveTaskBtn: () => import("@/components/atoms/RemoveTaskBtn.vue"),
    DoneTaskBtn: () => import("@/components/atoms/DoneTaskBtn.vue"),
  },
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.task {
  @include Task;
  &:not(:first-child) {
    margin: 1.5625rem 0 0 0;
  }
}
</style>
