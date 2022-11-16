//import { shallowMount } from "@vue/test-utils";
//import DoneTaskComponent from "../../src/components/atoms/DoneTask.vue";
import { mutations } from "../../src/store/index.js";

describe("DeleteTask component:", () => {
  //   const wrapper = shallowMount(DoneTaskComponent, {
  //     propsData: {
  //         type: String
  //     }
  //})

  test("should call mutation doneTask", () => {
    const tasks = [{ id: "1", value: "Task 1", checked: false }];
    const state = {
      tasks,
    };

    mutations.completeTask(state, "1");
    expect(state).toEqual({
      tasks: [{ id: "1", value: "Task 1", checked: true }],
    });
  });
});
