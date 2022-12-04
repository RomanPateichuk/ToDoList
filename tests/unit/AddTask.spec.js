import { mount } from "@vue/test-utils";
import AddTaskComponent from "../../src/components/atoms/AddTask.vue";

describe("Тестирование компонента AddTask:", () => {
  const wrapper = mount(AddTaskComponent, {
    propsData: {},
  });
  const addNewTask = jest.spyOn(wrapper.vm, "addNewTask");
  const input = wrapper.findComponent("input[type='text']");

  test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Должен содержать input с type='text'", () => {
    expect(input.exists()).toBe(true);
  });

  test("Должен вызывать обработчик 'callAddTask' с параметром при нажатии enter", async () => {
    await input.setValue("новый таск");
    await input.trigger("keydown.enter");
    expect(wrapper.emitted().callAddTask).toBeTruthy();
    expect(wrapper.emitted().callAddTask[0][0]).toBe("новый таск");
  });

  test("Должен вызывать метод 'addNewTask' при нажатии enter", async () => {
    await input.trigger("keydown.enter");
    expect(addNewTask).toHaveBeenCalled();
    expect(addNewTask).toHaveBeenCalledTimes(2);
  });

  test("Должен очищать input после ввода", async () => {
    input.element.value = "новый таск";
    input.trigger("input");
    await input.trigger("keydown.enter");
    expect(input.element.value).toBe("");
  });
});
