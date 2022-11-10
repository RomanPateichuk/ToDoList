<template>
  <div :class="$style.task">
    <DoneTaskBtn :TaskValue="TaskValue" @complete="$emit('CallCompleteTask')" />
    <RemoveTaskBtn @CallDeleteTask="$emit('deleteTask')" />
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
