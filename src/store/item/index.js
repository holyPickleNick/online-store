import getters from "../getters";
import { fetchMutations } from "../mutations";
import { fetchData } from "../catalog/data";
import WebError from "../../errors/WebError";
import { getInitialState } from "../utils";

const state = getInitialState();

const actions = {
    async load(store, id) {
        store.commit('load');

        try {
            const results = await fetchData(id);

            store.commit('success', results);
        } catch (error) {
            const payload = { message: error.message };

            if (error instanceof WebError) {
                payload.statusCode = error.statusCode;   
            }

            store.commit('failure', payload);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations: fetchMutations,
    actions,
}