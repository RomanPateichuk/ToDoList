import { shallowMount } from "@vue/test-utils";
import AddTaskComponent from "../../src/components/atoms/AddTask.vue";
import { mutations } from "../../src/store/index.js";

describe("AddTask component:", () => {
  const wrapper = shallowMount(AddTaskComponent, {
    propsData: {
      NewTaskText: "",
    },
  });

  test("should contains input", () => {
    expect(wrapper.find("input").exists()).toBe(true);
  });

  test("should add new task to store", () => {
    const task = { id: "1", value: "Task 1", checked: false };
    const tasks = [];
    const state = {
      tasks,
    };

    mutations.addTask(state, task);
    expect(state).toEqual({
      tasks: [{ id: "1", value: "Task 1", checked: false }],
    });
  });
});
