<template>
  <label class="btn__label"
    ><input type="radio" name="radio-footer" /><span class="btn__radio">{{
      FooterBtnValue
    }}</span></label
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

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.btn__label {
  input[type="radio"] {
    appearance: none;
  }

  input[type="radio"]:checked {
    + .btn__radio {
      border: 1px solid $footer-border-btn;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }

  .btn__radio {
    border: 1px solid transparent;
    box-sizing: border-box;
    padding: 0.3rem;
  }
}
</style>
