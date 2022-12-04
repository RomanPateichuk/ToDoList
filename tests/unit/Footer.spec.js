import { mount } from "@vue/test-utils";
import Footer from "../../src/components/organisms/Footer.vue";
import FooterProgress from "../../src/components/atoms/FooterProgress.vue";
import FooterBtnsWrapper from "../../src/components/molecules/FooterBtnsWrapper.vue";
//import Vuex from "vuex";

// const localVue = createLocalVue();
// localVue.use(Vuex);

// const state = {
//   tasks: [
//     { id: "1", value: "Task 1", checked: false },
//     { id: "2", value: "Task 2", checked: false },
//     { id: "3", value: "Task 3", checked: false },
//     { id: "4", value: "Task 4", checked: false },
//     { id: "255", value: "Сделать таск по VUE", checked: false },
//     { id: "256", value: "Сделать таск по REACT", checked: false },
//     { id: "286", value: "Сделать таск по VUE Todo", checked: false },
//   ],

//   filter: "All",
// };

// не могу заставить увидеть геттеры в footerProgress
// const getters = {
//   getDoneCount: () => 2,
//   getTasks: () => state.tasks,
// };

// const store = new Vuex.Store({ state, getters });

// при редактировании таски сохранять текущий текст
// подсветка фильтра по умолчанию 

describe("Тестирование компонента Footer:", () => {
  const wrapper = mount(Footer, {
    computed: {
      // getDoneCount: () => 2,
      // getTasks: () => state.tasks,
    },
  });
  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Подключение компонента 'FooterProgress'", () => {
    expect(wrapper.findComponent(FooterProgress).exists()).toBe(true);
  });

  test("Подключение компонента 'FooterBtnsWrapper'", () => {
    expect(wrapper.findComponent(FooterBtnsWrapper).exists()).toBe(true);
  });
});
