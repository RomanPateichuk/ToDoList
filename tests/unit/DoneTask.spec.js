import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import DoneTaskComponent from "../../src/components/atoms/DoneTask.vue";
const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      { id: "1", value: "Task 1", checked: false },
      { id: "2", value: "Task 2", checked: false },
    ],
  },
});

describe("Тестирование компонента DoneTask:", () => {
  const wrapper = mount(DoneTaskComponent, {
    store,
    localVue,
    computed: {
      getCheckedValue: () => jest.fn(),
    },
  });
  const checkbox = wrapper.find("input");

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Должен вызывать 'completeTask' при клике", async () => {
    await checkbox.trigger("click");
    expect(wrapper.emitted().completeTask).toBeTruthy();
  });
});
