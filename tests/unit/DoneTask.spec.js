import Vuex from "vuex"
import { mount, createLocalVue } from "@vue/test-utils"
import DoneTaskComponent from "../../src/components/atoms/DoneTask.vue";

const localVue = createLocalVue()
localVue.use(Vuex)


  const store = new Vuex.Store({
    state: {
      tasks: [
        { id: "1", value: "Task 1", checked: false },
        { id: "2", value: "Task 2", checked: false },
        { id: "3", value: "Task 3", checked: false },
        { id: "4", value: "Task 4", checked: false },
        { id: "255", value: "Сделать таск по VUE", checked: false },
        { id: "256", value: "Сделать таск по REACT", checked: false },
        { id: "286", value: "Сделать таск по VUE Todo", checked: false },
      ],
    }
  })

  
 describe("Тестирование компонента DoneTask:", () => {

  
  const wrapper = mount(DoneTaskComponent, {
      store, 
      localVue, 
      computed: {
        getCheckedValue: () => jest.fn(),
      }
  });
  const checkbox = wrapper.find("label")
  const callCompleteTask = jest.spyOn(wrapper.vm, 'callCompleteTask');
  

  test("Должен вызывать 'callCompleteTask' при клике", async() => {
    //await checkbox.trigger("click")
    
    wrapper.vm.callCompleteTask();
    expect(callCompleteTask).toHaveBeenCalled()
    
    // expect(callCompleteTask).toHaveBeenCalledTimes(1);

  })
  
});



