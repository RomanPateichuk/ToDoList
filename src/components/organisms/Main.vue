<template>
  <main :class="$style.main">
    <div :class="$style.tasks">
      <Task
        v-for="(item, index) in callFilter"
        :id="item.id"
        :key="index"
        :isChecked="item.checked"
        :TaskValue="item.value"
        @deleteTask="() => DeleteActiveTask(item.id)"
        @CallCompleteTask="() => CompleteTask(item.id)"
      />

      <div v-if="get_tasks_active == 0">Новых задач нет</div>
      <AddTask />
    </div>
  </main>
</template>

<script>
import EventBus from "../../event-bus";
import { mapGetters } from "vuex";
export default {
  mounted() {
    EventBus.$on("CallActiveTasks", () => {
      this.ActiveTasks();
    });
    EventBus.$on("CallAllTasks", () => {
      this.AllTasks();
    });
    EventBus.$on("CallCompletedTasks", () => {
      this.CompletedTasks();
    });
  },
  components: {
    Task: () => import("@/components/molecules/TaskWrapper.vue"),
    AddTask: () => import("@/components/molecules/AddTaskWrapper.vue"),
  },
  computed: {
    ...mapGetters(["callFilter", "get_tasks_active"]),
  },
  data: function () {
    return {};
  },

  methods: {
    ActiveTasks: function () {
      this.$store.commit("setFilter", "ACTIVE");
    },
    AllTasks: function () {
      this.$store.commit("setFilter", "ALL");
    },
    CompletedTasks: function () {
      this.$store.commit("setFilter", "COMPLETED");
    },
    DeleteActiveTask: function (id) {
      this.$store.commit("DeleteActiveTask", id);
    },

    CompleteTask: function (id) {
      this.$store.commit("CompleteTask", id);
    },
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

  .tasks {
    margin: 1.875rem 0 0 0;
  }
}
</style>
