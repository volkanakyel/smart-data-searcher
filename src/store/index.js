import Vue from "vue";
import Vuex from "vuex";
import EventService from "@/services/EventServices.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    GET_USERS(state, users) {
      state.users = users;
    },
  },
  actions: {
    fetchUser({ commit }) {
      EventService.getUsers().then((response) => {
        console.log(response.data);
        commit("GET_USERS", response.data);
      });
    },
  },
  modules: {},
});
