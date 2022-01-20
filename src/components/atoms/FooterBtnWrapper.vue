<template>
  <div class="footer__btn-wrapper">
    <FooterBtn
      v-for="(btn, index) in btns"
      :key="index"
      :FooterBtnValue="btn"
    />
  </div>
</template>
<script>
export default {
  components: {
    FooterBtn: () => import("@/components/molecules/FooterBtn.vue"),
  },
  data() {
    return {
      btns: ["All", "Active", "Completed"],
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.footer__btn-wrapper {
  :not(:last-child) {
    margin-right: 1rem;
    @include MediaFooterBntmobile;
  }
}
</style>
