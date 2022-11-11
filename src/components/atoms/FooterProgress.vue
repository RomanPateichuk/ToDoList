<template>
  <div :class="$style.progress">
    {{ getDoneCount }}/{{ get_tasks_active.length }} left
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["get_tasks_active", "getDoneCount"]),
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
</style>
