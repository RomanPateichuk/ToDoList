<template>
  <div :class="$style.task">
    <DoneTask :id="id" @completeTask="callMuttationComplete" />
    <EditTask
      :TaskValue="TaskValue"
      :id="id"
      @callEditTask="callMuttationEdit"
    />
    <RemoveTask :id="id" @callRemoveTask="callMuttationRemove" />
  </div>
</template>

<script>
export default {
  components: {
    RemoveTask: () => import("@/components/atoms/RemoveTask.vue"),
    EditTask: () => import("@/components/atoms/EditTask.vue"),
    DoneTask: () => import("@/components/atoms/DoneTask.vue"),
  },
  props: {
    TaskValue: {
      type: String,
      default: "",
    },
    id: {
      type: String,
    },
  },

  methods: {
    callMuttationComplete: function (id) {
      this.$store.commit("completeTask", id);
    },
    callMuttationEdit: function (value, id) {
      this.$store.commit("saveEditTask", {
        id: id,
        value: value,
      });
    },
    callMuttationRemove: function (id) {
      this.$store.commit("deleteTask", id);
    },
  },
};
</script>

<style lang="scss" module>
@import "@/assets/scss/main.scss";

.task {
  @include Task;
  &:not(:first-child) {
    margin: 1.5625rem 0 0 0;
  }
}
</style>
