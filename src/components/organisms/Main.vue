<template>
  <main :class="$style.main">
    <div :class="$style.tasks">
      <Task
        v-for="(item, index) in getFilter"
        :id="item.id"
        :key="index"
        :TaskValue="item.value"
      />
      <div v-if="getTasks == 0">Новых задач нет</div>
      <AddTask @callAddTask="callMutationAdd" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  mounted() {
    if (localStorage.tasks) {
      this.$store.commit("updateTasks");
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
    AddTask: () => import("@/components/atoms/AddTask.vue"),
  },
  computed: {
    ...mapGetters(["getFilter", "getTasks"]),

    tasks() {
      return this.$store.getters.getTasks;
    },
  },

  methods: {
    callMutationAdd: function (value) {
      this.$store.commit("addTask", value);
      console.log(value);
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
