
import { shallowMount } from "@vue/test-utils";
import TaskWrapper from "../../src/components/molecules/TaskWrapper.vue";
import RemoveTask from "../../src/components/atoms/RemoveTask.vue";
import DoneTask from "../../src/components/atoms/DoneTask.vue";



describe("Тестирование компонента TaskWrapper:", () => {

  const wrapper =  shallowMount(TaskWrapper,{
    computed: {
      //getCheckedValue: () => jest.fn(),   // не могу добиться видимости геттеров компонентов внутри родителя
    },


   });

   const callMuttationComplete = jest.spyOn(wrapper.vm, "callMuttationComplete");
        
   test("соответствие снимку", () => {
       expect(wrapper).toMatchSnapshot();
   })


    test("вызов события completeTask из дочернего компонента", () => {
    expect(wrapper.findComponent(DoneTask).vm.$emit('completeTask')).toBeTruthy()
    })

    test("вызов мутации callMuttationComplete c нагрузкой", () => {
     //expect(mockStore.commit).toHaveBeenCalledWith("completeTask")
      })


    test("Вызов метода 'callRemoveTask' из дочернего компонента", () => {
      expect(wrapper.findComponent(RemoveTask).vm.$emit('callRemoveTask')).toBeTruthy()  
  })


    test("Вызов метода 'callMuttationSetFilter'", () => {
      //expect(callMuttationComplete).toHaveReturnedTimes(1);
      expect(callMuttationComplete).toHaveBeenCalled();
    })

 
   
    
})