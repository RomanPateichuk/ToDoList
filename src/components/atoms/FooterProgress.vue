<template>
  <div :class="$style.progress">
    {{getTaskDoneCount}}/{{ getTaskActiveCount }} left
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["get_tasks_active", "get_tasks_done", "getTaskDoneCount"]),

    getTaskActiveCount: function(){
      return this.get_tasks_active.reduce((prev, el) => (el.checked == false) ? prev + 1: prev, 0);
    },
 getTaskDoneCount: function(){
      return this.get_tasks_active.reduce((prev, el) => (el.checked == true) ? prev + 1: prev, 0);
    },
    
  
    
  },
  methods:{
    // getTaskDoneCount: function(){
    //   return this.get_tasks_active.reduce((prev, el) => (el.checked == true) ? prev + 1: prev, 0);
    // },

  }
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";
</style>
