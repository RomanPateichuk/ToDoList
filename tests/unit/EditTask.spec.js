import { mount } from "@vue/test-utils";
import EditTaskComponent from "../../src/components/atoms/EditTask.vue";


describe("Тестирование компонента EditTask:", () => {

  const wrapper = mount(EditTaskComponent,{
  computed: {
    getCheckedValue: () => jest.fn(),
  }
})

test("!!!!!!!!!!!!!!!!!!!!", () => {

  });
});
