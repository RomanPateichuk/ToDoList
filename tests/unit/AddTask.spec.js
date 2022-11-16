import { shallowMount, mount } from "@vue/test-utils";
import AddTaskComponent from "../../src/components/atoms/AddTask.vue";
import { mutations } from "../../src/store/index.js";

describe("AddTask component:", () => {
  const wrapper = shallowMount(AddTaskComponent, {
    data() {
      return {
        NewTaskText: '',
      }
    }
  });
  const input = wrapper.find("input")

  test("should contains input", () => {
    expect(input.exists()).toBe(true);
  });

  test("should add new task to store", () => {
    const task = { id: "1", value: "Task 1", checked: false };
    const tasks = [];
    const state = {
      tasks,
    };

    mutations.addTask(state, task);
    expect(state).toEqual({
      tasks: [{ id: "1", value: "Task 1", checked: false }],
    });
  });



  // test("should call submitNewTask when enter is pressed enter", async () => {
  //   await wrapper.find("input").trigger("keydown.enter");
  //   expect(wrapper.emitted("getInputValue")).toBeTruthy();
  // })



  // const clickHandler = jest.fn()
  // const wrapper1 = mount(AddTaskComponent, {
  //   propsData: { clickHandler }
  // })
  // wrapper1.find("input").trigger("keydown.enter") // вызывает метод напрямую
  // expect(clickHandler.called).toBe(true)


  // const wrapper1 = mount(AddTaskComponent);
  // wrapper1.vm.$emit('submitNewTask')
  // expect(wrapper1.emitted().submitNewTask).toBeTruthy()


  // expect(input.attributes().placeholder).toBe("Add a new task")
  // input.setValue("Закончить писать тесты")
  //expect(input.element.value).toBe('Закончить писать тесты')



  /* через triger */
  //const enterTask = jest.fn()
  //await wrapper.find("input").trigger("click");    //работает и вызывает метод submitNewTask

  //expect(wrapper.emitted().submitNewTask).toBeCalled()

  //expect(wrapper.emitted().AddTask).toBeCalled()

  //expect(wrapper.emitted()).toHaveProperty('submitNewTask')


  // wrapper.vm.$emit('submitNewTask')
  // wrapper.vm.$emit('submitNewTask', 123)
  // await wrapper.vm.$nextTick()
  // expect(wrapper.emitted().submitNewTask).toBeTruthy()
  // expect(wrapper.emitted().submitNewTask.length).toBe(2)
  // expect(wrapper.emitted().submitNewTask[1]).toEqual([123])

  // const callback = jest.fn();
  // [1, 2, 3].forEach(callback);
  // expect(callback.mock.calls).toHaveLength(3);




  //exepct(wrapper.emitted().callback).toBeTruthy()
  //expect(input.attributes().placeholder).toBe("")
  // wrapper.vm.submitNewTask()
  //wrapper.vm.submitNewTask()
  //wrapper.trigger("enter");
  //console.log("Порожденные события: ", wrapper.emitted())
  //expect(wrapper.emitted().submitNewTask).toBeTruthy()



})

