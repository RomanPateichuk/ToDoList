<template>
  <div :class="$style.task">
    <input
      :id="id"
      type="checkbox"
      :class="$style.done"
      v-on:click="CompleteTask(id)"
      v-model="isChecked"
    />
    <label :for="id" :class="$style.chbEmptyLabel"></label>
    <input
      :class="{ [$style.text]: true, [$style.active]: ActiveInput }"
      type="text"
      v-model="value"
      :readonly="readonly"
      v-on:keyup.enter="EditTask(id, value)"
    />
    <button :class="$style.edit" v-on:click="EditTask(id, value)">
      {{ editStatus }}
    </button>
  </div>
</template>

<script>
import EventBus from "../../event-bus";
export default {
  data() {
    return {
      readonly: true,
      editStatus: "edit",
      value: this.TaskValue,
      ActiveInput: false,
    };
  },
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
    },
    id: {
      type: String,
    },
  },
  methods: {
    CompleteTask: function (id) {
      EventBus.$emit("CallCompleteTask", id);
    },
    EditTask: function (id, value) {
      this.ActiveInput = !this.ActiveInput;
      if (this.editStatus === "edit") {
        this.editStatus = "save";
      } else {
        this.editStatus = "edit";
        this.$store.commit({
          type: "SaveEditTask",
          id: id,
          value: value,
        });
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
  padding-left: 3rem;
  width: 90%;
  .chbEmptyLabel {
    &:before {
      content: "";
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      background: $task-done;
      border-radius: 0.3125rem;
      position: absolute;
      top: 0.8125rem;
      left: 1.25rem;
    }

    &:after {
      content: "";
      display: block;
      width: 0.589375rem;
      height: 0.856875rem;
      border: 1px solid $main;
      border-left: none;
      border-top: none;
      position: absolute;
      transform: rotate(45deg);
      top: 0.9375rem;
      left: 1.75rem;
      opacity: 0;
    }
  }

  .text {
    background-color: inherit;
    border: none;
    width: 80%;
    &.active {
      background-color: #ffff;
    }
  }

  .edit {
    background: $task-done;
    border-radius: 0.3125rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
  }

  .done {
    appearance: none;
    &:checked {
      + .text {
        text-decoration: line-through;
      }
      + .chbEmptyLabel {
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
