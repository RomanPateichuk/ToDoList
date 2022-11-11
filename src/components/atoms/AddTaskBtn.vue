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
import { uid } from "uid";
export default {
  data: function () {
    return {
      NewTaskText: "",
    };
  },

  methods: {
    submitNewTask: function () {
      let obj = {
        id: uid(),
        value: this.NewTaskText,
      };
      this.$store.commit("AddTask", obj);
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
