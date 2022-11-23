import { createLocalVue, mount } from "@vue/test-utils";
import EditTaskComponent from "../../src/components/atoms/EditTask.vue";
import { getters, mutations } from "../../src/store/index.js";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      { id: "1", value: "Task 1", checked: false },
      { id: "2", value: "Task 2", checked: true },
    ],
  },
});

describe("Тестирование компонента EditTask:", () => {
  const wrapper = mount(EditTaskComponent, {
    store,
    localVue,
    computed: {
     getCheckedValue: () => jest.fn(),
    },
  });

  const input = wrapper.find("input");
  const button = wrapper.find("button");

  const editTask = jest.spyOn(wrapper.vm, "editTask");
  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("При нажатии кнопки Edit поле становится активным", async () => {
    await input.trigger("keyup.enter");
    expect(wrapper.vm.readonly).toBe(false);
  });

  test("При нажатии кнопки Save поле становится не активным", async () => {
    await button.trigger("click");
    expect(wrapper.vm.readonly).toBe(true);
  });

  test("и снова активным", async () => {
    await button.trigger("click");
    expect(wrapper.vm.readonly).toBe(false);
  });

  test("при клике на кнопку меняется текст save/edit", async () => {
    expect(button.text()).toBe("save");
    await button.trigger("click");
    expect(button.text()).toBe("edit");
  });

  test("при нажатии edit вызывается метод editTask", async () => {
    await button.trigger("click");
    await button.trigger("click");
    expect(editTask).toBeCalled();
  });

  test("при нажатии save вызывается метод callEditTask", async () => {
    await button.trigger("click");
    await button.trigger("click");
    expect(wrapper.emitted().callEditTask).toBeTruthy();
  });

  test("данные можно сохранить  в store", async () => {
    await button.trigger("click");
    await input.setValue("измененный таск");

    mutations.saveEditTask(store.state, {
      id: "1",
      value: input.element.value,
    });

    expect(store.state.tasks).toEqual([
      { id: "1", value: "измененный таск", checked: false },
      { id: "2", value: "Task 2", checked: true },
    ]);
  });

  test("тестирование гетера getCheckedValue", () => {
    expect(getters.getCheckedValue(store.state)("1")).toBe(false);
    expect(getters.getCheckedValue(store.state)("2")).toBe(true);
  });
});
