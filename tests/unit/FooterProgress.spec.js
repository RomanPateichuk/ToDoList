import { mount } from "@vue/test-utils";
import FooterProgress from "../../src/components/atoms/FooterProgress.vue";


describe("Тестирование компонента FooterProgress:", () => {
const wrapper = mount(FooterProgress,{
    computed:{
        getDoneCount: ()=> 2,
        getTasks: ()=>5
    }
});

   
test("соответствие снимку", () => {
    expect(wrapper).toMatchSnapshot();
})

test("Проверка работы геттеров", () => {
    expect(wrapper.find("div").text()).toBe();
})

});