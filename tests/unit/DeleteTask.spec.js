//import { shallowMount } from "@vue/test-utils";
//import DeleteTaskComponent from "../../src/components/atoms/RemoveTask.vue";
import { mutations } from "../../src/store/index.js";

describe("DeleteTask component:", () => {
  // const wrapper = shallowMount(DeleteTaskComponent, {
  //   propsData: {
  //     type: String,
  //   },
  // });

  test("should delete task", () => {
    const task = { id: "1", value: "Task 1", checked: false };
    const tasks = [];
    const state = {
      tasks,
    };

    mutations.deleteTask(state, task.id);
    expect(state).toEqual({
      tasks: [],
    });
  });
});
