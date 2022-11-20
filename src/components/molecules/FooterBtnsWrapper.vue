<template>
  <div :class="$style.btn">
    <FooterBtn
      v-for="(btn, index) in btns"
      :key="index"
      :FooterBtnValue="btn"
      @callFilter="callMuttationSetFilter(btn)"
    />
  </div>
</template>
<script>
export default {
  components: {
    FooterBtn: () => import("@/components/atoms/FooterBtn.vue"),
  },
  data() {
    return {
      btns: ["All", "Active", "Completed"],
    };
  },
  methods: {
    callMuttationSetFilter: function (FooterBtnValue) {
      this.$store.commit("setFilter", FooterBtnValue);
    },
  },
};
</script>
<style lang="scss" module>
@import "@/assets/scss/main.scss";
.btn {
  :not(:last-child) {
    margin-right: 1rem;
    @include MediaFooterBntmobile;
  }
}
</style>
