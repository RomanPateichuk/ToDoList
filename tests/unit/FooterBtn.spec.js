import { mount } from "@vue/test-utils";
import FooterBtnComponent from "../../src/components/atoms/FooterBtn.vue";


describe("Тестирование компонента FooterBtn:", () => {
    const wrapper = mount(FooterBtnComponent, {
     propsData:{
        FooterBtnValue: "ALL"
     },
 
    });

    const input = wrapper.find("input")
    test("соответствие снимку", () => {
      expect(wrapper).toMatchSnapshot();
    });
    
    test("Проверка входных параметров", async () => {
      expect(wrapper.find("span").text()).toBe("ALL")
    });
  

    test("при клике вызываются методы 'callFilter'", async () => {
        await input.trigger("click");
        expect(wrapper.emitted().callFilter).toBeTruthy();
        
      });
  });
  
