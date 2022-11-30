import Vuex from "vuex"
import {createLocalVue } from "@vue/test-utils"
import {getters, mutations} from "../../src/store/index.js"



const localVue = createLocalVue()
localVue.use(Vuex)

const { deleteTask,  addTask, completeTask, setFilter,  updateTasks, saveEditTask } = mutations;
const {getTasks, getDoneCount, getFilter} = getters

// beforeEach(() => {
//     const state = {
//         tasks: [
//             { id: "1", value: "Task 1", checked: false },
//             { id: "2", value: "Task 2", checked: true },
//             { id: "3", value: "Task 3", checked: false },
//           ],
//           filter: "Completed",
//     }
    
//     const store = new Vuex.Store({
//         state
//     })
//   })


describe("Тестирование store", () => {


   
        const store = new Vuex.Store({
            state: {
              tasks: [
                  { id: "1", value: "Task 1", checked: false },
                  { id: "2", value: "Task 2", checked: true },
                  { id: "3", value: "Task 3", checked: false },
                ],
                filter: "Completed",
            }
          })

    test("Проверка геттеров", () => {
        expect(getTasks(store.state)).toEqual([{ id: "1", value: "Task 1", checked: false },{ id: "2", value: "Task 2", checked: true },{ id: "3", value: "Task 3", checked: false },]);    
        expect(getDoneCount(store.state)).toEqual(1)
        expect(getFilter(store.state)).toEqual( [{ id: "2", value: "Task 2", checked: true }])
        store.state.filter = "All"
        expect(getFilter(store.state)).toEqual( [
            { id: "1", value: "Task 1", checked: false },
            { id: "2", value: "Task 2", checked: true },
            { id: "3", value: "Task 3", checked: false },
          ])
          store.state.filter = "Active"
          expect(getFilter(store.state)).toEqual( [
            { id: "1", value: "Task 1", checked: false },
            { id: "3", value: "Task 3", checked: false },
          ])
    })


    test("Должен добавлять новую задачу в store", async() => {
        const value = "new Task";
       await addTask(store.state, value);
         const id = getTasks(store.state)[3].id;
        expect(store.state.tasks).toEqual([
            { id: "1", value: "Task 1", checked: false },
            { id: "2", value: "Task 2", checked: true },
            { id: "3", value: "Task 3", checked: false },
            { id: id, value: "new Task", checked: false }
          ]);
    
        expect(store.state.tasks[0].value).toBe("Task 1");
        expect(store.state.tasks.length).toBe(4);
      });

    //   test("Должен менять в store поле checked", async () => {
    //     completeTask(store.state, "1");
    //     expect(store.state.tasks).toEqual(
    //         [
    //             { id: "1", value: "Task 1", checked: true },
    //             { id: "2", value: "Task 2", checked: true },
    //             { id: "3", value: "Task 3", checked: false },
    //             { id: id, value: "new Task", checked: false }
    //           ]
    //     );
    //   });

})