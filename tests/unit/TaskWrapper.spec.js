import { shallowMount, createLocalVue } from "@vue/test-utils";
import TaskWrapper from "../../src/components/molecules/TaskWrapper.vue";
import DoneTask from "../../src/components/atoms/DoneTask.vue";
import RemoveTask from "../../src/components/atoms/RemoveTask.vue";
import EditTask from "../../src/components/atoms/EditTask.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  completeTask: jest.fn(),
  deleteTask: jest.fn(),
  saveEditTask: jest.fn(),
};

const getters = {
  getCheckedValue: () => jest.fn(),
};

const store = new Vuex.Store({ mutations, getters });

describe("Тестирование компонента TaskWrapper:", () => {
  const wrapper = shallowMount(TaskWrapper, {
    store,
    localVue,
    propsData: {
      TaskValue: "Task 1",
      id: "1",
    },
  });

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("вызов события completeTask из дочернего компонента", () => {
    expect(
      wrapper.findComponent(DoneTask).vm.$emit("completeTask", "1")
    ).toBeTruthy();
  });

  test("Вызов метода 'callRemoveTask' из дочернего компонента", () => {
    expect(
      wrapper.findComponent(RemoveTask).vm.$emit("callRemoveTask", "1")
    ).toBeTruthy();
  });

  test("Вызов мутации 'completeTask' c нагрузкой", () => {
    expect(mutations.completeTask).toHaveBeenCalledWith({}, "1");
  });

  test("Вызов мутации 'deleteTask' с нагрузкой", () => {
    expect(mutations.deleteTask).toHaveBeenCalledWith({}, "1");
  });

  test("Вызов мутации 'editTask' с нагрузкой", () => {
    wrapper.findComponent(EditTask).vm.$emit("callEditTask", "value", "1");
    expect(mutations.saveEditTask).toHaveBeenCalledWith(
      {},
      { id: "1", value: "value" }
    );
  });

  test("Тестирование входных параметров", () => {
    expect(
      wrapper.findComponent(EditTask).findComponent("input").attributes().placeholder
    ).toBe("Task 1");
  });
});
