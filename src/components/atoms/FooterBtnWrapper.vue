<template>
  <div class="footer__btn-wrapper">
    <FooterBtn :FooterBtnValue="value1" />
    <FooterBtn :FooterBtnValue="value2" />
    <FooterBtn :FooterBtnValue="value3" />
  </div>
</template>
<script>
export default {
  components: {
    FooterBtn: () => import("@/components/molecules/FooterBtn.vue"),
  },
  data() {
    return {
      value1: "All",
      value2: "Active",
      value3: "Completed",
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.footer__btn-wrapper {
  :not(:last-child) {
    margin-right: 1rem;
    @media (max-width: 490px) {
      margin-right: 0;
    }
  }
}
</style>
