<template>
  <div :class="$style.task">
    <DoneTaskBtn :TaskValue="TaskValue" />
    <RemoveTaskBtn />
  </div>
</template>

<script>
export default {
  components: {
    RemoveTaskBtn: () => import("@/components/molecules/RemoveTaskBtn.vue"),
    DoneTaskBtn: () => import("@/components/molecules/DoneTaskBtn.vue"),
  },
  props: {
    TaskValue: {
      type: String,
      default: "",
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

  :last-child {
    margin-left: auto;
  }
}
</style>
