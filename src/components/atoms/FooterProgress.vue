<template>
  <div :class="$style.progress">
    {{ getDoneCount }}/{{ getTasks.length }} left
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["getTasks", "getDoneCount"]),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
</style>
