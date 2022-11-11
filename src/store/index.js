import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks_active: [
      { id: 1, value: "Task 1", checked: false },
      { id: 2, value: "Task 2", checked: false },
      { id: 3, value: "Task 3", checked: false },
      { id: 4, value: "Task 4", checked: false },
      { id: 255, value: "Сделать таск по VUE", checked: false },
      { id: 256, value: "Сделать таск по REACT", checked: false },
      { id: 286, value: "Сделать таск по VUE Todo", checked: false },
    ],
  },

  getters: {
    get_tasks_active: (state) => {
      return state.tasks_active;
    },

    get_tasks_done: (state) => {
      return state.tasks_done;
    },

    getActiveCount: (state) => {
      return state.tasks_active.reduce((prev, el) => (el.checked == false ? prev + 1 : prev), 0);
    },

    getDoneCount: () => {

    }

  },
  mutations: {
    DeleteActiveTask: (state, id) => {
      state.tasks_active = state.tasks_active.filter((task) => task.id != id);
    },

    DeleteDoneTask: (state, id) => {
      state.tasks_done = state.tasks_done.filter((task) => task.id != id);
    },

    AddTask: (state, task) => {
      //state.tasks_active.push(task);
      state.tasks_active = [].concat(task, state.tasks_active);
    },

    CompleteTask: (state, id) => {
      // let task = state.tasks_active.find((item) => item.id === id)
      // state.tasks_done.push(task);
      state.tasks_active = state.tasks_active.map((item) => {
        if (item.id === id) {
          item.checked = true;
          return item;
        } else return item;
      });
    },
  },
  actions: {},
  modules: {},
});
