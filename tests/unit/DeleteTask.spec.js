import { mount } from "@vue/test-utils";
import DeleteTaskComponent from "../../src/components/atoms/RemoveTask.vue";
import { mutations } from "../../src/store/index.js";

describe("Тестирование компонента DeleteTask:", () => {
  const wrapper = mount(DeleteTaskComponent, {
    propsData: {},
  });
  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Должен удалять задачу из Store", () => {
    const state = {
      tasks: [
        { id: "1", value: "Task 1", checked: false },
        { id: "2", value: "Task 2", checked: false },
      ],
    };

    mutations.deleteTask(state, "1");
    expect(state).toEqual({
      tasks: [{ id: "2", value: "Task 2", checked: false }],
    });
  });
});
