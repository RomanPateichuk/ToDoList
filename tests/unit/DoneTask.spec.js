import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import DoneTaskComponent from "../../src/components/atoms/DoneTask.vue";
import { mutations } from "../../src/store/index.js";
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
  //const callCompleteTask = jest.spyOn(wrapper.vm, "callCompleteTask");

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Должен вызывать 'completeTask' при клике", async () => {
    await checkbox.trigger("click");
    expect(wrapper.emitted().completeTask).toBeTruthy();
  });

  test("Должен менять в store поле checked", async () => {
    mutations.completeTask(store.state, "1");
    expect(store.state.tasks).toEqual([
      { id: "1", value: "Task 1", checked: true },
      { id: "2", value: "Task 2", checked: false },
    ]);
  });
});
