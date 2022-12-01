import { mount } from "@vue/test-utils";
import Header from "../../src/components/organisms/Header.vue";

describe("Тестирование компонента Header:", () => {
  const wrapper = mount(Header);
  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
