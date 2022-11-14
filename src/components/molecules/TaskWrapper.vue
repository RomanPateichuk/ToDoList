<template>
  <div :class="$style.task">
    <DoneTask :isChecked="isChecked" :id="id" />
    <EditTask :isChecked="isChecked" :TaskValue="TaskValue" :id="id" />
    <RemoveTask :id="id" />
  </div>
</template>

<script>
export default {
  components: {
    RemoveTask: () => import("@/components/atoms/RemoveTask.vue"),
    EditTask: () => import("@/components/atoms/EditTask.vue"),
    DoneTask: () => import("@/components/atoms/DoneTask.vue"),
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
