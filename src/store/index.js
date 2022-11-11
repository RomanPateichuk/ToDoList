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

    filter: 'ALL'
  },

  getters: {
    get_tasks_active: (state) => {
      return state.tasks_active;
    },

    getDoneCount: (state) => {
      return state.tasks_active.reduce((prev, el) => (el.checked == true ? prev + 1 : prev), 0);
    },

    callFilter: (state) => {
      if (state.filter == "ALL") {
        return state.tasks_active
      }
      else if (state.filter == "ACTIVE") {
        return state.tasks_active.filter(item => item.checked == false);
      }
      else if (state.filter == "COMPLETED") {
        return state.tasks_active.filter(item => item.checked == true);
      }
    }

  },
  mutations: {
    DeleteActiveTask: (state, id) => {
      state.tasks_active = state.tasks_active.filter((task) => task.id != id);
    },

    AddTask: (state, task) => {
      state.tasks_active = state.tasks_active.concat(task);
    },

    CompleteTask: (state, id) => {
      state.tasks_active = state.tasks_active.map((item) => {
        if (item.id === id) {
          if (item.checked == false) {
            item.checked = true;
          }
          else
            item.checked = false;
          return item;
        } else return item;
      });
    },

    setFilter: (state, param) => {
      state.filter = param;
    }
  },
  actions: {},
  modules: {},
});
