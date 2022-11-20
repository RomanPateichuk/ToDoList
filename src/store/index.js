import Vue from "vue";
import Vuex from "vuex";
import { uid } from "uid";
Vue.use(Vuex);

export const state = {
  tasks: [
    { id: "1", value: "Task 1", checked: false },
    { id: "2", value: "Task 2", checked: false },
    { id: "3", value: "Task 3", checked: false },
    { id: "4", value: "Task 4", checked: false },
    { id: "255", value: "Сделать таск по VUE", checked: false },
    { id: "256", value: "Сделать таск по REACT", checked: false },
    { id: "286", value: "Сделать таск по VUE Todo", checked: false },
  ],

  filter: "All",
};

export const getters = {
  getTasks: (state) => {
    return state.tasks;
  },

  getDoneCount: (state) => {
    return state.tasks.reduce(
      (prev, el) => (el.checked == true ? prev + 1 : prev),
      0
    );
  },

  getFilter: (state) => {
    if (state.filter == "All") {
      return state.tasks;
    } else if (state.filter == "Active") {
      return state.tasks.filter((item) => item.checked == false);
    } else if (state.filter == "Completed") {
      return state.tasks.filter((item) => item.checked == true);
    }
  },

  getCheckedValue: (state) => (id) => {
    return state.tasks.filter((item) => item.id == id)[0].checked;
  },
};

export const mutations = {
  deleteTask: (state, id) => {
    state.tasks = state.tasks.filter((task) => task.id != id);
  },

  addTask: (state, value) => {
    let obj = {
      id: uid(),
      value: value,
      checked: false,
    };
    state.tasks = state.tasks.concat(obj);
  },

  completeTask: (state, id) => {
    state.tasks = state.tasks.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      } else return item;
    });
  },

  setFilter: (state, FooterBtnValue) => {
    state.filter = FooterBtnValue;
  },

  updateTasks: (state) => {
    state.tasks = JSON.parse(localStorage.getItem("tasks"));
  },

  saveEditTask: (state, param) => {
    state.tasks = state.tasks.map((item) => {
      if (item.id === param.id) {
        item.value = param.value;
        return item;
      } else return item;
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions: {},
  modules: {},
});
