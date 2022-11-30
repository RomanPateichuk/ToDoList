import { mount } from "@vue/test-utils";
import FooterBtnsWrapper from "../../src/components/molecules/FooterBtnsWrapper.vue";
import FooterBtn from "../../src/components/atoms/FooterBtn.vue";

describe("Тестирование компонента FooterProgress:", () => {
  const wrapper = mount(FooterBtnsWrapper, {
    propsData: {},
    mocks: {
      $store: {
        state: {},
        commit: jest.fn(),
      },
    },
  });

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Вызов события 'callFilter' из дочернего компонента", () => {
    expect(
      wrapper.findComponent(FooterBtn).vm.$emit("callFilter")
    ).toBeTruthy();
  });

  test("Вызов события 'callRemoveTask' из дочернего компонента", () => {
    expect(
      wrapper.findComponent(FooterBtn).vm.$emit("callFilter")
    ).toBeTruthy();
  });
});
