import Vue from "vue";
import Vuex from "vuex";
import catalog from "./catalog";

Vue.use(Vuex);

export const store = new Vuex.Store({
    namespaced: true,
    modules: {
        catalog
    }
});