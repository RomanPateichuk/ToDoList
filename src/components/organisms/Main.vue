<template>
  <main :class="$style.main">
    <div :class="$style.tasks">
      <Task
        v-for="(item, index) in getFilter"
        :id="item.id"
        :key="index"
        :isChecked="item.checked"
        :TaskValue="item.value"
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
    EventBus.$on("SetFilter", (FooterBtnValue) => {
      this.SetFilter(FooterBtnValue);
    });

    EventBus.$on("CallDeleteTask", (id) => {
      this.DeleteTask(id);
    });

    EventBus.$on("CallCompleteTask", (id) => {
      this.CompleteTask(id);
    });

    if (localStorage.tasks) {
      this.$store.commit("UpdateTasks");
    }
  },
  watch: {
    tasks: function () {
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.get_tasks_active)
      );
    },
  },
  components: {
    Task: () => import("@/components/molecules/TaskWrapper.vue"),
    AddTask: () => import("@/components/molecules/AddTaskWrapper.vue"),
  },
  computed: {
    ...mapGetters(["getFilter", "get_tasks_active"]),

    tasks() {
      return this.$store.getters.get_tasks_active;
    },
  },

  methods: {
    SetFilter: function (FooterBtnValue) {
      this.$store.commit("setFilter", FooterBtnValue);
    },

    DeleteTask: function (id) {
      this.$store.commit("DeleteTask", id);
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
