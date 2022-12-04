<template>
  <div :class="$style.new">
    <input
      type="text"
      :class="$style.add"
      placeholder="Add a new task"
      v-model="NewTaskText"
      @keydown.enter="addNewTask"
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
    addNewTask: function () {
      this.$emit("callAddTask", this.NewTaskText);
      this.NewTaskText = "";
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/scss/main.scss";

.new {
  @include Task;
  background: $new-task-bg;
  border: 1.5px dashed $task-remove;
  justify-content: center;
  margin: 1.5625rem 0;
  &:focus {
    ::placeholder {
      opacity: 1;
    }
  }
  &:focus-within {
    background: $main;
  }
  :last-child {
    margin-left: 0;
  }
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
}
</style>
