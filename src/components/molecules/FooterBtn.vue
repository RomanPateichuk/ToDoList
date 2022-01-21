<template>
  <label :class="$style.btns_wrapper"
    ><input type="radio" name="radio-footer" /><span
      :class="$style.radio"
      >{{ FooterBtnValue }}</span
    ></label
  >
</template>

<script>
export default {
  props: {
    FooterBtnValue: {
      type: String,
      value: "",
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
