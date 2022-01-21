<template>
  <main :class="$style.main">
    <div :class="$style.tasks__wrapper">
      <Task v-for="(task, id) in tasks" :key="id" :TaskValue="task.value" />
      <AddTask />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Task: () => import("@/components/atoms/TaskWrapper.vue"),
    AddTask: () => import("@/components/atoms/AddTaskWrapper.vue"),
  },

  data() {
    return {
      tasks: [
        { id: 1, value: "Task 1" },
        { id: 2, value: "Task 2" },
        { id: 3, value: "Task 3" },
        { id: 3, value: "Task 4" },
      ],
    };
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.main {
  display: flex;
  padding: 0 1.875rem 0 1.875rem;
  flex-direction: column;
  @include MediaMainMobile;

  .tasks__wrapper {
    margin: 1.875rem 0 0 0;
  }
}
</style>
