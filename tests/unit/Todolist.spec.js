import { shallowMount, createLocalVue } from "@vue/test-utils";
import ToDoList from "../../src/components/pages/ToDoList.vue";
import Main from "../../src/components/organisms/Main.vue";
import Footer from "../../src/components/organisms/Footer.vue";
//import Header from "../../src/components/organisms/Header.vue"
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
  getFilter: () => jest.fn(),
  getTasks: () => jest.fn(),
  getDoneCount: () => jest.fn(),
};

const store = new Vuex.Store({ mutations, getters });

describe("Тестирование компонента TaskWrapper:", () => {
  const wrapper = shallowMount(ToDoList, {
    store,
    localVue,
  });

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Подключение компонента 'Main'", () => {
    expect(wrapper.findComponent(Main).exists()).toBe(true);
  });

  test("Подключение компонента 'Footer'", () => {
    expect(wrapper.findComponent(Footer).exists()).toBe(true);
  });

  test("Подключение компонента 'Header'", () => {
    //expect(wrapper.findComponent(Header).exists()).toBeTruthy()
  });
});
