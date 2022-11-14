<template>
  <label :class="$style.task">
    <input
      type="checkbox"
      :class="$style.done"
      v-on:click="CompleteTask(id)"
      v-model="isChecked"
    />

    <!-- <input type="text" v-model="value" :readonly="readonly" /> -->
    <span :class="$style.text">{{ TaskValue }}</span>
    <!-- <button v-on:click="EditTask(id)">{{ editStatus }}</button> -->
  </label>
</template>

<script>
import EventBus from "../../event-bus";
export default {
  data() {
    return {
      // readonly: true,
      // editStatus: "edit",
      // value: this.TaskValue,
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

    // EditTask: function (id) {
    //   if (this.editStatus === "edit") {
    //     this.editStatus = "save";
    //   } else {
    //     this.editStatus = "edit";
    //     console.log("id", typeof id);
    //     console.log("text", this.value);
    //     this.$store.commit("SaveEditTask", this.value, this.id);
    //   }
    //   this.readonly = !this.readonly;
    // },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.task {
  color: $task-text;
  padding: 0 1.4375rem 0 3rem;

  .text {
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

  .done {
    appearance: none;
  }

  .done:checked {
    + .text {
      text-decoration: line-through;
      &:after {
        opacity: 1;
      }
    }
  }
}
</style>
