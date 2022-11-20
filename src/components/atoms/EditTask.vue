<template>
  <div :class="$style.task">
    <input
      :class="[
        $style.text,
        { [$style.active]: onActiveInput },
        { [$style.unactive]: getCheckedValue(id) },
      ]"
      ref="taskInput"
      :readonly="readonly"
      @keyup.enter="editTask"
      v-model="newTaskValue"
      :placeholder="TaskValue"
    />
    <button :class="$style.edit" v-on:click="editTask()">
      {{ editStatus }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCheckedValue"]),
  },
  data() {
    return {
      readonly: true,
      editStatus: "edit",
      onActiveInput: false,
      newTaskValue: "",
    };
  },
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
  },
  methods: {
    editTask: function () {
      this.OnActiveInput = !this.OnActiveInput;
      this.$refs.taskInput.focus();
      if (this.editStatus === "edit") {
        this.editStatus = "save";
      } else {
        this.editStatus = "edit";
        this.$store.commit("saveEditTask", {
          id: this.id,
          value: this.newTaskValue,
        });
        this.newTaskValue = "";
      }

      this.readonly = !this.readonly;
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.task {
  color: $task-text;
  padding-left: 2rem;
  width: 90%;
  .text {
    background-color: inherit;
    border: none;
    width: 80%;
    padding: 0.4rem;
    &.active {
      background-color: #ffff;
    }
    &.unactive {
      text-decoration: line-through;
    }
    &::placeholder {
      color: rgb(43, 57, 61);
      font-weight: 600;
    }
  }
  .edit {
    background: $task-done;
    border-radius: 0.3125rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }
}
</style>