<template>
  <div>
    <input
      type="text"
      :class="$style.add"
      placeholder="Add a new task"
      v-model="NewTaskText"
      v-on:keyup.enter="submitNewTask"
    />
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      NewTaskText: "",
    };
  },
  methods: {
    submitNewTask: function () {
      let obj = {
        id: "",
        value: this.NewTaskText,
      };
      this.$store.commit("addTask", obj);
      this.NewTaskText = "";
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/scss/main.scss";
.add {
  color: $task-remove;
  width: 100%;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: inherit;
    text-align: center;
  }
}
</style>
