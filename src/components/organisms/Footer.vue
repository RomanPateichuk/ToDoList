<template>
  <footer :class="$style.footer">
    <FooterProgress />
    <FooterBtnWrapper />
  </footer>
</template>

<script>
export default {
  components: {
    FooterBtnWrapper: () => import("@/components/atoms/FooterBtnWrapper.vue"),
    FooterProgress: () => import("@/components/molecules/FooterProgress.vue"),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.footer {
  display: flex;
  min-height: 3.125rem;
  justify-content: space-between;
  align-items: center;
  background: $task-remove;
  padding: 0 1.875rem;
  font-family: "Open Sans", sans-serif;
  @include MediaFooterMobile;

  * {
    color: $footer-font-color;
  }
}
</style>
