import { mount, createLocalVue } from "@vue/test-utils";
import Main from "../../src/components/organisms/Main.vue";
import AddTask from "../../src/components/atoms/AddTask.vue";
import Tasks from "../../src/components/molecules/TaskWrapper.vue"
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const state = {
  
    tasks: [
      { id: "1", value: "Task 1", checked: false },
      { id: "2", value: "Task 2", checked: false },
      { id: "3", value: "Task 3", checked: false },
      { id: "4", value: "Task 4", checked: false },
      { id: "255", value: "Сделать таск по VUE", checked: false },
      { id: "256", value: "Сделать таск по REACT", checked: false },
      { id: "286", value: "Сделать таск по VUE Todo", checked: false },
    ],
  
    filter: "All",
  };



const getters = {
  getTasks: () => [{ id: "1", value: "Task 1", checked: false }],
  getFilter: () => [],
};

const mutations = {
  addTask: jest.fn(),
  updateTasks: jest.fn(),
};

const store = new Vuex.Store({ getters, mutations, state });

describe("Тестирование компонента Main:", () => {
  const wrapper = mount(Main, { store, localVue });

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("вызов события callAddTask из дочернего компонента", () => {
    expect(wrapper.findComponent(AddTask).vm.$emit("callAddTask", "value")).toBeTruthy();
  });

  test("проверка вызова мутации addTask с правильным параметром", () => {
    expect(mutations.addTask).toHaveBeenCalledWith(state, "value");
  });

  test("Подключение компонента 'AddTask'", () => {
    expect(wrapper.findComponent(AddTask).exists()).toBe(true);
  });


  test("Подключение компонента 'TaskWrapper'", () => {
    //expect(wrapper.findAllComponents(Tasks)).toHaveLength(7);
  });
});
