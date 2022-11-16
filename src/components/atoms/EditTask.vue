<template>
  <div :class="$style.task">
    <input
      :class="[
        $style.text,
        { [$style.active]: OnActiveInput },
        { [$style.unactive]: getCheckedValue(id) },
      ]"
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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCheckedValue"]),
  },
  data() {
    return {
      readonly: true,
      editStatus: "edit",
      value: this.TaskValue,
      OnActiveInput: false,
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
    EditTask: function (id, value) {
      this.OnActiveInput = !this.OnActiveInput;
      if (this.editStatus === "edit") {
        this.editStatus = "save";
      } else {
        this.editStatus = "edit";
        this.$store.commit({
          type: "saveEditTask",
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
  padding-left: 2rem;
  width: 90%;

  .text {
    background-color: inherit;
    border: none;
    width: 80%;
    &.active {
      background-color: #ffff;
    }

    &.unactive {
      text-decoration: line-through;
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
