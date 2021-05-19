import Vue from "vue";
import Vuex from "vuex";
import headerWord from "./modules/headerWord";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    headerWord,
  },
});
