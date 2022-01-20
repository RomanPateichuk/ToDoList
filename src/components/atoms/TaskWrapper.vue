<template>
  <div class="task">
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

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.task {
  &:not(:first-child) {
    margin: 1.5625rem 0 0 0;
  }

  :last-child {
    margin-left: auto;
  }
}
</style>
