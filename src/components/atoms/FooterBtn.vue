<template>
  <label :class="$style.btns_wrapper"
    ><input
      type="radio"
      name="radio-footer"
      v-on:click="filter(FooterBtnValue)"
    /><span :class="$style.radio">{{ FooterBtnValue }}</span></label
  >
</template>

<script>
import EventBus from "../../event-bus";
export default {
  props: {
    FooterBtnValue: {
      type: String,
      value: "",
    },
  },
  methods: {
    filter: function (FooterBtnValue) {
      if (FooterBtnValue === "Active") {
        EventBus.$emit("CallActiveTasks");
      } else if (FooterBtnValue === "Completed") {
        EventBus.$emit("CallCompletedTasks");
      } else if (FooterBtnValue === "All") {
        EventBus.$emit("CallAllTasks");
      }
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.btns_wrapper {
  input[type="radio"] {
    appearance: none;
  }

  input[type="radio"]:checked {
    + .radio {
      border: 1px solid $footer-border-btn;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }

  .radio {
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0.3rem;
  }
}
</style>
