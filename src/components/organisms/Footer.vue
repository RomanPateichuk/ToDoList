<template>
  <footer class="footer">
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

<style scoped lang="scss">
@import "@/assets/scss/main.scss";
.footer {
  display: flex;
  min-height: 3.125rem;
  justify-content: space-between;
  align-items: center;
  background: $task-remove;
  padding: 0 1.875rem;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 410px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 314px) {
    flex-direction: column;
  }

  * {
    color: $footer-font-color;
  }
}
</style>
