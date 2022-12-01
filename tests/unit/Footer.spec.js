import { createLocalVue, shallowMount } from "@vue/test-utils";
import Footer from "../../src/components/organisms/Footer.vue";
import FooterProgress from "../../src/components/atoms/FooterProgress.vue";
import FooterBtnsWrapper from "../../src/components/molecules/FooterBtnsWrapper.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const getters = {
  getDoneCount: () => 2,
  getTasks: () => [{ id: "1", value: "Task 1", checked: false }],
};

const store = new Vuex.Store({ getters });

describe("Тестирование компонента Footer:", () => {
  const wrapper = shallowMount(Footer, { store });
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
