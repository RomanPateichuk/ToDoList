<template>
  <div :class="$style.wrapper">
    <div :class="$style.main">
      <Header />
      <Main />
      <Footer />
    </div>
    <img
      src="@/assets/img/background_img.png"
      alt="background"
      :class="$style.bg"
    />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/organisms/Header.vue"),
    Main: () => import("@/components/organisms/Main.vue"),
    Footer: () => import("@/components/organisms/Footer.vue"),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
.wrapper {
  @media (max-width: 410px) {
    font-size: 1rem;
  }
  max-width: 73.625rem;
  padding: 0 1rem;
  margin: 2.5rem auto 0 auto;

  .bg {
    z-index: 1;
    position: absolute;
    right: 4rem;
    top: -2rem;
  }

  .main {
    background-color: $main;
    max-width: 40rem;
    min-width: 31rem;
    margin: 0 auto;
    z-index: 2;
    position: relative;
  }
}
</style>
