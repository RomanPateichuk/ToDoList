<template>
  <div :class="$style.task">
    <DoneTask :id="id" @completeTask="callMuttationComplete(id)" />
    <EditTask
      :TaskValue="TaskValue"
      :id="id"
      @callEditTask="callMuttationEdit"
    />
    <RemoveTask @callRemoveTask="callMuttationRemove" />
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
    callMuttationEdit: function (value) {
      this.$store.commit("saveEditTask", {
        id: this.id,
        value: value,
      });
    },
    callMuttationRemove: function () {
      this.$store.commit("deleteTask", this.id);
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
