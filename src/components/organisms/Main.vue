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
      <div v-if="getTasks == 0">Новых задач нет</div>
      <AddTask />
    </div>
  </main>
</template>

<script>
import EventBus from "../../event-bus";
import { mapGetters } from "vuex";
export default {
  mounted() {
    EventBus.$on("CallSetFilter", (FooterBtnValue) => {
      this.$store.commit("SetFilter", FooterBtnValue);
    });

    EventBus.$on("CallDeleteTask", (id) => {
      this.$store.commit("DeleteTask", id);
    });

    EventBus.$on("CallCompleteTask", (id) => {
      this.$store.commit("CompleteTask", id);
    });

    if (localStorage.tasks) {
      this.$store.commit("UpdateTasks");
    }
  },
  watch: {
    tasks: function () {
      localStorage.setItem(
        "tasks",
        JSON.stringify(this.$store.getters.getTasks)
      );
    },
  },
  components: {
    Task: () => import("@/components/molecules/TaskWrapper.vue"),
    AddTask: () => import("@/components/molecules/AddTaskWrapper.vue"),
  },
  computed: {
    ...mapGetters(["getFilter", "getTasks"]),

    tasks() {
      return this.$store.getters.getTasks;
    },
  },

  methods: {},
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
