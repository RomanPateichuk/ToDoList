<template>
  <main :class="$style.main">
    <div :class="$style.tasks">
      <Task
        v-show="showAllTask"
        v-for="(item, index) in get_tasks_active"
        :id="item.id"
        :key="index"
        :isChecked="item.checked"
        :TaskValue="item.value"
        @deleteTask="() => DeleteActiveTask(item.id)"
        @CallCompleteTask="() => CompleteTask(item.id)"
      />

      <Task
        v-show="showDoneTask"
        v-for="(item, index) in get_tasks_done"
        :id="item.id"
        :key="'A' + index"
        :TaskValue="item.value"
        @deleteTask="() => DeleteActiveTask(item.id)"
        @CallCompleteTask="() => CompleteTask(item.id)"
      />

      <Task
        v-show="showActiveTask"
        v-for="(item, index) in get_tasks_activee"
        :id="item.id"
        :key="'B' + index"
        :TaskValue="item.value"
        @deleteTask="() => DeleteActiveTask(item.id)"
        @CallCompleteTask="() => CompleteTask(item.id)"
      />

      <div v-if="get_tasks_active == 0">Новых задач нет</div>
      <br />
      <hr />
      <!-- <Task
        v-show="showTaskDone"
        v-for="(item, index) in get_tasks_done"
        :key="index"
        :id="item.id"
        :TaskValue="item.value"
        @deleteTask="() => DeleteDoneTask(item.id)"
      /> -->

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
    // EventBus.$on("CallDeleteTask", () => {
    //   this.DeleteTask();
    // });
  },
  components: {
    Task: () => import("@/components/molecules/TaskWrapper.vue"),
    AddTask: () => import("@/components/molecules/AddTaskWrapper.vue"),
  },
  data: function () {
    return {
      showAllTask: true,
      showDoneTask: false,
      showActiveTask: false,
    };
  },
  computed: {
    ...mapGetters(["get_tasks_active", "get_tasks_done", "get_tasks_activee"]),
  },
  methods: {
    ActiveTasks: function () {
      this.showActiveTask = true;
      this.showDoneTask = false;
      this.showAllTask = false;
    },
    AllTasks: function () {
      this.showAllTask = true;
      this.showDoneTask = false;
      this.showActiveTask = false;
    },
    CompletedTasks: function () {
      this.showDoneTask = true;
      this.showAllTask = false;
      this.showActiveTask = false;
    },
    DeleteActiveTask: function (id) {
      this.$store.commit("DeleteActiveTask", id);
    },

    DeleteDoneTask: function (id) {
      this.$store.commit("DeleteDoneTask", id);
    },

    CompleteTask: function (id) {
      this.$store.commit("CompleteTask", id);
      //this.DeleteActiveTask(id)
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
